import { Box, Flex } from '@chakra-ui/react';
import Carousel from 'components/Carousel';
import Container from 'components/Container';
import Seller from 'components/Seller';
import Image from 'next/image';

const Banner = () => {
  return (
    <Container direction={['column', 'column', 'row']} gap={[5, 5, 0]}>
      <Flex
        w={['100%', '100%', '50%']}
        direction="column"
        justify="flex-start"
        height="100%"
      >
        <Flex width="100%" justifyContent={['center', 'center', 'start']}>
          <Box width={200} height={200} position="relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Flex>
        <Seller />
      </Flex>
      <Flex w={['100%', '100%', '50%']}>
        <Carousel />
      </Flex>
    </Container>
  );
};

export default Banner;
