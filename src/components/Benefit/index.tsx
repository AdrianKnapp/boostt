import { Box, Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ImageProps } from 'types/image';

import Content from './Content';
import Image from './Image';

type BenefitProps = {
  title: string;
  description: string;
  icon: IconType;
  image: ImageProps;
};

const Benefit = ({ title, description, icon, image }: BenefitProps) => {
  if (!image || !title) return null;

  return (
    <Flex
      width="100%"
      _even={{ flexDirection: ['column', 'column', 'row-reverse'] }}
      direction={['column', 'column', 'row']}
      gap={[10, 10, 5, 0]}
    >
      <>
        <Box w={['100%', '100%', '50%']}>
          <Image image={image} />
        </Box>
        <Box w={['100%', '100%', '50%']}>
          <Content title={title} description={description} icon={icon} />
        </Box>
      </>
    </Flex>
  );
};

export default Benefit;
