import { Flex, Text } from '@chakra-ui/react';
import { BiDollar } from 'react-icons/bi';
import { theme } from 'styles/theme';

type SpacerProps = {
  children: React.ReactNode;
};

const Spacer = ({ children }: SpacerProps) => {
  return (
    <Flex w="100%" gap={8} mt={12} mb={8} direction="column" align="center">
      <BiDollar fontSize={25} opacity={0.2} />
      <Text
        fontSize={theme.sizes.text.title}
        fontWeight="bold"
        maxW={300}
        textAlign="center"
      >
        {children}
      </Text>
    </Flex>
  );
};

export default Spacer;
