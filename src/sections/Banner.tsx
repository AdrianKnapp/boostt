import { Flex } from '@chakra-ui/react';
import Carousel from 'components/Carousel';
import Container from 'components/Container';
import Seller from 'components/Seller';

const Banner = () => {
  return (
    <Container>
      <Flex w="50%">
        <Seller />
      </Flex>
      <Flex w="50%">
        <Carousel />
      </Flex>
    </Container>
  );
};

export default Banner;
