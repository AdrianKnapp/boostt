import { Flex, Text } from '@chakra-ui/react';
import { TbCrown } from 'react-icons/tb';

const Icon = () => {
  return (
    <Flex
      position="absolute"
      top={[-4, null, null, -2]}
      right={[-14, null, null, -10]}
      transform="rotate(45deg)"
      bg="rgba(255, 255, 255, 0.2)"
      // bg={theme.colors.contrast}
      width="120px"
      justify="center"
      align="end"
      height="50px"
      padding={1}
    >
      <Text fontSize={[25, null, null, 30]}>
        <TbCrown />
      </Text>
    </Flex>
  );
};

export default Icon;
