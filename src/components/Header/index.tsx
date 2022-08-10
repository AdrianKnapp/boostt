import { Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import useCountdownTimer from 'hooks/useCountdownTimer';
import { theme } from 'styles/theme';

const Header = () => {
  const { days, hours, minutes } = useCountdownTimer();

  const countDownColor = theme.colors.highlight;

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
        <Flex
          color="#180316"
          textAlign="center"
          fontSize={theme.sizes.text.description}
          letterSpacing={0.8}
          fontWeight="medium"
          wrap="wrap"
          align="center"
          justify="center"
        >
          <Text as="span"> Oferta de lançamento encerra em: </Text>
          <Text as="span" px={1}>
            <Text fontWeight="bold" as="span" color={countDownColor}>
              {days}
            </Text>{' '}
            DIAS{' '}
            <Text fontWeight="bold" as="span" color={countDownColor}>
              {hours}
            </Text>{' '}
            HORAS{' '}
            <Text fontWeight="bold" as="span" color={countDownColor}>
              {minutes}
            </Text>{' '}
            MIN
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
