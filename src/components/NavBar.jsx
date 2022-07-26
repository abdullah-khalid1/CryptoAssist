import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className='logo-container'> 
      <Avatar size='large' icon="user" />
      <Typography.Title level={3}> </Typography.Title>
      </div>

      <Menu theme='dark'>
        <Menu.Item key='1'> <Link to='/'> Home </Link> </Menu.Item>
        <Menu.Item key='1'> <Link to='/news'> News </Link> </Menu.Item>
        <Menu.Item key='1'> <Link to='/cryto'> CryptoCurrencies </Link> </Menu.Item>
        <Menu.Item key='1'> <Link to='/exchanges'> Exchanges </Link> </Menu.Item>
      </Menu>
      </div>
  )
}

export default NavBar;