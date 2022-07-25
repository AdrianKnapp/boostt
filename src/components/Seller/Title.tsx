import { Text } from '@chakra-ui/react';
import { theme } from 'styles/theme';

const Title = () => {
  return (
    <Text fontSize={theme.sizes.text.title} fontWeight="bold">
      Torne-se
      <Text as="span" ml={2} color={theme.colors.highlight}>
        gigante
      </Text>
      <br /> com a gente.
    </Text>
  );
};

export default Title;
