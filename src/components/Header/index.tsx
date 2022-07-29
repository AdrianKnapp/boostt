import { Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import { theme } from 'styles/theme';

const Header = () => {
  return (
    <Flex width="100%" bg={theme.colors.contrast} py={6} mb={5}>
      <Container justify="center">
        <Text color="#1F142D">
          Oferta de lançamento encerra em:{' '}
          <Text fontWeight="bold" as="span" color={theme.colors.highlight}>
            05
          </Text>{' '}
          DIAS{' '}
          <Text fontWeight="bold" as="span" color={theme.colors.highlight}>
            03
          </Text>{' '}
          HORAS{' '}
          <Text fontWeight="bold" as="span" color={theme.colors.highlight}>
            58
          </Text>{' '}
          MIN
        </Text>
      </Container>
    </Flex>
  );
};

export default Header;
