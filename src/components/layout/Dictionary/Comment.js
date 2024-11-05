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
    position: relative;
    width: 690px;
    height: 194px;
`;

const CommentInput = styled(Input.TextArea)`
    margin-top: 8px;
    resize: none !important;
    width: 690px !important;
    height: 194px !important;
    padding-right: 80px;
`;

const SubmitButton = styled(Button)`
    position: absolute;
    bottom: 8px;
    right: 10px;
`;

const ReloadButton = styled(Button)`
    border: none;
    background: none;
    border-radius: 50%;
    width: 30px !important;
    height: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 5px;
`;

const CommentItemContainer = styled.div`
    width: 690px;
    margin-bottom: 10px;
`;

const CommentBox = styled.div`
    background-color: #f7f7f7;
    border: 1px solid #e8e8e8;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    position: relative;
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

const LikeDislikeContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const ReplyInputWrapper = styled.div`
    margin-left: 20px;
    margin-top: 10px;
    position: relative;
`;

function Comment() {
    const [sortOrder, setSortOrder] = useState('latest');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        {
            author: '사용자1',
            text: '안녕하세요!',
            date: '2024-10-24',
            replies: [],
            likeCount: 0,
            dislikeCount: 0,
            showReplyInput: false,
        },
        {
            author: '사용자2',
            text: '반갑습니다!',
            date: '2024-10-25',
            replies: [],
            likeCount: 0,
            dislikeCount: 0,
            showReplyInput: false,
        },
    ]);
    const [replyText, setReplyText] = useState('');

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([
                ...comments,
                { author: '나', text: comment, date: new Date().toISOString().split('T')[0], replies: [], likeCount: 0, dislikeCount: 0, showReplyInput: false },
            ]);
            setComment('');
        }
    };

    const handleReplySubmit = (index) => {
        if (replyText.trim()) {
            const newComments = [...comments];
            newComments[index].replies.push({
                author: '나',
                text: replyText,
                date: new Date().toISOString().split('T')[0],
                likeCount: 0,
                dislikeCount: 0,
            });
            newComments[index].showReplyInput = false;
            setComments(newComments);
            setReplyText('');
        }
    };

    const toggleReplyInput = (index) => {
        const newComments = [...comments];
        newComments[index].showReplyInput = !newComments[index].showReplyInput;
        setComments(newComments);
        setReplyText(''); // Clear reply input when toggling
    };

    const handleLike = (index, isReply, replyIndex) => {
        const newComments = [...comments];
        if (isReply) {
            newComments[index].replies[replyIndex].likeCount += 1;
        } else {
            newComments[index].likeCount += 1;
        }
        setComments(newComments);
    };

    const handleDislike = (index, isReply, replyIndex) => {
        const newComments = [...comments];
        if (isReply) {
            newComments[index].replies[replyIndex].dislikeCount += 1;
        } else {
            newComments[index].dislikeCount += 1;
        }
        setComments(newComments);
    };

    return (
        <div>
            <Header>
                <h1>댓글 목록</h1>
                <ReloadButton onClick={() => window.location.reload()}>
                    <RedoOutlined />
                </ReloadButton>
            </Header>

            <CommentContainer>
                <h3>{comments.length}개의 댓글</h3>

                <CommentInputWrapper>
                    <CommentInput
                        rows={4}
                        placeholder="댓글을 입력하세요."
                        maxLength={200}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <SubmitButton type="primary" onClick={handleCommentSubmit}>
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

                {comments.map((comment, index) => (
                    <CommentItemContainer key={index}>
                        <CommentBox>
                            <CommentAuthor>{comment.author}</CommentAuthor>
                            <CommentText>{comment.text}</CommentText>
                            <CommentDate>{comment.date}</CommentDate>
                            <LikeDislikeContainer>
                                <Button onClick={() => handleLike(index, false)}>👍 {comment.likeCount}</Button>
                                <Button onClick={() => handleDislike(index, false)}>👎 {comment.dislikeCount}</Button>
                            </LikeDislikeContainer>
                            <Button type="link" onClick={() => toggleReplyInput(index)}>답글달기</Button>
                        </CommentBox>

                        {comment.replies.map((reply, replyIndex) => (
                            <CommentBox key={replyIndex} style={{ marginLeft: '20px' }}>
                                <CommentAuthor>{reply.author}</CommentAuthor>
                                <CommentText>{reply.text}</CommentText>
                                <CommentDate>{reply.date}</CommentDate>
                                <LikeDislikeContainer>
                                    <Button onClick={() => handleLike(index, true, replyIndex)}>👍 {reply.likeCount}</Button>
                                    <Button onClick={() => handleDislike(index, true, replyIndex)}>👎 {reply.dislikeCount}</Button>
                                </LikeDislikeContainer>
                            </CommentBox>
                        ))}

                        {comment.showReplyInput && (
                            <ReplyInputWrapper>
                                <Input.TextArea
                                    rows={2}
                                    placeholder="대댓글을 입력하세요."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                />
                                <Button
                                    type="primary"
                                    onClick={() => handleReplySubmit(index)}
                                    style={{ position: 'absolute', bottom: 8, right: 10 }}
                                >
                                    등록
                                </Button>
                            </ReplyInputWrapper>
                        )}
                    </CommentItemContainer>
                ))}
            </CommentContainer>
        </div>
    );
}

export default Comment;
