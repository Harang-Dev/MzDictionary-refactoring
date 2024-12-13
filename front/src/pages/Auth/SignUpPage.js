import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Typography, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #B841F0 0%, #5497DA 50%, #62B0FF 100%);
    margin: 0;
`;

const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 892px;
    padding: 20px;
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
    font-size: 20px;
    border-radius: 40px;
    margin-top: 30px;
`;

const Signup = () => {
    const API = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const handleUpload = async (values) => {
        try {
            const response = await axios.post(`${API}/user/register`, values);
            if (response.data) {
                message.success('회원가입이 완료되었습니다.');
                navigate('/');
            }
        } catch (error) {
            message.error('회원가입이 완료되지 않았습니다.');
            console.error('failed', error);
        }
    };

    const onFinish = (values) => {
        const { passwordConfirm, ...restValues } = values;
    
        const finalValues = {
            ...restValues,
            id: '0',
            createTime: new Date().toISOString(),
            updateTime: new Date().toISOString(),
        };
    
        console.log('전달할 데이터:', finalValues);
        handleUpload(finalValues);
    };

    return (
        <GlobalStyles>
            <SignupContainer>
                <StyledForm
                    name="signup"
                    onFinish={onFinish}
                >
                    <Title level={5}>Username</Title>
                    <Form.Item
                        name="userId"
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
                    <Title level={5}>Password</Title>
                    <Form.Item
                        name="passWord"
                        rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
                    >
                        <Input.Password placeholder="비밀번호를 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Title level={5}>Password Confirm</Title>
                    <Form.Item
                        name="passwordConfirm"
                        rules={[
                            { required: true, message: '비밀번호 확인을 입력해주세요!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('passWord') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="비밀번호를 한번 더 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Title level={5}>Nickname</Title>
                    <Form.Item
                        name="userNickName"
                        rules={[{ required: true, message: '닉네임을 입력해주세요!' }]}
                    >
                        <Input placeholder="닉네임을 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Title level={5}>Email</Title>
                    <Form.Item
                        name="userEmail"
                        rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
                    >
                        <Input placeholder="이메일 주소를 입력해주세요"
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <StyledButton type="primary" htmlType="submit">
                            가입하기
                        </StyledButton>
                    </Form.Item>
                </StyledForm>
            </SignupContainer>
        </GlobalStyles>
    );
};

export default Signup;
