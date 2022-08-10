import { Flex, Text } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import { ItemProps } from '.';

type PricingProps = {
  isPrincipal?: ItemProps['isPrincipal'];
  highPrice: ItemProps['highPrice'];
  discount: ItemProps['discount'];
  price: ItemProps['price'];
  monthlyPrice: ItemProps['monthlyPrice'];
};

const Pricing = ({
  highPrice,
  isPrincipal,
  discount,
  price,
  monthlyPrice,
}: PricingProps) => {
  return (
    <Flex direction="column" w="100%" gap={2}>
      <Flex
        w="100%"
        justify="center"
        align="center"
        gap={2}
        fontSize={theme.sizes.text.description}
      >
        <Text textDecoration="line-through" color={theme.colors.text.secondary}>
          R$ {highPrice}
        </Text>
        <Text bg={theme.colors.contrast} p="2px 5px">
          {discount} OFF
        </Text>
      </Flex>
      {monthlyPrice ? (
        <>
          <Flex color={theme.colors.text.secondary} gap={2} justify="center">
            <Text fontWeight="bold">R$ {price}</Text>
            <Text>equivalente a</Text>
          </Flex>
          <Text
            textAlign="center"
            fontSize={theme.sizes.text.title}
            fontWeight="bold"
          >
            R$ {monthlyPrice}
          </Text>
        </>
      ) : (
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.title}
          fontWeight="bold"
        >
          R$ {price}
        </Text>
      )}
    </Flex>
  );
};
export default Pricing;
