import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { theme } from 'styles/theme';

const Testimony = () => {
  return (
    <Box
      height={[100, 130, 200]}
      overflow="hidden"
      position="relative"
      borderRadius={5}
      cursor="pointer"
      role="group"
    >
      <Box
        color={theme.colors.background}
        opacity={0.6}
        position="absolute"
        mx="auto"
        zIndex={200}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={[30, 40, 50]}
        _groupHover={{ color: '#FF0000 !important' }}
        transition=".2s"
      >
        <FaYoutube />
      </Box>
      <Image
        src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Testimony"
        width={433}
        height={651}
        layout="responsive"
      />
    </Box>
  );
};

export default Testimony;
