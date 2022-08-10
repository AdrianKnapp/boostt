import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Button from 'components/Seller/Button';
import { theme } from 'styles/theme';

import Header from './Header';
import Pricing from './Pricing';

export type ItemProps = {
  isPrincipal?: boolean;
  title: string;
  subtitle: string;
  highPrice: string;
  price: string;
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
  price,
  monthlyPrice = '',
  description,
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
      <Header title={title} subtitle={subtitle} />
      <Pricing
        discount={discount}
        price={price}
        highPrice={highPrice}
        monthlyPrice={monthlyPrice}
        isPrincipal={isPrincipal}
      />
      <Flex justify="center">
        <Button linkable />
      </Flex>
      <Flex justify="center">
        <UnorderedList
          fontSize={theme.sizes.text.description}
          listStyleType="none"
        >
          {description.map((item) => (
            <ListItem key={item} my={2}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Item;
