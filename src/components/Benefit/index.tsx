import { Box, Flex } from '@chakra-ui/react';

import Content from './Content';
import Image from './Image';

const Benefit = () => {
  return (
    <Flex
      width="100%"
      _even={{ flexDirection: ['column', 'column', 'row-reverse'] }}
      direction={['column', 'column', 'row']}
      gap={[10, 10, 5, 0]}
    >
      <Box w={['100%', '100%', '50%']}>
        <Image />
      </Box>
      <Box w={['100%', '100%', '50%']}>
        <Content />
      </Box>
    </Flex>
  );
};

export default Benefit;
