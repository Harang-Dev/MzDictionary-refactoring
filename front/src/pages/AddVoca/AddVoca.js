import React from 'react';
import { Layout } from 'antd';
import Add from '../../components/layout/AddVoca/Add';

import styled from 'styled-components';

const { Content } = Layout;

const PaddedLayout = styled(Layout)`
    padding: 0 381px;
    min-height: 100vh;
`;


function AddVoca() {

    return (
        <PaddedLayout>
            <Content style={{ minHeight: '100vh', marginBottom: 100 }}>  {/* Content의 높이를 화면 전체에 맞춤 */}
                <Add />
            </Content>
        </PaddedLayout>
    );
}

export default AddVoca;
