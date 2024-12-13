import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background-color: #182233;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

const Separator = styled.div`
  width: 3px;
  height: 3px;
  background-color: white;
  border-radius: 50%;
  margin: 0 10px;
`;

const CustomFooter = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/add');
  };

  return (
    <StyledFooter>
      <FooterItem onClick={handleNavigate}>추가하기</FooterItem>
      <Separator />
      <FooterItem>오류신고</FooterItem>
      <Separator />
      <FooterItem>삭제요청</FooterItem>
    </StyledFooter>
  );
};

export default CustomFooter;
