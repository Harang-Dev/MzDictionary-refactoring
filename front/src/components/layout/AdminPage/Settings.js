import React, { useState } from 'react';
import { Form, Input, Button, Select, Switch, Divider, InputNumber, Space } from 'antd';

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const [siteTitle, setSiteTitle] = useState("MZ Dictionary");
  const [siteStatus, setSiteStatus] = useState(true);
  const [language, setLanguage] = useState("en");

  // 설정 변경 처리 함수
  const handleSave = (values) => {
    setSiteTitle(values.siteTitle);
    setSiteStatus(values.siteStatus);
    setLanguage(values.language);
    console.log('설정이 저장되었습니다:', values);
  };

  return (
    <div>
      <h2>사이트 설정</h2>
      <Form
        form={form}
        onFinish={handleSave}
        layout="vertical"
        initialValues={{
          siteTitle: siteTitle,
          siteStatus: siteStatus,
          language: language,
        }}
      >
        {/* 사이트 제목 설정 */}
        <Form.Item
          label="사이트 제목"
          name="siteTitle"
          rules={[{ required: true, message: '사이트 제목을 입력하세요!' }]}
        >
          <Input placeholder="사이트 제목을 입력하세요" />
        </Form.Item>

        {/* 사이트 상태 설정 (활성화 / 비활성화) */}
        <Form.Item
          label="사이트 상태"
          name="siteStatus"
          valuePropName="checked"
        >
          <Switch checkedChildren="활성화" unCheckedChildren="비활성화" />
        </Form.Item>

        {/* 언어 설정 */}
        <Form.Item
          label="기본 언어"
          name="language"
        >
          <Select>
            <Option value="en">영어</Option>
            <Option value="kr">한국어</Option>
            <Option value="jp">일본어</Option>
          </Select>
        </Form.Item>

        {/* 최대 단어 수 설정 */}
        <Form.Item
          label="최대 단어 수"
          name="maxWords"
        >
          <InputNumber
            min={1}
            max={10000}
            defaultValue={1000}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Divider />

        {/* 설정 저장 버튼 */}
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              저장
            </Button>
            <Button onClick={() => form.resetFields()}>
              초기화
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
