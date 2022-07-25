import { Button as ChakraButton } from '@chakra-ui/react';
import { theme } from 'styles/theme';

const Button = () => {
  return (
    <ChakraButton
      bg={theme.colors.highlight}
      color={theme.colors.background}
      fontWeight="bold"
      w="min-content"
      py={6}
      px={6}
      borderRadius={5}
      mt={2}
      _hover={{
        background: 'green.700',
        opacity: 1,
      }}
    >
      ASSINAR AGORA
    </ChakraButton>
  );
};

export default Button;