package com.dobby.mzdict.mapper;

import com.dobby.mzdict.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    public UserVO getUser(int userId);
    public List<UserVO> getUsers();
    public UserVO getUserByUserId(String userId);

    public Boolean addUser(UserVO userInfo);
}
