import { Flex } from '@chakra-ui/react';

import Content from './Content';
import Image from './Image';

const Benefit = () => {
  return (
    <Flex width="100%" _even={{ flexDirection: 'row-reverse' }}>
      <Image />
      <Content />
    </Flex>
  );
};

export default Benefit;
