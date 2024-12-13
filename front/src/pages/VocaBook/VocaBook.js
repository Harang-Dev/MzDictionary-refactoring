import React from 'react';
import { Layout } from 'antd';
import VocaBox from '../../components/layout/VocaBook/VocaBox';
import styled from 'styled-components';

const { Content } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;

function VocaBook() {

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100}}>  {/* Content의 높이를 화면 전체에 맞춤 */}
            <VocaBox />
            </Content>
        </PaddedLayout>
    );
}

export default VocaBook;