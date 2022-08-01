import { Box, Flex } from '@chakra-ui/react';
import { default as NextImage } from 'next/image';
import { ImageProps } from 'types/image';

const Image = ({ image }: { image: ImageProps }) => {
  return (
    <Flex width="100%" justify="center">
      <Box
        position="relative"
        width={['80%']}
        height={[200, 350, 350, 400]}
        borderRadius={5}
        overflow="hidden"
      >
        <NextImage
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default Image;
