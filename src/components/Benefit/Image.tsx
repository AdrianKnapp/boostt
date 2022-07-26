import { Box, Flex } from '@chakra-ui/react';
import { default as NextImage } from 'next/image';

const Image = () => {
  return (
    <Flex width="100%" justify="center">
      <Box
        position="relative"
        width={415}
        height={415}
        borderRadius={5}
        overflow="hidden"
      >
        <NextImage
          src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Benefit"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default Image;
