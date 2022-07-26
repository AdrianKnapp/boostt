import { Box, Flex, Text } from '@chakra-ui/react';
import { BiDollar } from 'react-icons/bi';
import { theme } from 'styles/theme';

type SpacerProps = {
  children?: React.ReactNode;
  showTitle?: boolean;
};

const Spacer = ({ children, showTitle = true }: SpacerProps) => {
  const getTitle = showTitle ? (
    <Text
      fontSize={theme.sizes.text.title}
      fontWeight="bold"
      maxW={300}
      textAlign="center"
    >
      {children}
    </Text>
  ) : null;

  return (
    <Flex w="100%" mt={16} mb={12} direction="column" align="center">
      <Box mb={8}>
        <BiDollar fontSize={25} opacity={0.2} />
      </Box>
      {getTitle}
    </Flex>
  );
};

export default Spacer;
