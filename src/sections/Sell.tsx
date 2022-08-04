import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import Seller from 'components/Seller';
import Spacer from 'components/Spacer';

const Sell = () => {
  return (
    <Container direction="column" id="seller-principal">
      <Spacer hideTitle />
      <Flex w="100%">
        <Seller isPrincipal />
      </Flex>
    </Container>
  );
};

export default Sell;
