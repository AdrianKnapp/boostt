/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button as ChakraButton } from '@chakra-ui/react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { theme } from 'styles/theme';

type ButtonProps = {
  linkable?: boolean;
  children?: React.ReactNode;
};

const Button = ({ children, linkable = false }: ButtonProps) => {
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

  return linkable ? (
    <Link href={process.env.NEXT_PUBLIC_SELLER_LINK} passHref>
      <a>{button}</a>
    </Link>
  ) : (
    <ScrollLink to="seller-principal" spy smooth offset={-20} duration={1000}>
      {button}
    </ScrollLink>
  );
};

export default Button;
