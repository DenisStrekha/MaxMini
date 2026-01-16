import React from 'react';
import { Container, Flex, Typography, Avatar } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import PageTitle from '../components/PageTitle';

const ProfilePage = () => {
  const userData = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    registrationDate: '15.01.2024',
    ordersCount: 0,
  };

  return (
    <Container>
      <PageTitle>Профиль</PageTitle>
      
      <Flex direction="column" align="center" gap={16} style={{ marginBottom: 32 }}>
        <Avatar.Container size={100} form="squircle">
          <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
        </Avatar.Container>
        
        <div style={{ textAlign: 'center' }}>
          <Typography.Title level={3}>{userData.name}</Typography.Title>
          <Typography.Body type="secondary">{userData.email}</Typography.Body>
        </div>
      </Flex>
      
      <div style={{ 
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 20,
        marginBottom: 24
      }}>
        <Typography.Body style={{ marginBottom: 12, fontWeight: 'bold' }}>
          Личная информация
        </Typography.Body>
        
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Body type="secondary">Телефон:</Typography.Body>
            <Typography.Body>{userData.phone}</Typography.Body>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Body type="secondary">Дата регистрации:</Typography.Body>
            <Typography.Body>{userData.registrationDate}</Typography.Body>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Body type="secondary">Заказов:</Typography.Body>
            <Typography.Body>{userData.ordersCount}</Typography.Body>
          </div>
        </div>
      </div>
      
      <Flex direction="column" gap={12} style={{ marginBottom: 24 }}>
        <Button mode="secondary" size="large">
          ✏️ Редактировать профиль
        </Button>
        <Button mode="secondary" size="large">
          📦 История заказов
        </Button>
        <Button mode="secondary" size="large">
          ⭐ Избранное
        </Button>
      </Flex>
      
      <BackButton />
    </Container>
  );
};

export default ProfilePage;