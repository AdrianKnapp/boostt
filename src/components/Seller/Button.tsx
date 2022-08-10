/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button as ChakraButton } from '@chakra-ui/react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { theme } from 'styles/theme';

type ButtonProps = {
  linkable?: boolean;
  children?: React.ReactNode;
  href?: string;
};

const Button = ({ children, linkable = false, href }: ButtonProps) => {
  const buttonHref = href || process.env.NEXT_PUBLIC_SELLER_LINK;

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
    <Link href={buttonHref} passHref>
      <a>{button}</a>
    </Link>
  ) : (
    <ScrollLink to="seller-principal" spy smooth offset={30} duration={1000}>
      {button}
    </ScrollLink>
  );
};

export default Button;
