import { Accordion as ChakraAccordion, Flex } from '@chakra-ui/react';
import faqData from 'mocks/faq';

import Item from './Item';

const Accordion = () => {
  return (
    <Flex width="100%">
      <ChakraAccordion width="100%" allowToggle>
        <Flex direction="column" gap={5}>
          {faqData.map((item) => (
            <Item
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Flex>
      </ChakraAccordion>
    </Flex>
  );
};

export default Accordion;
