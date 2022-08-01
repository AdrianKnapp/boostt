import { Flex } from '@chakra-ui/react';
import Benefit from 'components/Benefit';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import benefitsData from 'mocks/benefits';

const Benefits = () => {
  return (
    <Container direction="column">
      <Spacer>Assinando hoje você garante</Spacer>
      <Flex direction="column" width="100%" gap={['80px', '100px', '50px']}>
        {benefitsData.map((benefit) => (
          <Benefit
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            image={benefit.image}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Benefits;
