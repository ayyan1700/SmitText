import React from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { supabase } from './Supabase';
import { useNavigate, Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      navigate('/');  // Redirect to homepage after login
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin, // after login, redirect here
      },
    });

    if (error) {
      alert('Google login failed: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 20, boxShadow: '0 0 10px #ccc' }}>
      <Title level={3} style={{ textAlign: 'center' }}>Login</Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Divider>Or</Divider>

      <Button
        type="default"
        onClick={handleGoogleLogin}
        block
        style={{ marginBottom: 12 }}
      >
        Continue with Google
      </Button>

      <div style={{ textAlign: 'center'  }}>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
