import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderOpenOutlined,
  FileAddOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from './../assets/logo2.png'
import logo2 from './../assets/logo6.png'

const { Header, Sider, Content } = Layout;

const ProfileLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {
          collapsed ?
            <div style={{ padding: "2px 0 2px 0", borderBottom: '1px solid gray' }}>
              <img style={{ width: "80px" }} src={logo2} />
            </div>
            :
            <div style={{ padding: "5px 0 5px 0", marginBottom: "20px", borderBottom: '1px solid gray' }}>
              <img style={{ width: "200px" }} src={logo} />
            </div>
        }
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(e) => {
            if (e.key === "1") {
              navigate("/blogs/view")
            } else if (e.key === "2") {
              navigate("/blog/create")
            }
          }}
          items={[
            {
              key: '1',
              icon: <FolderOpenOutlined />,
              label: 'Blogs',
            },
            {
              key: '2',
              icon: <FileAddOutlined />,
              label: 'Create Blogs',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: 'flex', justifyContent: "space-between" }} >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div style={{ marginRight: "100px" }}>
              <Button onClick={logout} icon={<LogoutOutlined />} type="link">Logout</Button>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "82.6vh",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default ProfileLayout;