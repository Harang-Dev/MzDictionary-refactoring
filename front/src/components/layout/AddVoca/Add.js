import React from 'react';
import { Card, Space, Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const { Meta } = Card;

const StyledCard = styled(Card)`
    .ant-card-head {
        background-color: #FFDAAB;
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

const WordContainer = styled.div`
    width: 727px;
    height: 400px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열 설정 */
    grid-auto-rows: 169px; /* 각 행의 높이를 169px로 설정 */
    gap: 10px; /* 카드 간의 간격 */
    padding: 20px;
`;

const FormContainer = styled(Form)`
    grid-column: span 4; /* 폼이 전체 열을 차지하도록 설정 */
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    .ant-form-item {
        width: 100%; /* 각 입력 필드가 전체 너비를 사용 */
    }
`;

function Add() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { token, userId } = useSelector((state) => state.auth);



    const handleSubmit = async(values) => {
        console.log("전달하는 값", values)
        console.log("토큰 값", token);
        try {
            const response = await axios.post(
                `${API}/word/add`, 
                values,
                {
                    headers: {
                        'X-AUTH-TOKEN': token,
                    }
                }
            );
            if(response) {
                message.success("정상적으로 요청되었습니다.");
                navigate("/home");
            }
        }
        catch(error) {
            message.error('요청에 실패하였습니다.')
        }
    };

    return (
        <div style={{ marginTop: 60 }}>
            <Space direction="vertical" size={16}>
                <StyledCard title="단어 추가 요청" style={{ width: 727 }}>
                    <WordContainer>
                        <FormContainer
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                label="단어 이름"
                                name="wordTitle"
                                rules={[
                                    {
                                        required: true,
                                        message: '단어 이름을 입력해주세요.',
                                    },
                                ]}
                            >
                                <Input placeholder="단어 이름 입력" />
                            </Form.Item>

                            <Form.Item
                                label="뜻"
                                name="meaning"
                                rules={[
                                    {
                                        required: true,
                                        message: '뜻을 입력해주세요.',
                                    },
                                ]}
                            >
                                <Input placeholder="뜻 입력" />
                            </Form.Item>

                            <Form.Item
                                label="예문"
                                name="usingExample"
                                rules={[
                                    {
                                        required: true,
                                        message: '예문을 입력해주세요.',
                                    },
                                ]}
                            >
                                <Input placeholder="예문 입력" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    등록
                                </Button>
                            </Form.Item>
                        </FormContainer>
                    </WordContainer>
                </StyledCard>
            </Space>
        </div>
    );
}

export default Add;
