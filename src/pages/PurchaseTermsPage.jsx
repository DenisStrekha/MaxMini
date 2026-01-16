import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import PageTitle from '../components/PageTitle';

const PurchaseTermsPage = () => {
  return (
    <Container>
      <PageTitle>Условия закупки</PageTitle>
      
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
      
      <BackButton />
    </Container>
  );
};

export default PurchaseTermsPage;