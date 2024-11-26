import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import WordRequest from '../../components/layout/AdminPage/WordRequest';
import StatusView from '../../components/layout/AdminPage/StatusView';
import Settings from '../../components/layout/AdminPage/Settings';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1'); // 현재 선택된 메뉴를 추적

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 메뉴 항목 클릭 시 선택된 메뉴 변경
  const handleMenuSelect = ({ key }) => {
    setSelectedMenu(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width="200">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenu]} // 현재 선택된 메뉴에 스타일을 적용
          onSelect={handleMenuSelect} // 메뉴 선택 시 상태 업데이트
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '단어 추가 요청',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '현황 보기',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '기타 설정',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 메뉴에 따라 다르게 컴포넌트 표시 */}
          {selectedMenu === '1' && <WordRequest />}
          {selectedMenu === '2' && <StatusView />}
          {selectedMenu === '3' && <Settings />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
