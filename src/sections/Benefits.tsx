import { Flex } from '@chakra-ui/react';
import Benefit from 'components/Benefit';
import Container from 'components/Container';
import Spacer from 'components/Spacer';

const Benefits = () => {
  return (
    <Container direction="column">
      <Spacer>Assinando hoje você garante</Spacer>
      <Flex direction="column" width="100%" gap={['80px', '100px', '50px']}>
        <Benefit />
        <Benefit />
        <Benefit />
      </Flex>
    </Container>
  );
};

export default Benefits;
