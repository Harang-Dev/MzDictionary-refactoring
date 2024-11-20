package com.dobby.mzdict.service;

import com.dobby.mzdict.mapper.UserMapper;
import com.dobby.mzdict.vo.LoginVO;
import com.dobby.mzdict.vo.UserVO;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    private final UserMapper mapper;
    private final PasswordEncoder pwdEncoder;

    public UserService(UserMapper mapper, PasswordEncoder pwdEncoder) {
        this.mapper = mapper;
        this.pwdEncoder = pwdEncoder;
    }

    public UserVO getUser(int userId) {
        return mapper.getUser(userId);
    }

    public UserVO getUserByUserId(String userId){
        return mapper.getUserByUserId(userId);
    }

    public List<UserVO> getUsers() {
        return mapper.getUsers();
    }

    public Boolean login(LoginVO userInfo) {
        UserVO vo = mapper.getUserByUserId(userInfo.getUserId());
        return vo.getPassWord().equals(userInfo.getPassword());
    }

    @Transactional
    public UserVO register(UserVO userInfo) {
        UserVO vo = mapper.getUserByUserId(userInfo.getUserId());
        if (vo != null) {
            throw new RuntimeException("이미 존재하는 아이디입니다: " + userInfo.getUserId());
        }

        String encryptPassword = pwdEncoder.encode(userInfo.getPassWord());
        userInfo.setPassWord(encryptPassword);

        mapper.addUser(userInfo);
        return mapper.getUserByUserId(userInfo.getUserId());
    }
}
