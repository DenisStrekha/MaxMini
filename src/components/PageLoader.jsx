import React from 'react';
import { Container, Flex, Typography } from '@maxhub/max-ui';

const PageLoader = () => (
  <Container style={{ marginTop: 40 }}>
    <Flex direction="column" align="center" gap={16}>
      <div style={{ fontSize: 32 }}>⏳</div>
      <Typography.Body style={{ color: '#666' }}>
        Загрузка...
      </Typography.Body>
    </Flex>
  </Container>
);

export default PageLoader;