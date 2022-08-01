import { Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import useMediaQuery from 'hooks/useMediaQuery';
import { theme } from 'styles/theme';

const Header = () => {
  const [isMobile] = useMediaQuery(`(max-width: 768px)`);

  return (
    <Flex
      width="100%"
      bg={theme.colors.contrast}
      py={[4, null, 5]}
      mb={5}
      position="sticky"
      zIndex={9999}
      top={0}
      boxShadow="0px 0px 12px 0px rgba(0,0,0,0.8)"
    >
      <Container justify="center">
        <Text
          color="#1F142D"
          textAlign="center"
          fontSize={theme.sizes.text.description}
        >
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
