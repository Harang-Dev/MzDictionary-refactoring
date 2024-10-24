import React from 'react';
import { Typography, Card } from 'antd';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;
const { Title } = Typography;

const MyMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 721px;
    height: auto;
    margin-bottom: 60px;
`;

const StyledCard = styled(Card)`
    width: 229px !important; 
    height: 241px;
    border: 1px solid #D1D1D1;
    margin-right: 10px;
    background-size: cover;
    background-repeat: no-repeat;
`;

const StyledMeta = styled(Meta)`
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: hidden;
`;

const CustomSlider = styled(Slider)`
.slick-next::before {
    color: #D6D6D6;
    font-size: 40px;
    text-align: center;
}
`;

const CustomPrevArrow = (props) => {
    return null;
};

const BestWord = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <MyMenuContainer>
            <Title level={3} style={{ textAlign: 'left', marginBottom: '8px' }}>오늘의 베스트 단어</Title>
            <CustomSlider style={{ width: 720 }} {...settings}>
                <StyledCard
                    hoverable
                    cover={<img alt="군싹" src="/media/1.png" />}
                >
                    <StyledMeta title="군싹" description="군침이 싹도네(싹돈다) 라는 뜻" />
                </StyledCard>
                <StyledCard
                    hoverable
                    cover={<img alt="고구마" src="/media/2.png" />}
                >
                    <StyledMeta title="고구마" description="고구마를 많이 먹은듯 고구마를 많이 먹은 듯한 답답한 상황 또는 그러한 사람을 가리키는 말." />
                </StyledCard>
                <StyledCard
                    hoverable
                    cover={<img alt="누김소" src="/media/3.png" />}
                >
                    <StyledMeta title="누가 기침소리를 내었어" description="《태조 왕건》이라는 드라마에서 신하가 기침을 하자 궁예가 '누구인가? 누가 기침소리를 내었어?'라고 한 것이 결국 유행어가 되었다." />
                </StyledCard>
                {/* 추가 카드들... */}
            </CustomSlider>
        </MyMenuContainer>
    );
};

export default BestWord;
