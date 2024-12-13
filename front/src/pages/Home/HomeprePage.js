import React from 'react';
import { Layout } from 'antd';
import SearchBar from '../../components/layout/Home/Search';
import MyMenu from '../../components/layout/Home/MyMenu';
import BestWord from '../../components/layout/Home/BestWord';
import styled from 'styled-components';

const { Content } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;

function HomeprePage() {

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100}}>  {/* Content의 높이를 화면 전체에 맞춤 */}
                <SearchBar />
                <MyMenu />
                <BestWord />
            </Content>
        </PaddedLayout>
    );
}

export default HomeprePage;
