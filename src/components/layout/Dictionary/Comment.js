import { Divider, Button, Input, Space, Radio } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    width: 727px;
    background-color: #ffffff;
    padding: 16px;
    overflow-y: auto;
    margin-bottom: 100px;
`;

const Header = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 16px;
`;

const CommentInputWrapper = styled.div`
    position: relative; /* 부모 요소 기준으로 하단에 버튼 배치 */
    width: 690px;
    height: 194px;
`;

const CommentInput = styled(Input.TextArea)`
    margin-top: 8px;
    resize: none !important;
    width: 690px !important;
    height: 194px !important;
    padding-right: 80px; /* 버튼과 겹치지 않도록 여백 추가 */
`;

const SubmitButton = styled(Button)`
    position: absolute;
    bottom: 8px;
    right: 10px;
`;

const ReloadButton = styled(Button)`
    border: none; /* 테두리 제거 */
    background: none; /* 배경색 제거 */
    border-radius: 50%; /* 원형 만들기 */
    width: 30px !important;
    height: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* 포인터 커서 추가 */
    margin-left: 5px;
`;

const CommentItem = styled.div`
    width: 690px;
    height: 107px;
    background-color: #f7f7f7; /* 댓글 배경색 */
    border: 1px solid #e8e8e8; /* 댓글 테두리 */
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box; /* 추가 */
`;

const CommentAuthor = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

const CommentText = styled.div`
    margin-bottom: 5px;
`;

const CommentDate = styled.div`
    font-size: 12px;
    color: #999;
`;

function Comment() {
    const [sortOrder, setSortOrder] = useState('latest'); // 정렬 상태 관리
    const [comment, setComment] = useState(''); // 댓글 입력 값

    const handleSubmit = () => {
        if (comment.trim()) {
            console.log('댓글 등록:', comment);
            setComment(''); // 등록 후 입력창 비우기
        }
    };

    // 더미 댓글 데이터
    const dummyComments = [
        { author: '사용자1', text: '안녕하세요!', date: '2024-10-24' },
        { author: '사용자1', text: '안녕하세요!', date: '2024-10-24' },
    ];

    return (
        <div>
            <Header>
                <h1>댓글 목록</h1>
                <ReloadButton onClick={() => window.location.reload()}>
                    <RedoOutlined />
                </ReloadButton>
            </Header>

            <CommentContainer>
                <h3>66개의 댓글</h3>

                <CommentInputWrapper>
                    <CommentInput
                        rows={4}
                        placeholder="댓글을 입력하세요."
                        maxLength={200}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <SubmitButton type="primary" onClick={handleSubmit}>
                        등록
                    </SubmitButton>
                </CommentInputWrapper>

                <Divider />

                <Space>
                    <Radio.Group
                        onChange={(e) => setSortOrder(e.target.value)}
                        value={sortOrder}
                    >
                        <Radio.Button value="latest">최신순</Radio.Button>
                        <Radio.Button value="popular">공감순</Radio.Button>
                    </Radio.Group>
                </Space>

                <Divider />

                {/* 댓글 목록 렌더링 */}
                {dummyComments.map((comment, index) => (
                    <CommentItem key={index}>
                        <CommentAuthor>{comment.author}</CommentAuthor>
                        <CommentText>{comment.text}</CommentText>
                        <CommentDate>{comment.date}</CommentDate>
                    </CommentItem>
                ))}
            </CommentContainer>
        </div>
    );
}

export default Comment;
