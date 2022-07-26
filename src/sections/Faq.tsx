import { Flex, Text } from '@chakra-ui/react';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import Button from 'components/Seller/Button';
import Spacer from 'components/Spacer';

const Faq = () => {
  return (
    <Container direction="column">
      <Spacer showTitle={false} />
      <Flex width="100%">
        <Flex direction="column" width="100%">
          <Text>F A Q</Text>
          <Text>Tudo que você precisa saber sobre o Boostt</Text>
          <Button />
        </Flex>
        <Accordion />
      </Flex>
    </Container>
  );
};

export default Faq;
