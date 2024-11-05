import React, { useEffect } from 'react';
import { Card, Space } from 'antd';
import useGetWordBoxs from '../../../hooks/useGetWordBox';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

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

const StyledWordCard = styled(Card)`
    width: 161px !important; 
    height: 169px;
    border: 1px solid #D1D1D1;
    background-size: cover;
    background-repeat: no-repeat;
`;

const StyledMeta = styled(Meta)`
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 10px;
`;

const WordContainer = styled.div`
    width: 727px;
    height: 636px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열 설정 */
    grid-auto-rows: 169px; /* 각 행의 높이를 169px로 설정 */
    gap: 10px; /* 카드 간의 간격 */
    padding: 20px;
`;


function VocaBox() {
    const { 
        data, 
        isLoading, 
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage
     } = useGetWordBoxs();

     const {ref, inView} = useInView();

     useEffect(() => {
        if(inView && hasNextPage && !isFetchingNextPage){
            fetchNextPage()
        }
     }, [inView]);

    return (
        <div style={{ marginTop: 60 }}>
            <Space direction="vertical" size={16}>
                <StyledCard
                    title="오늘의 퀴즈"
                    style={{ width: 727 }}
                >
                    <WordContainer>
                        <StyledWordCard
                            hoverable
                            cover={<img alt="군싹" src="/media/1.png" />}
                        >
                            <StyledMeta title="군싹" description="군침이 싹도네(싹돈다) 라는 뜻" />
                        </StyledWordCard>
                        <StyledWordCard
                            hoverable
                            cover={<img alt="다른 단어" src="/media/2.png" />}
                        >
                            <StyledMeta title="다른 단어" description="설명 내용" />
                        </StyledWordCard>
                        <StyledWordCard
                            hoverable
                            cover={<img alt="다른 단어" src="/media/2.png" />}
                        >
                            <StyledMeta title="다른 단어" description="설명 내용" />
                        </StyledWordCard>
                        <StyledWordCard
                            hoverable
                            cover={<img alt="다른 단어" src="/media/2.png" />}
                        >
                            <StyledMeta title="다른 단어" description="설명 내용" />
                        </StyledWordCard>
                        <StyledWordCard
                            hoverable
                            cover={<img alt="다른 단어" src="/media/2.png" />}
                        >
                            <StyledMeta title="다른 단어" description="설명 내용" />
                        </StyledWordCard>
                    </WordContainer>
                    <h1 ref={ref}>load more</h1>
                </StyledCard>
            </Space>
        </div>
    );
}

export default VocaBox;
