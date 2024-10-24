import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

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
  return (
    <StyledHeader>
      <div className="logo">
        <Logo
          src='/media/logo.png'
          alt="Logo"
        />
      </div>
      <StyledMenu theme="light" mode="horizontal">
        <Link to="/">
          <Menu.Item key="1">홈</Menu.Item>
        </Link>
        <Menu.Item key="2">오늘의 토론</Menu.Item>
        <Menu.Item key="3">오늘의 퀴즈</Menu.Item>
        <Menu.Item key="4">단어장</Menu.Item>
        <Menu.Item key="5">MY</Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
};

export default CustomHeader;
