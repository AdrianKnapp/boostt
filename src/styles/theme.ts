import { extendTheme } from '@chakra-ui/react';

export const theme = {
  colors: {
    text: {
      primary: 'white',
      secondary: 'gray.300',
    },
    background: 'gray.900',
    highlight: 'green.800',
    contrast: 'purple.600',
  },
  sizes: {
    text: {
      title: [18, 24, 26],
      subtitle: [16, 18, 20],
      description: [12, 14, 16],
    },
  },
  container: {
    width: {
      full: '100%',
      desktop: 'container.xl',
      tablet: 'container.md',
      mobile: 'container.sm',
    },
    padding: {
      full: 0,
      desktop: 6,
      tablet: 4,
      mobile: 2,
    },
  },
};

export const chakraTheme = extendTheme({
  sm: '320px',
  md: '425px',
  lg: '768px',
  xl: '950px',
  '2xl': '1600px',
  colors: {
    gray: {
      900: '#121412', // background
      800: '#181B18',
      700: '#202420',
      600: '#4B4D63',
      500: '#616480',
      400: '#6D6D6D',
      300: '#B7B7B7', // secondary text
      200: '#D0D0D0',
      100: '#EBEBEB',
      50: '#EEEEF2',
    },
    green: {
      800: '#9CF945', // primary highlight
      700: '#c7fc95',
    },
    purple: {
      600: '#d941c7', // secondary highlight
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
});

// #d941c7
