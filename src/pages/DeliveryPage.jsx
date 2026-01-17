import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const DeliveryPage = ({ goBack }) => {
  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Доставка
      </Typography.Title>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>🚚 Способы доставки:</strong>
      </Typography.Body>
      
      <ul style={{ 
        marginLeft: 20, 
        marginBottom: 24,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <li style={{ marginBottom: 8 }}>📦 <strong>Курьерская доставка:</strong> 1-3 дня, от 250 ₽</li>
        <li style={{ marginBottom: 8 }}>🏪 <strong>Пункты выдачи:</strong> 2-5 дней, от 150 ₽</li>
        <li style={{ marginBottom: 8 }}>✈️ <strong>Экспресс-доставка:</strong> 24 часа, от 500 ₽</li>
        <li style={{ marginBottom: 8 }}>🚗 <strong>Самовывоз:</strong> Бесплатно, со склада по адресу: г. Москва, ул. Примерная, д. 10</li>
      </ul>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>⏱️ Сроки доставки по регионам:</strong>
      </Typography.Body>
      
      <ul style={{ 
        marginLeft: 20, 
        marginBottom: 24,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <li style={{ marginBottom: 8 }}>Москва и МО: 1-2 дня</li>
        <li style={{ marginBottom: 8 }}>Санкт-Петербург: 2-3 дня</li>
        <li style={{ marginBottom: 8 }}>Крупные города: 3-5 дня</li>
        <li style={{ marginBottom: 8 }}>Другие регионы: 5-10 дней</li>
      </ul>
      
      <Typography.Body style={{ marginBottom: 24, lineHeight: 1.6 }}>
        <strong>📞 Контакты службы доставки:</strong> +7 (999) 123-45-67
      </Typography.Body>
      
      <div style={{ 
        backgroundColor: '#d1fae5',
        border: '1px solid #a7f3d0',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#065f46' }}>
          🎁 <strong>Бесплатная доставка:</strong> При заказе от 3000 ₽ доставка бесплатная!
        </Typography.Body>
      </div>
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default DeliveryPage;
