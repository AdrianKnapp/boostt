import { Box, Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Image from 'next/image';
import { theme } from 'styles/theme';

const Footer = () => {
  return (
    <>
      <Container mt="60px" mb={4} justify="center">
        <Box width={500} opacity={0.2}>
          <Image
            src="/images/compra-segura.svg"
            alt="Compra segura"
            width="1536"
            height="141"
          />
        </Box>
      </Container>
      <Flex bg="gray.800" py={2}>
        <Container>
          <Text
            width="100%"
            textAlign="center"
            color={theme.colors.text.secondary}
            fontSize="sm"
          >
            Rocket Wins - Todos os direitos reservados.
          </Text>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
