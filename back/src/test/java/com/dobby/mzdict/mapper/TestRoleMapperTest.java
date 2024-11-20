package com.dobby.mzdict.mapper;

import com.dobby.mzdict.vo.RoleVO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Log4j2
public class TestRoleMapperTest {

    @Autowired
    private RoleMapper mapper;

    @Test
    @DisplayName("DB 값 가지고 오면 성공")
    public void test() {
        List<RoleVO> vo = mapper.getList();
        log.info(vo);
    }
}