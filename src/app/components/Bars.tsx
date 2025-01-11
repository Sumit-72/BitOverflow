'use client'

import React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Groups2Icon from '@mui/icons-material/Groups2';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internal';

// Import your assets
import BitOverflowLogo from './logo.png';

// Define the navigation structure
const NAVIGATION: Navigation  = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'queries',
    title: 'My Queries',
    icon: <QuizIcon />,
  },
  {
    segment: 'tags',
    title: 'Tags',
    icon: <LocalOfferIcon />,
  },
  {
    segment: 'notifications',
    title: 'Notifications',
    icon: <NotificationsIcon />,
  },
  {
    segment: 'clubs',
    title: 'Clubs',
    icon: <Groups2Icon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'feedback',
    title: 'Feedback',
    icon: <FeedbackIcon />,
  },
];

// Define the custom theme
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Define the custom logo component
const CustomLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img src={BitOverflowLogo} alt="BitOverflow Logo" style={{ height: 40, borderRadius: '20%' }} />
  </Box>
);

// Define branding options
const customBranding = {
  title: 'BitOverflow',
  logo: <CustomLogo />,
  homeUrl: '/',
};

// Define the DashboardLayoutBasic component
const DashboardLayoutBasic = () => {
  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      branding={customBranding}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <Box sx={{ p: 2 }}>
        <h1>Welcome to the Dashboard</h1>
      </Box>
    </AppProvider>
  );
};

export default DashboardLayoutBasic;
