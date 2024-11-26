import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: #FFFFFF;
  padding: 0 381px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  background-size: cover;
`;

const StyledMenu = styled(Menu)`
  line-height: 64px;
  margin-left: auto;
  font-size: 15px;
  flex-grow: 1;
  display: flex; 
  justify-content: flex-end;
  font-weight: bold;
  background-color: #FFFFFF;
`;

const CustomHeader = () => {
  const location = useLocation();
  
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src="/media/logo.png" alt="Logo" />
      </Link>
      <StyledMenu theme="light" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">홈</Link>
        </Menu.Item>
        <Menu.Item key="/Discussion">
          <Link to="/Discussion">오늘의 토론</Link>
        </Menu.Item>
        <Menu.Item key="/Quiz">
          <Link to="/Quiz">오늘의 퀴즈</Link>
        </Menu.Item>
        <Menu.Item key="/VocaBook">
          <Link to="/vocabook">단어장</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/mypage">MY</Link>
        </Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
};

export default CustomHeader;
