import { Box, Flex, Text } from '@chakra-ui/react';
import { BiDollar } from 'react-icons/bi';
import { theme } from 'styles/theme';

type SpacerProps = {
  children?: React.ReactNode;
  hideTitle?: boolean;
};

const Spacer = ({ children, hideTitle = false }: SpacerProps) => {
  const getTitle = !hideTitle ? (
    <Text
      fontSize={theme.sizes.text.title}
      fontWeight="bold"
      maxW={300}
      textAlign="center"
      mt={8}
    >
      {children}
    </Text>
  ) : null;

  return (
    <Flex w="100%" mt={16} mb={16} direction="column" align="center">
      <Box>
        <BiDollar fontSize={25} opacity={0.2} />
      </Box>
      {getTitle}
    </Flex>
  );
};

export default Spacer;
