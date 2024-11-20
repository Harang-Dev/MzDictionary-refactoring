package com.dobby.mzdict.service;

import com.dobby.mzdict.mapper.RoleMapper;
import com.dobby.mzdict.vo.RoleVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    public RoleMapper mapper;

    public List<RoleVO> selectTest() {
        return mapper.getList();
    }

}