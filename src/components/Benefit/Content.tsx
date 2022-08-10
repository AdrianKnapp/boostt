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
      <Flex align="center">
        <Flex mr={3} h="100%" align="center" justify="center">
          <Text color={theme.colors.contrast} h="min-content" fontSize={35}>
            {React.createElement(icon)}
          </Text>
        </Flex>
        <Text fontSize={theme.sizes.text.subtitle} fontWeight="bold">
          {title}
        </Text>
      </Flex>
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
