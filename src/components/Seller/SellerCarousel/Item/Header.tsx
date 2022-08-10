import { Flex, Text } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import { ItemProps } from '.';

type HeaderProps = {
  title: ItemProps['title'];
  subtitle: ItemProps['subtitle'];
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Flex direction="column" w="100%">
      <Text
        textAlign="center"
        fontSize={theme.sizes.text.subtitle}
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text
        textAlign="center"
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        {subtitle}
      </Text>
    </Flex>
  );
};

export default Header;
