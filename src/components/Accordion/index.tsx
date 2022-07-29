import { Accordion as ChakraAccordion, Flex } from '@chakra-ui/react';

import Item from './Item';

const Accordion = () => {
  return (
    <Flex width="100%">
      <ChakraAccordion width="100%" allowToggle>
        <Flex direction="column" gap={5}>
          <Item />
          <Item />
          <Item />
        </Flex>
      </ChakraAccordion>
    </Flex>
  );
};

export default Accordion;
