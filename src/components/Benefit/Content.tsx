import { Flex, Text } from '@chakra-ui/react';
import { BsGraphUp } from 'react-icons/bs';
import { theme } from 'styles/theme';

const Content = () => {
  return (
    <Flex width="100%" direction="column" gap={2} justify="center">
      <Text color={`${theme.colors.contrast}`}>
        <BsGraphUp fontSize={25} />
      </Text>
      <Text fontSize={theme.sizes.text.title} fontWeight="bold">
        Tenha resultados expressivos, acesso a X salas e 30 tips semanais
      </Text>
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        Tenha acesso a X salas exclusivas, com métodos internacionais
        extremamente lucrativos.
      </Text>
    </Flex>
  );
};

export default Content;
