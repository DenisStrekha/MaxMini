import React from 'react';
import { Container, Flex } from '@maxhub/max-ui';
import MenuButton from '../components/MenuButton';

const MainPage = ({ navigate }) => {
  const menuItems = [
    { 
      id: 'shopInfo', 
      title: '🏬 ИНФОРМАЦИЯ О МАГАЗИНЕ', 
      subtitle: 'О нас, условия, доставка', 
      icon: '🏬',
    },
    { 
      id: 'personalAccount', 
      title: '👤 ЛИЧНЫЙ КАБИНЕТ', 
      subtitle: 'Баланс, профиль, настройки', 
      icon: '👤',
    },
  ];

  return (
    <Container>
      <Flex direction="column" gap={12}>
        {menuItems.map((item) => (
          <MenuButton
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onClick={() => navigate(item.id)}
            showArrow={true}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default MainPage;