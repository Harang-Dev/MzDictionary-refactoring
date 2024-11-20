import React, { useState } from 'react';
import { Card, Space } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    .ant-card-head {
        background-color: #00C3FF; /* 제목 배경색 */
        color: white; /* 제목 텍스트 색상 */
        height: 76px;
        font-size: 20px;
    }
    .ant-card-body {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const StyledButton = styled.button`
    background-color: #9AB9FF;
    color: white;
    width: 91px;
    height: 37px;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
`;

const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 727px;
    height: 145px;
`;

const ProgressContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #f0f0f0; /* 전체 배경색 */
    border-radius: 5px; /* 둥근 모서리 */
    overflow: hidden; /* 안쪽 여백 */
    height: 131px; /* 막대 높이에 맞춰 높이 조정 */
`;

const ProgressBar = styled.div`
    height: 100%; /* 막대 높이 설정 */
    transition: width 0.5s; /* 애니메이션 효과 */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FirstProgress = styled(ProgressBar)`
    background-color: #1E96FF;
    width: ${(props) => props.width};
`;

const SecondProgress = styled(ProgressBar)`
    background-color: #FF88A7;
    width: ${(props) => props.width};
`;

const StyledP = styled.p`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px;
`;

function DiscussionBox() {
    const [data, setData] = useState({ first: 70, second: 30 });

    return (
        <div style={{ marginTop: 60 }}>
            <Space direction="vertical" size={16}>
                <StyledCard
                    title="오늘의 토론"
                    style={{ width: 727 }}
                >
                    <TopicContainer>
                        <h1>주제</h1>
                        <p>비건, 채식주의가 더 건강한 라이프스타일일까?</p>
                    </TopicContainer>

                    <ProgressContainer>
                        <FirstProgress width={`${data.first}%`}>
                            <StyledP>채식이<br />더<br />건강하다</StyledP>
                            <StyledP>70%</StyledP>
                        </FirstProgress>
                        <SecondProgress width={`${data.second}%`}>
                            <StyledP>30%</StyledP>
                            <StyledP>채식은<br />불균형<br />식단이다</StyledP>
                        </SecondProgress>
                    </ProgressContainer>

                    <StyledButton>선택하기</StyledButton>
                </StyledCard>
            </Space>
        </div>
    );
}

export default DiscussionBox;