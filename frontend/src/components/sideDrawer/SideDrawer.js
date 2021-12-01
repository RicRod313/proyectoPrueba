import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AccountCircle } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material'

import SessionsAction from '../../redux/actions/sessions/SessionsAction';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const StyledBadgeRed = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#b70300',
    color: '#b70300',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const TemporaryDrawer = (props) => {

  const token = props.user.token ? true : false
  const dispatch = useDispatch();

  console.log(token)
  console.log(props.user)

  const styleAccess = () => {
    return(
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot">
          <Avatar 
          sx={{ width: 80, height: 80 }}>
              <AccountCircle sx={{ fontSize: 80, bgcolor: blue[500]}} />
          </Avatar>
      </StyledBadge>
    )
  }

  const styleNoAccess = () => {
    return(
      <StyledBadgeRed
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot">
          <Avatar 
          sx={{ width: 80, height: 80 }}>
              <AccountCircle sx={{ fontSize: 80, bgcolor: grey[500]}} />
          </Avatar>
      </StyledBadgeRed>
    )
  }

  const handledLogout = () => {
    //dispatch(SessionsAction.signoutAction())
  }

  const profile = () => (
    <Box
        sx={{ width: 250 }}
        role="presentation">
        <Box sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Stack direction="row" spacing={2}>
                { token ? styleAccess() : styleNoAccess() }
            </Stack>
        </Box>
        <Divider sx={{ color: blue[500]}}/>
        <Box sx={{ textAlign: "left", marginTop: 5, marginLeft: 5}}>
            <Typography variant="h6" component="div" sx={{color: blue[500], fontWeight: 'bold'}}>
                Name
                {/*props.user.name ? props.user.name : ""*/}
            </Typography>
            <Typography variant="subtitle1" component="div">
                Email
            </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'end'
        }}>
          <Button variant="text" color="primary" onClick={handledLogout()}>
            Logout
          </Button>
        </Box>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}>
            {profile()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;