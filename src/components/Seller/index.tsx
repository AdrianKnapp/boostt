import { Flex, ResponsiveArray, Text } from '@chakra-ui/react';
import useCountdownTimer from 'hooks/useCountdownTimer';
import { theme } from 'styles/theme';

import Button from './Button';

type SellerProps = {
  isPrincipal?: boolean;
};

const Seller = ({ isPrincipal = false }: SellerProps) => {
  const { days, hours } = useCountdownTimer();

  const textPosition = ['center', null, 'left'] as ResponsiveArray<'center'>;
  const flexAlign = ['center', null, 'flex-start'];

  const titleFontSize = [25, null, 30];

  const getTitle = () =>
    isPrincipal ? (
      <Text fontSize={titleFontSize} fontWeight="bold" textAlign={textPosition}>
        Faça parte da nossa comunidade exclusiva e
        <Text as="span" ml={2} color={theme.colors.highlight}>
          obtenha retornos expressivos
        </Text>
      </Text>
    ) : (
      <Text fontSize={titleFontSize} fontWeight="bold" textAlign={textPosition}>
        O robô com{' '}
        <Text as="span" color={theme.colors.highlight}>
          maior assertividade
        </Text>{' '}
        <br /> do mercado.
      </Text>
    );

  const getSubtitle = () =>
    isPrincipal ? (
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        Assinatura mensal de{' '}
        <Text as="span" textDecoration="line-through">
          R$ 297,90
        </Text>{' '}
        por
      </Text>
    ) : (
      <Text fontSize={theme.sizes.text.description} textAlign={textPosition}>
        Inteligência artificial que te proporciona lucros expressivos de forma
        100% automática.
      </Text>
    );

  const getPrice = () =>
    isPrincipal ? (
      <Text color={theme.colors.text.secondary} fontSize={20}>
        <Text as="span" fontWeight="bold">
          R${' '}
        </Text>
        <Text
          as="span"
          color={theme.colors.text.primary}
          fontSize={theme.sizes.text.title}
          fontWeight="bold"
        >
          159,90
        </Text>{' '}
        / mês
      </Text>
    ) : null;

  const getDescription = () =>
    isPrincipal ? (
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
        textAlign="center"
      >
        Disponível somente por{' '}
        <Text as="span" fontWeight="bold">
          {days} dias
        </Text>{' '}
        e
        <Text as="span" fontWeight="bold">
          {' '}
          {hours} horas
        </Text>
        .
      </Text>
    ) : (
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        <Text as="span" color={theme.colors.contrast} mr={1}>
          Plano mensal
        </Text>
        por apenas 159,90 R$
      </Text>
    );

  return (
    <Flex w="100%" direction="column" gap={2} align={flexAlign}>
      {/* <Box
        px={2}
        py={1}
        borderRadius={5}
        borderWidth={1}
        borderColor={theme.colors.highlight}
        w="min-content"
      >
        Lançamento
      </Box> */}
      {getTitle()}
      {getSubtitle()}
      {getPrice()}
      <Button />
      {getDescription()}
    </Flex>
  );
};

export default Seller;
