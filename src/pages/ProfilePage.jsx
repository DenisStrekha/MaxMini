import React, { useState } from 'react';
import { Container, Flex, Typography, Button, Avatar, Input } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const ProfilePage = ({ goBack }) => {
  const [profile, setProfile] = useState({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    registrationDate: '15.01.2024',
    ordersCount: 5,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...profile });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
    alert('Данные сохранены!');
  };

  const handleCancel = () => {
    setEditData({ ...profile });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Профиль
      </Typography.Title>
      
      <Flex direction="column" align="center" gap={16} style={{ marginBottom: 32 }}>
        <Avatar.Container size={100} form="squircle">
          <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
        </Avatar.Container>
        
        {isEditing ? (
          <div style={{ width: '100%', maxWidth: 400 }}>
            <div style={{ marginBottom: 16 }}>
              <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
                Имя
              </Typography.Label>
              <Input
                value={editData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            
            <div style={{ marginBottom: 16 }}>
              <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
                Email
              </Typography.Label>
              <Input
                value={editData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
                Телефон
              </Typography.Label>
              <Input
                value={editData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            
            <Flex gap={12}>
              <Button mode="primary" onClick={handleSave} stretched>
                Сохранить
              </Button>
              <Button mode="tertiary" onClick={handleCancel}>
                Отмена
              </Button>
            </Flex>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Typography.Title level={3}>{profile.name}</Typography.Title>
            <Typography.Body type="secondary">{profile.email}</Typography.Body>
          </div>
        )}
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
            <Typography.Body>{profile.phone}</Typography.Body>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Body type="secondary">Дата регистрации:</Typography.Body>
            <Typography.Body>{profile.registrationDate}</Typography.Body>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Body type="secondary">Заказов:</Typography.Body>
            <Typography.Body>{profile.ordersCount}</Typography.Body>
          </div>
        </div>
      </div>
      
      {!isEditing && (
        <Flex direction="column" gap={12} style={{ marginBottom: 24 }}>
          <Button mode="secondary" size="large" onClick={handleEdit}>
            ✏️ Редактировать профиль
          </Button>
          <Button mode="secondary" size="large">
            📦 История заказов
          </Button>
          <Button mode="secondary" size="large">
            ⭐ Избранное
          </Button>
        </Flex>
      )}
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default ProfilePage;
