import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const Item = () => {
  return (
    <Flex>
      <Box height="60%" width={300}>
        <Image
          src="/images/iphone_mock.png"
          alt="iPhone Mock"
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Item;
