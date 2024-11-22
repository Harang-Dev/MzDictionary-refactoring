import { Button } from 'antd';
import React from 'react';
import testCode from '../hooks/test';


function test(props) {
    return (
        <div>
            <Button onClick={testCode} >Test</Button>
        </div>
    );
}

export default test;