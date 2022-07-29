import { Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import useMediaQuery from 'hooks/useMediaQuery';
import { theme } from 'styles/theme';

const Header = () => {
  const [isMobile] = useMediaQuery(`(max-width: 768px)`);

  return (
    <Flex width="100%" bg={theme.colors.contrast} py={6} mb={5}>
      <Container justify="center">
        <Text color="#1F142D" textAlign="center">
          Oferta de lançamento encerra em: {isMobile && <br />}
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
