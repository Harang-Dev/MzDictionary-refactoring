import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #B841F0 0%, #5497DA 100%);
    margin: 0;
`;

const ForgotPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 349px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledForm = styled(Form)`
    width: 474px;
`;

const StyledButton = styled(Button)`
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, rgba(0, 204, 255, 1) 0%, rgba(255, 0, 204, 1) 100%);
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 40px;
    font-size: 20px;
`;

const ForgotPasswordPre = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <GlobalStyles>
            <ForgotPasswordContainer>
                <StyledForm
                    name="forgot_password"
                    onFinish={onFinish}
                >
                    <Title level={5}>Username</Title>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
                    >
                        <Input placeholder="아이디를 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Title level={5}>Email</Title>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
                    >
                        <Input placeholder="회원가입에 사용한 이메일 주소를 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <StyledButton type="primary" htmlType="submit">
                            Find Password
                        </StyledButton>
                    </Form.Item>
                </StyledForm>
            </ForgotPasswordContainer>
        </GlobalStyles>
    );
};

export default ForgotPasswordPre;
