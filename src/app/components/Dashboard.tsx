'use client'
import React from 'react';
import Particles from "@/components/magicui/particles";
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import QuizIcon from '@mui/icons-material/Quiz';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Groups2Icon from '@mui/icons-material/Groups2';
import LatestQuestions from './LatestQuestions';
import HeroSectionHeader from './HeroSectionHeader';
import Footer from './Footer';

// Define the NavigationItem type
interface NavigationPageItem {
  kind: 'page'; // Specific kind for page items
  title: string;
  segment: string;
  icon: React.ReactNode;
}

interface NavigationHeaderItem {
  kind: 'header'; // Specific kind for header items
  title: string;
}

interface NavigationDividerItem {
  kind: 'divider'; // Specific kind for divider items
}

type NavigationItem = NavigationPageItem | NavigationHeaderItem | NavigationDividerItem;

const NAVIGATION: NavigationItem[] = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    kind: 'page', // Specify kind as 'page'
  },
  {
    segment: 'queries',
    title: 'My Queries',
    icon: <QuizIcon />,
    kind: 'page', // Specify kind as 'page'
  },
  {
    segment: 'tags',
    title: 'Tags',
    icon: <LocalOfferIcon />,
    kind: 'page', // Specify kind as 'page'
  },
  {
    segment: 'notifications',
    title: 'Notifications',
    icon: <NotificationsIcon />,
    kind: 'page', // Specify kind as 'page'
  },
  {
    segment: 'clubs',
    title: 'Clubs',
    icon: <Groups2Icon />,
    kind: 'page', // Specify kind as 'page'
  },
  {
    kind: 'divider',
  },
  {
    segment: 'feedback',
    title: 'Feedback',
    icon: <FeedbackIcon />,
    kind: 'page', // Specify kind as 'page'
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
});

const CustomLogo = () => (
  <div>
   h
  </div>
);

const customBranding = {
  title: 'BitOverflow',
  logo: <CustomLogo />,
  homeUrl: '/',
};

interface DashboardLayoutBasicProps {
  window?: () => Window;
}

const DashboardLayoutBasic: React.FC<DashboardLayoutBasicProps> = (props) => {
  const { window } = props;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      branding={customBranding}
      navigation={NAVIGATION}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout >
      <Particles
                className="fixed inset-0 h-full w-full"
                quantity={500}
                ease={100}
                color="#ffffff"
                refresh
            />
        <HeroSectionHeader />
        <LatestQuestions />
        <div className='m-10' />
        <Footer />
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutBasic;

