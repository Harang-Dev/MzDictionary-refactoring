import React, { useEffect, useState } from 'react';
import { Card, Space, Divider } from 'antd';
import styled from 'styled-components';
import { StarFilled, StarOutlined, HeartOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';

const StyledCard = styled(Card)`
    .ant-card-head {
        background-color: #515284; /* 제목 배경색 */
        color: white; /* 제목 텍스트 색상 */
        height: 78px;
        font-size: 20px;
    }
    .ant-card-body {
        padding: 0;
    }
`;

const ImageContainer = styled.div`
    width: 727px;
    height: 180px;
    background-image: url('/media/1.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 26px;
`;

const TitleSpan = styled.span`
    font-size: 25px;
    color: #A1A1A1;
    font-weight: bold;
`;

const ContentSpan = styled.span`
    font-size: 15px;
    color: #000000;
    font-weight: bold;
`;

function WordBox(props) {
    const [save, setSave] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`$(API_KEY)/savedata`);
                setTotalCount(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSave = () => {
        setSave(!save);
        setTotalCount(prevCount => save ? prevCount - 1 : prevCount + 1);

        const saveData = async () => {
            try {
                await axios.post(`$(API_KEY)/savedata`, { isSaved: !save });
            } catch (error) {
                console.error("Error saving data:", error);
            }
        };

        saveData();
    };

    return (
        <div style={{ margin: '60px 0' }}>
            <Space
                direction="vertical"
                size="middle"
                style={{
                    display: 'flex',
                    width: 727,
                    height: 686
                }}
            >
                <StyledCard
                    title="군싹"
                    size="small"
                >
                    <ImageContainer />
                    <div style={{ paddingLeft: 16 }}>
                        <TitleSpan>뜻</TitleSpan>
                        <br />
                        <br />
                        <ContentSpan>군침이 싹 도네</ContentSpan>
                        <Divider />
                        <TitleSpan>예시</TitleSpan>
                        <br />
                        <br />
                        <ContentSpan>이야~ 군침이 싹 도네</ContentSpan>
                        <Divider />
                        <button onClick={handleSave} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            {save ? <StarFilled style={{ color: '#FFD700' }} /> : <StarOutlined />}
                            <span style={{ marginLeft: 8 }}>{totalCount}</span>
                        </button>
                        <Divider />
                        <div style={{ width: 154, display: 'flex', justifyContent: 'space-around', margin: '16px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <HeartOutlined style={{ fontSize: 16, color: '#FF4D4F' }} />
                                <span>102</span>  {/* 하트 수 */}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <MessageOutlined style={{ fontSize: 16, color: '#1890FF' }} />
                                <span>58</span>  {/* 댓글 수 */}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <EyeOutlined style={{ fontSize: 16, color: '#52C41A' }} />
                                <span>304</span>  {/* 조회 수 */}
                            </div>
                        </div>
                    </div>
                </StyledCard>
            </Space>
        </div>
    );
}

export default WordBox;
