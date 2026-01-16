import React from 'react';
import { Container, Flex, Typography } from '@maxhub/max-ui';

const Footer = () => (
  <Container style={{ marginTop: 40 }}>
    <Flex direction="column" align="center" gap={8}>
      <Typography.Body style={{ color: '#666', textAlign: 'center' }}>
        Ваш магазин в мессенджере MAX
      </Typography.Body>
      <Typography.Label style={{ 
        color: '#999', 
        fontSize: 12,
        textAlign: 'center'
      }}>
        Версия 1.0 • Поддержка: support@example.com
      </Typography.Label>
    </Flex>
  </Container>
);

export default Footer;