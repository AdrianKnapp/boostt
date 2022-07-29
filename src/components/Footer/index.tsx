import { Box, Flex, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Image from 'next/image';
import { theme } from 'styles/theme';

const Footer = () => {
  return (
    <>
      <Container mt="150px" mb={8} justify="center">
        <Box width={600} opacity={0.2}>
          <Image
            src="/images/compra-segura.svg"
            alt="Compra segura"
            width="1536"
            height="141"
          />
        </Box>
      </Container>
      <Flex bg="gray.800" py={4}>
        <Container>
          <Text
            width="100%"
            textAlign="center"
            color={theme.colors.text.secondary}
            fontSize={theme.sizes.text.description}
          >
            Boostt - Todos os direitos reservados.
          </Text>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
