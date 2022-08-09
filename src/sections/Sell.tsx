import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import SellerCarousel from 'components/Seller/SellerCarousel';
import Spacer from 'components/Spacer';

const Sell = () => {
  return (
    <Container direction="column" id="seller-principal">
      <Spacer>Escolha o melhor plano de investimento para você!</Spacer>
      <Flex w="100%">
        <SellerCarousel />
      </Flex>
    </Container>
  );
};

export default Sell;
