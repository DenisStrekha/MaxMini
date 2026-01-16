import React from 'react';
import { Typography } from '@maxhub/max-ui';

const PageTitle = ({ children, style }) => (
  <Typography.Title 
    level={2} 
    style={{ 
      textAlign: 'center', 
      marginBottom: 24,
      ...style 
    }}
  >
    {children}
  </Typography.Title>
);

export default PageTitle;