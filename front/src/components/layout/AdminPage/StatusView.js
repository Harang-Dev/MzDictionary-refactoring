import React, { useState } from 'react';
import { Table, Tag, Space, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const StatusView = () => {
  // 현황 데이터
  const [statusData] = useState([
    {
      key: '1',
      statName: '총 방문자',
      statValue: 1243,
      trend: 'up',
      trendValue: 123,
    },
    {
      key: '2',
      statName: '댓글 수',
      statValue: 358,
      trend: 'down',
      trendValue: 5,
    },
    {
      key: '3',
      statName: '단어 추가 요청',
      statValue: 23,
      trend: 'up',
      trendValue: 3,
    },
  ]);

  // 테이블 컬럼 정의
  const columns = [
    {
      title: '현황 항목',
      dataIndex: 'statName',
      key: 'statName',
    },
    {
      title: '현재 값',
      dataIndex: 'statValue',
      key: 'statValue',
      render: (value) => <Statistic value={value} />,
    },
    {
      title: '추세',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend, { trendValue }) => (
        <Space>
          <span>{trend === 'up' ? <ArrowUpOutlined style={{ color: 'green' }} /> : <ArrowDownOutlined style={{ color: 'red' }} />}</span>
          <span>{trend === 'up' ? `+${trendValue}` : `-${trendValue}`}</span>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>사이트 현황</h2>
      {/* 현황 테이블 */}
      <Table
        columns={columns}
        dataSource={statusData}
        pagination={false}
        rowKey="key"
      />
    </div>
  );
};

export default StatusView;