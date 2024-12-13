import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Avatar, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  width: 320px;
  height: 497px;
  background-color: inherit;
  border-radius: 12px;
  padding: 16px;
  position: fixed;
  top: ${({ barPosition }) => barPosition}px;
  transition: top 0.3s ease-out;
  z-index: 1000;
  left: 1200px;
`;

const StatsContainer = styled.div`
  width: 320px;
  text-align: center;
  background-color: #deb887;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #cccccc;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${({ noBorder }) => (noBorder ? '13px' : '33px')};
  border-right: ${({ noBorder }) => (noBorder ? 'none' : '2px solid #ffffff')};
`;

const UserInfoContainer = styled.div`
  width: 320px;
  height: 73px;
  padding: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabMenuContainer = styled.div`
  width: 270px;
  height: 36px;
  margin-top: 30px;
  margin-left: 27px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px 0;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #cccccc;
`;

const TabItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#deb887' : 'transparent')};
  border-radius: 12px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: background-color 0.3s, font-weight 0.3s;
`;

const TabContent = styled.div`
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 16px;
`;

const TabPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #ffffff;
  border-radius: 12px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 107px;
  margin-top: 16px;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  color: #626262;

  &:hover {
    background-color: #d0d0d0;
    border-color: #b0b0b0;
  }

  &:active {
    background-color: #b0b0b0;
    border-color: #909090;
  }
`;

const Sidebar = () => {
  const API = process.env.REACT_APP_API_URL;
  const [activeTab, setActiveTab] = useState('word');
  const [barPosition, setBarPosition] = useState(200);
  const [userData, setUserData] = useState(null);
  const { token, isLoggedIn } = useSelector((state) => state.auth);  // redux에서 로그인 상태 가져오기
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const position = 1080 < 200 + window.scrollY ? 1080 : 200 + window.scrollY;
      setBarPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`${API}/user/detail`, {
            headers: {
              'X-AUTH-TOKEN': token,
            },
          });
          const data = await response.json();
          setUserData(data);
          console.log("유저 데이터 값",userData);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      };

      fetchUserData();
    }
  }, [isLoggedIn, token, API]);

  const handleLogout = () => {
    dispatch(
      logout({
          isLoggedIn: false,
      })
  );
    navigate('/'); 
  };

  return (
    <StyledSider barPosition={barPosition}>
      {/* 방문자 수 및 단어수 통계 */}
      <StatsContainer>
        <StatItem>
          <span style={{ fontSize: 14, color: '#F6F4F4' }}>단어수</span>
          <span style={{ fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' }}>491</span>
        </StatItem>

        <StatItem noBorder>
          <span style={{ fontSize: 14, color: '#F6F4F4' }}>방문자수</span>
          <span style={{ fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' }}>203,290</span>
        </StatItem>
      </StatsContainer>

      {/* 사용자 정보 영역 - 조건부 렌더링 */}
      {isLoggedIn ? (
        <UserInfoContainer>
          <Avatar size={64} src="/media/default-profile.png" />
          <span style={{ fontSize: 14, fontWeight: 'bold', marginRight: 40 }}>{userData.userId}</span>
          <Button onClick={handleLogout}>로그아웃</Button>
        </UserInfoContainer>
      ) : (
        <Link to="/login">
          <UserInfoContainer>
            <span style={{ color: '#888888', fontSize: 13, textAlign: 'center', flex: 1 }}>로그인 후 이용해주세요</span>
          </UserInfoContainer>
        </Link>
      )}

      {/* 탭 메뉴 영역 */}
      <div style={{ width: 320, height: 295, backgroundColor: '#ffffff', border: '1px solid #C7C7C7' }}>
        <TabMenuContainer>
          <TabItem active={activeTab === 'word'} onClick={() => setActiveTab('word')}>나의 단어</TabItem>
          <TabItem active={activeTab === 'alert'} onClick={() => setActiveTab('alert')}>알림</TabItem>
        </TabMenuContainer>

        {/* 탭에 따른 내용 렌더링 */}
        {activeTab === 'word' && (
          <TabContent>
            <TabPlaceholder>나의 단어가 없습니다</TabPlaceholder>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledButton type="primary">추가하기</StyledButton>
            </div>
          </TabContent>
        )}

        {activeTab === 'alert' && (
          <TabContent>
            <TabPlaceholder>알림이 없습니다</TabPlaceholder>
          </TabContent>
        )}
      </div>
    </StyledSider>
  );
};

export default Sidebar;
