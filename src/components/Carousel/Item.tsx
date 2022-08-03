import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const Item = () => {
  return (
    <Flex>
      <Box height="100%" width={300}>
        <Image
          src="/images/phone.png"
          alt="iPhone Mock"
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Item;
