import { Box, Flex, Text } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import Button from './Button';
import Title from './Title';

const Seller = () => {
  return (
    <Flex w="100%" direction="column" gap={2}>
      <Box
        px={2}
        py={1}
        borderRadius={5}
        borderWidth={1}
        borderColor={theme.colors.highlight}
        w="min-content"
      >
        Lançamento
      </Box>
      <Title />
      <Text fontSize={theme.sizes.text.description}>
        Comece antes de todo mundo!
      </Text>
      <Button />
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        <Text as="span" color={theme.colors.contrast} mr={1}>
          Plano trimestral
        </Text>
        por apenas 149,90 R$
      </Text>
    </Flex>
  );
};

export default Seller;
