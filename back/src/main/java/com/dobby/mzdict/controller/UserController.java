package com.dobby.mzdict.controller;

import com.dobby.mzdict.service.UserService;
import com.dobby.mzdict.vo.LoginVO;
import com.dobby.mzdict.vo.UserVO;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/user")
public class UserController implements UserControllerDocs{

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @Override
    @PostMapping("/register")
    public ResponseEntity<Object> userRegister(UserVO userInfo) {
        try {
            return ResponseEntity.ok(service.register(userInfo));
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body("이미 존재하는 아이디입니다.");
        }
    }

    @Override
    @PostMapping("/login")
    public ResponseEntity<Object> userLogin(LoginVO userInfo) {
        try {
            Boolean info = service.login(userInfo);
            return ResponseEntity.ok().body(info);
        } catch (NullPointerException e) {
            return ResponseEntity.status(404).body("존재하지 않는 아이디입니다.");
        }
    }

    @GetMapping("/test")
    public List<UserVO> getUsers() {
        return service.getUsers();
    }

}
