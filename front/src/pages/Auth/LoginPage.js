import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

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
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth); // 리덕스 상태는 최상단에서 조회합니다.

    const onFinish = (values) => {
        handleLogin(values);
    };

    const handleLogin = async (values) => {
        console.log(values);
        try {
            const response = await axios.post(`${API}/user/signin`, values);
            const data = response.data;  // response.data가 바로 data입니다.

            if (response.status === 200) {
                message.success('환영합니다');
                navigate('/home', { state: values });

                // 로그인 상태를 리덕스에 저장
                dispatch(
                    login({
                        token: data.data,
                        isLoggedIn: true,
                    })
                );
            } else {
                message.error('로그인에 실패했습니다.');
            }
        }
        catch (error) {
            message.error('로그인에 실패하였습니다.');
        }
    };

    console.log(user.isLoggedIn); // 현재 로그인 상태 출력
    console.log(user.token);       // 현재 토큰 출력

    return (
        <GlobalStyles>
            <LoginContainer>
                <StyledForm
                    name="login"
                    onFinish={onFinish}
                    initialValues={{
                        userId: '',
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

                    <Link to="/forgotpw">
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
