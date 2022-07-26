import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { theme } from 'styles/theme';

const Item = () => {
  return (
    <AccordionItem border="none" bg="gray.700" borderRadius={5}>
      <Text as="h2" fontSize={theme.sizes.text.subtitle}>
        <AccordionButton px={6} py={5}>
          <Box flex="1" textAlign="left" fontWeight="semibold">
            Como irá funcionar
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel
        pb={4}
        bg="gray.800"
        px={6}
        py={4}
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
        borderRadius="0 0 5px 5px"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Item;
