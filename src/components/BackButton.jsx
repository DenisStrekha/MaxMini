import React from 'react';
import { Button } from '@maxhub/max-ui';
import { useNavigation } from '../contexts/NavigationContext';

const BackButton = ({ style }) => {
  const { goBack, canGoBack } = useNavigation();

  if (!canGoBack) return null;

  return (
    <Button
      mode="tertiary"
      onClick={goBack}
      style={{
        marginTop: 20,
        ...style
      }}
    >
      ← Назад
    </Button>
  );
};

export default BackButton;