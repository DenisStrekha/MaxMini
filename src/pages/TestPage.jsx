import React from 'react';
import { Typography } from '@maxhub/max-ui';

const TestPage = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <Typography.Title>ТЕСТОВАЯ СТРАНИЦА</Typography.Title>
    <Typography.Body style={{ marginTop: 20 }}>
      Если вы видите этот текст, значит новая структура работает!
    </Typography.Body>
    <Typography.Body style={{ marginTop: 10, color: 'green' }}>
      Время: {new Date().toLocaleTimeString()}
    </Typography.Body>
  </div>
);

export default TestPage;
