import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { employeeLogoutAction } from '../../redux/admin/actions/employeeAction';

export default function AdminNavbar() {
  const dispatch = useDispatch()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit"><Link to="/admin" className='nav-link'>Login</Link></Button>
          <Button color="inherit"><Link to="/" className='nav-link'>5000</Link></Button>
          <Button color="inherit"><Link to="/admin/add-product" className='nav-link'>Add Product</Link></Button>
          <Button color="inherit"><Link to="/admin/ProductDetails" className='nav-link'>Products</Link></Button>
          <Button color="inherit"><Link to="/admin/UserInfo" className='nav-link'>Users</Link></Button>
          <Button color="inherit"><Link to="/admin/dashboard" className='nav-link'>Dashboard</Link></Button>
          <Button color="inherit" onClick={e => dispatch(employeeLogoutAction())}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}