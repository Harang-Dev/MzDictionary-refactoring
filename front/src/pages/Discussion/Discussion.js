import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import DiscussionBox from '../../components/layout/Discussion/DiscussionBox';
import Sidebar from '../../components/layout/Sidebar';
import Comment from '../../components/layout/Dictionary/Comment';

import styled from 'styled-components';

const { Content, Sider } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;

const StyledSider = styled(Sider)`
    height: 497px;
    background-color: inherit;
    position: fixed; // 변경된 부분
    right: 381px; // 오른쪽 고정
    top: 0; // 상단 고정
    transform: translateY(-50%);
    transition: top 0.7s ease-out;
`;

function Discussion() {
    const [barPosition, setbarPosition] = useState(400);

    const handleScroll = () => {
        const position = 1080 < 400 + window.scrollY ? 1080 : 400 + window.scrollY;
        setbarPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100}}>  {/* Content의 높이를 화면 전체에 맞춤 */}
            <DiscussionBox />
            <Comment />
            </Content>
            <StyledSider width={320} style={{top: barPosition}}>
                <Sidebar />
            </StyledSider>
        </PaddedLayout>
    );
}

export default Discussion;