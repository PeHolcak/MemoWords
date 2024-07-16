// LoginForm.tsx
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginFormData {
  username: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: LoginFormData) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="login_form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        <Button type="default" htmlType="submit">
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;