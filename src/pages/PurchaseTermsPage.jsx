import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const PurchaseTermsPage = ({ goBack }) => {
  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Условия закупки
      </Typography.Title>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>1. Порядок оформления заказа:</strong>
      </Typography.Body>
      
      <ol style={{ 
        marginLeft: 20, 
        marginBottom: 24,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <li style={{ marginBottom: 8 }}>Выберите товары в каталоге</li>
        <li style={{ marginBottom: 8 }}>Добавьте товары в корзину</li>
        <li style={{ marginBottom: 8 }}>Подтвердите заказ в чате с менеджером</li>
        <li style={{ marginBottom: 8 }}>Оплатите заказ удобным способом</li>
        <li style={{ marginBottom: 8 }}>Получите товар по указанному адресу</li>
      </ol>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>2. Минимальная сумма заказа:</strong> 500 ₽
      </Typography.Body>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>3. Сроки обработки заказа:</strong> 1-2 рабочих дня
      </Typography.Body>
      
      <Typography.Body style={{ marginBottom: 24, lineHeight: 1.6 }}>
        <strong>4. Возврат товара:</strong> Возможен в течение 14 дней 
        при сохранении товарного вида и упаковки.
      </Typography.Body>
      
      <div style={{ 
        backgroundColor: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#92400e' }}>
          ⚠️ <strong>Важно:</strong> Заказы принимаются только от совершеннолетних лиц.
          Все товары проходят предпродажную проверку.
        </Typography.Body>
      </div>
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default PurchaseTermsPage;
