import React, { useState } from 'react';
import { Card, Space, Button, message, notification } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    .ant-card-head {
        background-color: #FFB4B9; 
        color: white;
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

const QuizContainer = styled.div`
    width: 727px;
    height: 388px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const QuestionBox = styled.div`
    width: 355px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledP = styled.p`
    font-size: 20px;
    text-align: center;
`;

const ImageContainer = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 20px;
    background-image: url('/media/loopy.png');
    background-size: cover;
    background-repeat: no-repeat;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    width: 100%;
`;

const CircleButton = styled(Button)`
    width: 107px;
    height: 107px;
    border-radius: 50%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${(props) => props.color};
    color: white !important;
    
    &:hover {
        background-color: ${(props) => props.color} !important;
        opacity: 0.9;
    }
`;

const RetryButton = styled(Button)`
    margin-top: 20px;
    background-color: #FFB4B9;
    border: none;
    color: white;
    &:hover {
        opacity: 0.8;
    }
`;

function QuizBox() {
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (answer) => {
        if (answer === 'O') {
            message.success('정답입니다! 잘 하셨어요!');
            setIsCorrect(true);
        } else {
            notification.error({
                message: '오답입니다!',
                description: '힌트: "군싹"은 "군침이 싹 도네"의 줄임말입니다. 다시 생각해 보세요!',
                placement: 'bottomLeft',
            });
            setIsCorrect(false);
        }
    };

    const handleRetry = () => {
        setIsCorrect(null); // 상태 초기화
    };

    return (
        <div style={{ marginTop: 60 }}>
            <Space direction="vertical" size={16}>
                <StyledCard
                    title="오늘의 퀴즈"
                    style={{ width: 727 }}
                >
                    <QuizContainer>
                        <QuestionBox>
                            {isCorrect === null ? (
                                <StyledP>"군싹"은 '군침이 싹 도네'의 줄임말이다.</StyledP>
                            ) : isCorrect ? (
                                <StyledP>정답입니다!</StyledP>
                            ) : (
                                <StyledP>오답입니다. 다시 시도해 보세요.</StyledP>
                            )}
                            <ButtonContainer>
                                <CircleButton color="#04BF00" onClick={() => handleAnswer('O')}>O</CircleButton>
                                <CircleButton color="#FF6363" onClick={() => handleAnswer('X')}>X</CircleButton>
                            </ButtonContainer>
                            {isCorrect === false && (
                                <RetryButton onClick={handleRetry}>다시하기</RetryButton>
                            )}
                        </QuestionBox>
                        <ImageContainer />
                    </QuizContainer>
                </StyledCard>
            </Space>
        </div>
    );
}

export default QuizBox;
