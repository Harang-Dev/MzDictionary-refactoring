import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Title, Text } = Typography;

const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #B841F0 0%, #5497DA 50%, #62B0FF 100%);
    margin: 0;
    padding: 0;
`;

const LoginContainer = styled.div`
  width: 600px;
  height: 892px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
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
  margin-top: 20px;
  border-radius: 40px;
`;

const ForgotPasswordText = styled(Text)`
  text-align: right;
  display: block;
  margin-top: 10px;
  color: #ABABAB;
`;

const SignUpText = styled(Text)`
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-top: 200px;
`;

const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        handleLogin(values);
    };

    const handleLogin = async(values) => {
        try {
            const response = await axios.post('http://58.126.15.120:8888/user/login', values);
            if(response) {
                message.success('환영합니다')
                navigate('/home', { state: values });
            }    
        }
        catch(error) {
            message.error('로그인에 실패하였습니다.')
        }

    }

    return (
        <GlobalStyles>
            <LoginContainer>
                <StyledForm
                    name="login"
                    onFinish={onFinish}
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                >
                    <Title level={5}>Username</Title>
                    <Form.Item
                        name="userId"
                        rules={[{ required: true, message: '아이디를 입력해 주세요!' }]}
                    >
                        <Input
                            placeholder="아이디를 입력해주세요."
                            prefix={<UserOutlined />}
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }}
                        />
                    </Form.Item>

                    <Title level={5}>Password</Title>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '비밀번호를 입력해 주세요!' }]}
                    >
                        <Input.Password
                            placeholder="비밀번호를 입력해주세요."
                            prefix={<LockOutlined />}
                            style={{
                                height: '50px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <StyledButton type="primary" htmlType="submit">
                            LOGIN
                        </StyledButton>
                    </Form.Item>

                    <Link to = "/forgotpw">
                        <ForgotPasswordText className="forgot-password" type="link">
                            Forgot password?
                        </ForgotPasswordText>
                    </Link>

                    <Link to="/signup">
                        <SignUpText className="sign-up" type="link">
                            가입하기
                        </SignUpText>
                    </Link>
                </StyledForm>
            </LoginContainer>
        </GlobalStyles>
    );
};

export default Login;
