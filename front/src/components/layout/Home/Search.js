import React from 'react';
import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';


const { Title } = Typography;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 721px;
    height: 125px;
    margin: 60px 0 60px;
`;

const StyledInput = styled(Input)`
    width: 100%;
    max-width: 721px;
    border: 1px solid #A8A8A8;
    box-shadow: none;
    background-color: inherit;
    height: 66px;

    .ant-input-suffix {
        font-size: 24px;
        color: #DEB887;
    }
`;


const SearchBar = () => {
    const API = process.env.REACT_APP_API_URL;
    const { token, isLoggedIn } = useSelector((state) => state.auth);

    const handleSearch = async() => {
        const response = await axios.get(`${API}/word/find`);
    }



    return (
        <SearchContainer>
            <Title level={3} style={{ textAlign: 'left', marginBottom: '8px' }}>단어 검색</Title>
            <StyledInput
                placeholder="단어를 검색해 주세요"
                suffix={<SearchOutlined />}
            />
        </SearchContainer>
    );
};

export default SearchBar;
