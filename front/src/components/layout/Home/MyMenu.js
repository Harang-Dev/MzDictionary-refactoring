import { Typography, Card } from 'antd';
import styled from 'styled-components';

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

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 721px;
    height: 330px;
`;

const StyledCard = styled(Card)`
    width: 229px;
    height: 310px;
    margin-right: 10px;
    background-size: cover;
    background-repeat: no-repeat;
`;

const MyMenu = () => {
    return (
        <MyMenuContainer>
            <Title level={3} style={{ textAlign: 'left', marginBottom: '8px' }}>나의 메뉴</Title>
            <CardContainer>
                <StyledCard
                    hoverable
                    cover={<img alt="Quiz" src="/media/Quiz.png" />}
                >
                    <Meta style={{ textAlign: 'center' }} title="오늘의 퀴즈" description="오늘의 퀴즈는?" />
                </StyledCard>
                <StyledCard
                    hoverable
                    cover={<img alt="Discussion" src="/media/Discussion.png" />}
                >
                    <Meta style={{ textAlign: 'center' }} title="오늘의 토론" description="오늘의 토론 주제는?" />
                </StyledCard>
                <StyledCard
                    hoverable
                    cover={<img alt="Addvoca" src="/media/Addvoca.png" />}
                >
                    <Meta style={{ textAlign: 'center' }} title="단어 추가 요청" description="없는 단어를 알려주세요" />
                </StyledCard>
            </CardContainer>
        </MyMenuContainer>
    );
};

export default MyMenu;
