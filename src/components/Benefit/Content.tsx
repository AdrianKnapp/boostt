import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { theme } from 'styles/theme';

type ContentProps = {
  title: string;
  description: string;
  icon: IconType;
};

const Content = ({ title, description, icon }: ContentProps) => {
  return (
    <Flex width="100%" direction="column" gap={[2]} justify="center">
      <Text color={`${theme.colors.contrast}`} fontSize={25}>
        {React.createElement(icon)}
      </Text>
      <Text fontSize={theme.sizes.text.title} fontWeight="bold">
        {title}
      </Text>
      <Text
        fontSize={theme.sizes.text.description}
        color={theme.colors.text.secondary}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default Content;
