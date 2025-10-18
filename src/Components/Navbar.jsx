import React, { useState , useEffect } from 'react';
import { supabase } from './Supabase';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';


const toggleCollapsed = () => {
  setCollapsed(!collapsed);
};

const handleLogout = async () => {
  await supabase.auth.signOut();
  navigate('/login');
};

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);

  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  const location = useLocation(); // Get current path
  const selectedKey = () => {
    if (location.pathname === '/about') return ['2'];
    if (location.pathname === '/contact') return ['3'];
    if (location.pathname === '/dashboard') return ['4'];
    return ['1']; // Home by default
  };

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
    {
      key: '4',
      icon: <DesktopOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Logout</span>,
    },
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        { key: '5', label: 'Option 5' },
        { key: '6', label: 'Option 6' },
        { key: '7', label: 'Option 7' },
        { key: '8', label: 'Option 8' },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
          ],
        },
      ],
    },
  ];

 return (
    <div
      style={{
        width: collapsed ? 75 : 200,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#001529',
        overflow: 'auto',
        padding: '16px',
        transition: 'width 0.3s ease',
      }}
    >
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        selectedKeys={selectedKey()}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Navbar;
