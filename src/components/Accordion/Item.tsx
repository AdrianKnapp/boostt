import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { theme } from 'styles/theme';

type ItemProps = {
  title: string;
  description: string;
};

const Item = ({ title, description }: ItemProps) => {
  return (
    <AccordionItem border="none" bg="gray.700" borderRadius={5}>
      <Text as="h2">
        <AccordionButton px={6} py={5}>
          <Box
            flex="1"
            textAlign="left"
            fontWeight="semibold"
            fontSize={theme.sizes.text.description}
          >
            {title}
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
        {description}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Item;
