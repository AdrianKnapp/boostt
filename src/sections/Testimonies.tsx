import { SimpleGrid } from '@chakra-ui/react';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import Testimony from 'components/Testimony ';

const Testimonies = () => {
  return (
    <Container direction="column">
      <Spacer>Depoimentos</Spacer>
      <SimpleGrid columns={3} spacing={5}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </SimpleGrid>
    </Container>
  );
};

export default Testimonies;
