import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import Button from '../Button';

type ItemProps = {
  isPrincipal?: boolean;
  title: string;
  subtitle: string;
  highPrice: string;
  lowPrice: string;
  discount: string;
  description: string[];
  monthlyPrice?: string;
};

const Item = ({
  isPrincipal = false,
  title,
  subtitle,
  discount,
  highPrice,
  lowPrice,
  description,
  monthlyPrice = '',
}: ItemProps) => {
  return (
    <Flex
      width="100%"
      height="auto"
      borderRadius={5}
      bg="gray.700"
      className="testee"
      p={5}
      direction="column"
      gap={8}
      borderWidth={isPrincipal ? 1 : 0}
      borderColor={theme.colors.highlight}
    >
      <Flex direction="column" w="100%">
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.subtitle}
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          textAlign="center"
          fontSize={theme.sizes.text.description}
          color={theme.colors.text.secondary}
        >
          {subtitle}
        </Text>
      </Flex>
      <Flex direction="column" w="100%" gap={2}>
        <Flex
          w="100%"
          justify="center"
          align="center"
          gap={2}
          fontSize={theme.sizes.text.description}
        >
          <Text
            textDecoration="line-through"
            color={theme.colors.text.secondary}
          >
            R$ {highPrice}
          </Text>
          <Text bg={theme.colors.contrast} p="2px 5px">
            {discount} OFF
          </Text>
        </Flex>
        {isPrincipal ? (
          <>
            <Flex color={theme.colors.text.secondary} gap={2} justify="center">
              <Text fontWeight="bold">R$ {lowPrice}</Text>
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
            R$ {lowPrice}
          </Text>
        )}
      </Flex>
      <Flex justify="center">
        <Button />
      </Flex>
      <Flex justify="center">
        <UnorderedList fontSize={theme.sizes.text.description}>
          {description.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Item;
