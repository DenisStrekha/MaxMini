import React, { useState } from 'react';
import { Container, Flex, Typography, Button, Input } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import PageTitle from '../components/PageTitle';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert('Новые пароли не совпадают');
      return;
    }
    alert('Пароль успешно изменен!');
    // Здесь будет API запрос
  };

  return (
    <Container>
      <PageTitle>Смена пароля</PageTitle>
      
      <Typography.Body style={{ marginBottom: 24, lineHeight: 1.6 }}>
        Для смены пароля заполните все поля ниже. 
        Пароль должен содержать не менее 8 символов, включая буквы и цифры.
      </Typography.Body>
      
      <Flex direction="column" gap={16} style={{ marginBottom: 32 }}>
        <div>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Текущий пароль
          </Typography.Label>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Введите текущий пароль"
            style={{ width: '100%' }}
          />
        </div>
        
        <div>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Новый пароль
          </Typography.Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Введите новый пароль"
            style={{ width: '100%' }}
          />
        </div>
        
        <div>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Подтвердите новый пароль
          </Typography.Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Повторите новый пароль"
            style={{ width: '100%' }}
          />
        </div>
      </Flex>
      
      <Flex gap={12} style={{ marginBottom: 24 }}>
        <Button mode="primary" onClick={handleSubmit} stretched>
          Сохранить изменения
        </Button>
        <Button mode="tertiary" onClick={() => {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        }}>
          Очистить
        </Button>
      </Flex>
      
      <div style={{ 
        backgroundColor: '#f0f9ff',
        border: '1px solid #bae6fd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#0369a1' }}>
          🔒 <strong>Безопасность:</strong> Не используйте простые пароли. 
          Рекомендуем менять пароль каждые 3 месяца.
        </Typography.Body>
      </div>
      
      <BackButton />
    </Container>
  );
};

export default ChangePasswordPage;