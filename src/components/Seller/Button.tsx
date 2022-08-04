import { Button as ChakraButton } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from 'styles/theme';

type ButtonProps = {
  linkable?: boolean;
  children?: React.ReactNode;
};

const Button = ({ children, linkable = true }: ButtonProps) => {
  const button = (
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
      {children || 'ASSINAR AGORA'}
    </ChakraButton>
  );

  return linkable ? <Link href="/#">{button}</Link> : button;
};

export default Button;
