import React from 'react';
import { Button } from '@maxhub/max-ui';

const BackButton = ({ onClick, style, show = true }) => {
  if (!show) return null;

  return (
    <Button
      mode="tertiary"
      onClick={onClick}
      style={{
        marginTop: 20,
        ...style
      }}
    >
      ← Назад
    </Button>
  );
};

BackButton.defaultProps = {
  show: true
};

export default BackButton;