import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import Button from '../Button';

type ItemProps = {
  isPrincipal?: boolean;
};

const Item = ({ isPrincipal = true }: ItemProps) => {
  return (
    <Flex
      width="100%"
      height="auto"
      borderRadius={5}
      bg="gray.700"
      className="testee"
      p={5}
      direction="column"
      gap={8}
      borderWidth={isPrincipal ? 1 : 0}
      borderColor={theme.colors.highlight}
    >
      <Flex direction="column" w="100%">
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.subtitle}
          fontWeight="bold"
        >
          Assinatura mensal
        </Text>
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.description}
          color={theme.colors.text.secondary}
        >
          Para investidores conservadores
        </Text>
      </Flex>
      <Flex direction="column" w="100%" gap={2}>
        <Flex
          w="100%"
          justify="center"
          align="center"
          gap={2}
          fontSize={theme.sizes.text.description}
        >
          <Text>R$ 223,86</Text>
          <Text bg={theme.colors.contrast} p={1}>
            40% OFF
          </Text>
        </Flex>
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.subtitle}
          fontWeight="bold"
        >
          R$ 159,90
        </Text>
      </Flex>
      <Flex justify="center">
        <Button />
      </Flex>
      <Flex justify="center">
        <UnorderedList fontSize={theme.sizes.text.description}>
          <ListItem>Acesso ao robô e ao minicurso</ListItem>
          <ListItem>Pagamento mensal</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Item;
