package com.dobby.mzdict.mapper;
import java.util.List;
import com.dobby.mzdict.vo.RoleVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {
    public RoleVO get(int roleId);
    public List<RoleVO> getList();
}
