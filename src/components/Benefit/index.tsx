import { Flex } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { ImageProps } from 'types/image';

import Content from './Content';

type BenefitProps = {
  title: string;
  description: string;
  icon: IconType;
  image: ImageProps;
};

const Benefit = ({ title, description, icon, image }: BenefitProps) => {
  if (!image || !title) return null;

  return (
    <Flex w="100%" h="100%" bg="gray.700" p={5} borderRadius={5} align="start">
      <Content title={title} description={description} icon={icon} />
    </Flex>
  );
};

export default Benefit;
