import React from 'react';
import { Layout } from 'antd';
import DiscussionBox from '../../components/layout/Discussion/DiscussionBox';
import Comment from '../../components/layout/Dictionary/Comment';

import styled from 'styled-components';

const { Content } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;

function Discussion() {

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100}}>  {/* Content의 높이를 화면 전체에 맞춤 */}
            <DiscussionBox />
            <Comment />
            </Content>
        </PaddedLayout>
    );
}

export default Discussion;