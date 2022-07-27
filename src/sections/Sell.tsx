import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import Seller from 'components/Seller';
import Spacer from 'components/Spacer';

const Sell = () => {
  return (
    <Container direction="column">
      <Spacer />
      <Flex>
        <Seller />
      </Flex>
    </Container>
  );
};

export default Sell;
