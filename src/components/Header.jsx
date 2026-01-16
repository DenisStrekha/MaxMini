import React from 'react';
import { Container, Flex, Typography, Avatar } from '@maxhub/max-ui';
import { useNavigation } from '../contexts/NavigationContext';

const Header = () => {
  const { currentPage } = useNavigation();

  const getPageTitle = () => {
    switch (currentPage) {
      case 'main': return 'Мой магазин';
      case 'shopInfo': return 'Информация о магазине';
      case 'personalAccount': return 'Личный кабинет';
      case 'about': return 'О нас';
      case 'purchaseTerms': return 'Условия закупки';
      case 'delivery': return 'Доставка';
      case 'schedule': return 'График закупки';
      case 'balance': return 'Ваш баланс';
      case 'profile': return 'Профиль';
      case 'changePassword': return 'Смена пароля';
      default: return 'Мой магазин';
    }
  };

  const getPageSubtitle = () => {
    switch (currentPage) {
      case 'main': return 'Добро пожаловать в мини-приложение для MAX';
      case 'shopInfo': return 'Выберите интересующий раздел';
      case 'personalAccount': return 'Управление вашим аккаунтом';
      default: return '';
    }
  };

  return (
    <Container style={{ marginBottom: 32 }}>
      <Flex direction="column" align="center" gap={12}>
        {currentPage === 'main' && (
          <Avatar.Container size={80} form="squircle">
            <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
          </Avatar.Container>
        )}
        <Typography.Title style={{ textAlign: 'center' }}>
          {getPageTitle()}
        </Typography.Title>
        {getPageSubtitle() && (
          <Typography.Body 
            type="secondary" 
            style={{ textAlign: 'center', color: '#666' }}
          >
            {getPageSubtitle()}
          </Typography.Body>
        )}
      </Flex>
    </Container>
  );
};

export default Header;