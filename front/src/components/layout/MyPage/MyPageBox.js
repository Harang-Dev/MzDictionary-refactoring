import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Upload, Button, Input, message } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled(Card)`
  .ant-card-head {
    background-color: #FFDAAB;
    color: white;
    height: 76px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .ant-card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #d9d9d9; /* 큰 테두리 */
    border-radius: 8px; /* 카드의 둥근 모서리 */
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledInput = styled(Input)`
  font-size: 14px;
  background-color: #ffffff;
  border: none; /* 내부 테두리 제거 */
  padding: 12px 16px;
  color: #333;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none; /* 포커스 시에도 외부 테두리 제거 */
    box-shadow: 0 0 8px rgba(255, 218, 171, 0.5); /* 외부 테두리 효과 추가 */
  }

  &::placeholder {
    color: #b0b0b0;
    font-style: italic;
  }
`;

const MyPageBox = () => {
  const [profileImage, setProfileImage] = useState('/media/default-profile.png');

  const handleGetUserInfo = async() => {
    try {
      const response = await axios.get('http://58.126.15.120:8888/user/test');
    }
    catch(error) {
      message.error(error);
    }
  }

  useEffect(()=> {
    handleGetUserInfo();
  }, []);


  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setProfileImage(imageUrl);
      message.success(`${info.file.name} 업로드 완료.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 업로드 실패.`);
    }
  };

  return (
    <div style={{ marginTop: 60 }}>
      <Space direction="vertical" size={16}>
        <StyledCard title="마이페이지" style={{ width: 727 }}>
          <ProfileWrapper>
            {/* 프로필 사진 */}
            <Avatar
              size={120}
              src={profileImage}
              icon={<UserOutlined />}
              style={{
                border: '2px solid #FFDAAB',
              }}
            />
            <Upload
              showUploadList={false}
              beforeUpload={() => true}
              onChange={handleImageUpload}
            >
              <Button icon={<UploadOutlined />} type="primary">
                사진 업로드
              </Button>
            </Upload>
          </ProfileWrapper>

          {/* 사용자 정보 */}
          <InfoContainer>
            <StyledInput value="사용자123" readOnly addonBefore="닉네임" />
            <StyledInput value="user123@example.com" readOnly addonBefore="이메일" />
            <StyledInput value="2023-01-01" readOnly addonBefore="가입일" />
            <StyledInput value="32회" readOnly addonBefore="방문 횟수" />
          </InfoContainer>
        </StyledCard>
      </Space>
    </div>
  );
};

export default MyPageBox;
