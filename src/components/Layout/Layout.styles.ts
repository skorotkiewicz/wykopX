import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  minHeight: 'calc(100% - 56px)',
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(2),
  transition: 'background-color 0.3s ease-out 0s',

  [theme.breakpoints.up('sm')]: {
    minHeight: 'calc(100% - 64px)',
  },
}));

export const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.background.default,
}));

export const MainContentContainer = styled('div')(({ theme }) => ({
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
