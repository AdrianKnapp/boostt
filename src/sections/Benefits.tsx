import { Flex } from '@chakra-ui/react';
import Benefit from 'components/Benefit';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import benefitsData from 'mocks/benefits';

const Benefits = () => {
  return (
    <Container direction="column">
      <Spacer>O que é essa tecnologia?</Spacer>
      <Flex direction="column" width="100%" gap={['80px', '100px', '50px']}>
        {benefitsData.map(({ title, description, icon, image }) => (
          <Flex
            key={title}
            _even={{ flexDirection: ['column', 'column', 'row-reverse'] }}
            direction={['column', 'column', 'row']}
            width="100%"
            gap={[10, 10, 5, 0]}
          >
            <Benefit
              title={title}
              description={description}
              icon={icon}
              image={image}
              key={title}
            />
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Benefits;
