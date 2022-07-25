import { Flex, FlexProps } from '@chakra-ui/react';
import { theme } from 'styles/theme';

const Container = (props: FlexProps) => {
  const { children } = props;

  return (
    <Flex
      w="100%"
      maxW={theme.container.width.desktop}
      align="center"
      px={theme.container.padding.desktop}
      mx="auto"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Container;
