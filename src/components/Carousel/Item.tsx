import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

type ItemProps = {
  src: string;
  alt: string;
};

const Item = ({ src, alt }: ItemProps) => {
  return (
    <Flex>
      <Box height="100%" width={300}>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" priority />
      </Box>
    </Flex>
  );
};

export default Item;
