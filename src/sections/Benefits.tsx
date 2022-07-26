import { Flex } from '@chakra-ui/react';
import Benefit from 'components/Benefit';
import Container from 'components/Container';
import Spacer from 'components/Spacer';

const Benefits = () => {
  return (
    <Container direction="column">
      <Spacer>Assinando hoje você garante</Spacer>
      <Flex direction="column" width="100%" gap={10}>
        <Benefit />
        <Benefit />
        <Benefit />
      </Flex>
    </Container>
  );
};

export default Benefits;
