package com.dobby.mzdict.vo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Data
public class UserVO {
    private Integer id;
    private String userId;
    private String userEmail;
    private String userNickName;
    private String passWord;
    private Date createTime;
    private Date updateTime;
}
