import { Flex, Text } from '@chakra-ui/react';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import Button from 'components/Seller/Button';
import Spacer from 'components/Spacer';
import { theme } from 'styles/theme';

const Faq = () => {
  return (
    <Container direction="column">
      <Spacer hideTitle />
      <Flex
        width="100%"
        direction={['column', 'column', 'row']}
        gap={[8, 6, 5, 0]}
      >
        <Flex direction="column" width="100%" gap={2}>
          <Text
            letterSpacing={5}
            color={theme.colors.contrast}
            fontWeight="bold"
            fontSize={theme.sizes.text.description}
          >
            FAQ
          </Text>
          <Text fontWeight="bold" fontSize={theme.sizes.text.title} maxW={400}>
            Tudo que você precisa saber sobre a Rocket Wins
          </Text>
          <Button linkable={false}>VEJA MAIS</Button>
        </Flex>
        <Accordion />
      </Flex>
    </Container>
  );
};

export default Faq;
