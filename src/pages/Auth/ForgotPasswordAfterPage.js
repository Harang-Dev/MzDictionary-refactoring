import React from 'react';
import { Button, Card } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(to bottom, #a18cd1, #fbc2eb);
`;

const StyledCard = styled(Card)`
padding: 20px;
text-align: center;
border-radius: 12px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
margin-top: 20px;
background: linear-gradient(to right, #36d1dc, #5b86e5);
border: none;
border-radius: 8px;
`;

const ForgotPasswordAfterPage = () => {

    return (
        <Container>
            <StyledCard>
                <h2>비밀번호 전송 완료</h2>
                <p>xxxxxx@xxxxxx.com 메일로 비밀번호를 전송하였습니다.</p>
                <p>메일함을 확인해주세요.</p>
                <StyledButton type="primary">
                    메인 메뉴로 가기
                </StyledButton>
            </StyledCard>
        </Container>
    );
};



export default ForgotPasswordAfterPage;
