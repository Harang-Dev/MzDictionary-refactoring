import React, { useState } from 'react';
import { Button, Form, Input, Table, message, Popconfirm } from 'antd';

const WordRequest = () => {
  const [wordRequests, setWordRequests] = useState([
    // 임시 데이터 (관리자가 단어 요청을 확인하는 초기 상태)
    {
      key: '1',
      word: 'React',
      description: 'A JavaScript library for building user interfaces',
      requester: 'User1',
      date: '2024-11-25',
      status: 'pending', // 상태: pending(대기중), approved(승인됨), rejected(거절됨)
    },
    {
      key: '2',
      word: 'Ant Design',
      description: 'A UI design framework for React',
      requester: 'User2',
      date: '2024-11-24',
      status: 'pending',
    },
  ]); // 단어 추가 요청 리스트
  const [loading, setLoading] = useState(false); // 요청 처리 중 상태

  // 단어 요청 승인 함수
  const handleApprove = (key) => {
    setWordRequests(wordRequests.map((request) =>
      request.key === key ? { ...request, status: 'approved' } : request
    ));
    message.success('단어 요청이 승인되었습니다!');
  };

  // 단어 요청 거절 함수
  const handleReject = (key) => {
    setWordRequests(wordRequests.map((request) =>
      request.key === key ? { ...request, status: 'rejected' } : request
    ));
    message.error('단어 요청이 거절되었습니다!');
  };

  // 테이블 컬럼 정의
  const columns = [
    {
      title: '단어',
      dataIndex: 'word',
      key: 'word',
    },
    {
      title: '설명',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '요청자',
      dataIndex: 'requester',
      key: 'requester',
    },
    {
      title: '요청 날짜',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ color: status === 'approved' ? 'green' : status === 'rejected' ? 'red' : 'orange' }}>
          {status === 'approved' ? '승인됨' : status === 'rejected' ? '거절됨' : '대기중'}
        </span>
      ),
    },
    {
      title: '작업',
      key: 'action',
      render: (_, record) => (
        <span>
          {record.status === 'pending' && (
            <>
              <Button
                type="primary"
                onClick={() => handleApprove(record.key)}
                style={{ marginRight: 8 }}
              >
                승인
              </Button>
              <Popconfirm
                title="정말로 거절하시겠습니까?"
                onConfirm={() => handleReject(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger">거절</Button>
              </Popconfirm>
            </>
          )}
          {record.status === 'approved' && <Button disabled>승인됨</Button>}
          {record.status === 'rejected' && <Button disabled>거절됨</Button>}
        </span>
      ),
    },
  ];

  return (
    <div>
      <h2>단어 추가 요청</h2>
      {/* 단어 요청 리스트 테이블 */}
      <Table
        columns={columns}
        dataSource={wordRequests}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />
    </div>
  );
};

export default WordRequest;
