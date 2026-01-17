// src/pages/ChangePasswordPage.jsx (полный код)
import React, { useState } from 'react';
import { Container, Flex, Typography, Button, Input } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const ChangePasswordPage = ({ goBack }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!currentPassword) {
      newErrors.currentPassword = 'Введите текущий пароль';
    }
    
    if (!newPassword) {
      newErrors.newPassword = 'Введите новый пароль';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Пароль должен быть не менее 8 символов';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Подтвердите новый пароль';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация запроса к API
    setTimeout(() => {
      console.log('Changing password:', { currentPassword, newPassword });
      setIsSubmitting(false);
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrors({});
      
      // Сбросить успешное сообщение через 3 секунды
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  const handleReset = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrors({});
    setSuccess(false);
  };

  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Смена пароля
      </Typography.Title>
      
      {success && (
        <div style={{ 
          backgroundColor: '#d1fae5',
          border: '1px solid #10b981',
          borderRadius: 8,
          padding: 16,
          marginBottom: 24
        }}>
          <Typography.Body style={{ color: '#065f46', textAlign: 'center' }}>
            ✅ Пароль успешно изменен!
          </Typography.Body>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 24 }}>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Текущий пароль
          </Typography.Label>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Введите текущий пароль"
            style={{ width: '100%' }}
            error={errors.currentPassword}
          />
          {errors.currentPassword && (
            <Typography.Label style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>
              {errors.currentPassword}
            </Typography.Label>
          )}
        </div>
        
        <div style={{ marginBottom: 24 }}>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Новый пароль
          </Typography.Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Не менее 8 символов"
            style={{ width: '100%' }}
            error={errors.newPassword}
          />
          {errors.newPassword && (
            <Typography.Label style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>
              {errors.newPassword}
            </Typography.Label>
          )}
        </div>
        
        <div style={{ marginBottom: 32 }}>
          <Typography.Label style={{ marginBottom: 8, display: 'block' }}>
            Подтверждение нового пароля
          </Typography.Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Повторите новый пароль"
            style={{ width: '100%' }}
            error={errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <Typography.Label style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>
              {errors.confirmPassword}
            </Typography.Label>
          )}
        </div>
        
        <Flex gap={12} style={{ marginBottom: 24 }}>
          <Button 
            type="submit"
            mode="primary" 
            stretched
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Смена пароля...' : 'Сменить пароль'}
          </Button>
          <Button 
            mode="tertiary" 
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Сбросить
          </Button>
        </Flex>
      </form>
      
      <div style={{ 
        backgroundColor: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#92400e' }}>
          🔒 <strong>Требования к паролю:</strong>
        </Typography.Body>
        <ul style={{ 
          marginLeft: 20, 
          marginTop: 8,
          fontSize: 13,
          color: '#92400e',
          lineHeight: 1.5
        }}>
          <li>Не менее 8 символов</li>
          <li>Рекомендуется использовать буквы, цифры и специальные символы</li>
          <li>Не используйте простые пароли (123456, qwerty и т.д.)</li>
        </ul>
      </div>
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default ChangePasswordPage;