import { Flex } from '@chakra-ui/react';
import Carousel from 'components/Carousel';
import Container from 'components/Container';
import Seller from 'components/Seller';
import useMediaQuery from 'hooks/useMediaQuery';

const Banner = () => {
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  return (
    <Container direction={['column', 'column', 'row']}>
      <Flex w={['100%', '100%', '50%']}>
        <Seller isCentered={isTablet && true} />
      </Flex>
      <Flex w={['100%', '100%', '50%']}>
        <Carousel />
      </Flex>
    </Container>
  );
};

export default Banner;
