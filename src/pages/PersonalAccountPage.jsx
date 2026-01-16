import React from 'react';
import { Container, Flex } from '@maxhub/max-ui';
import MenuButton from '../components/MenuButton';
import BackButton from '../components/BackButton';
import { useNavigation } from '../contexts/NavigationContext';

const PersonalAccountPage = () => {
  const { navigate } = useNavigation();

  const menuItems = [
    { id: 'balance', title: '💰 ВАШ БАЛАНС', subtitle: 'Текущий баланс: 0 ₽', icon: '💰' },
    { id: 'profile', title: '👤 ПРОФИЛЬ', subtitle: 'Личные данные', icon: '👤' },
    { id: 'changePassword', title: '🔐 СМЕНИТЬ ПАРОЛЬ', subtitle: 'Обновить пароль', icon: '🔐' },
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
        <BackButton />
      </Flex>
    </Container>
  );
};

export default PersonalAccountPage;