import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import MyPageBox from '../../components/layout/MyPage/MyPageBox';

const { Content } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;


function AddVoca() {

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100 }}>
                <MyPageBox />
            </Content>
        </PaddedLayout>
    );
}

export default AddVoca;
