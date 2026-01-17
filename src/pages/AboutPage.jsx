import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const AboutPage = ({ goBack }) => {
  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        О нашей компании
      </Typography.Title>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        Мы — современный магазин, работающий в мессенджере MAX, предлагающий 
        широкий ассортимент товаров с доставкой по всей России.
      </Typography.Body>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        Наша миссия — сделать покупки удобными, быстрыми и доступными 
        прямо из любимого мессенджера.
      </Typography.Body>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>Наши преимущества:</strong>
      </Typography.Body>
      
      <ul style={{ 
        marginLeft: 20, 
        marginBottom: 24,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <li style={{ marginBottom: 8 }}>✅ Прямая связь с продавцом в чате</li>
        <li style={{ marginBottom: 8 }}>✅ Быстрая доставка от 1 дня</li>
        <li style={{ marginBottom: 8 }}>✅ Гарантия качества на все товары</li>
        <li style={{ marginBottom: 8 }}>✅ Удобная оплата через MAX</li>
      </ul>
      
      <div style={{ 
        backgroundColor: '#f0f9ff',
        border: '1px solid #bae6fd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#0369a1' }}>
          📞 <strong>Контактная информация:</strong><br/>
          Телефон: +7 (999) 123-45-67<br/>
          Email: info@example.com<br/>
          Адрес: г. Москва, ул. Примерная, д. 10
        </Typography.Body>
      </div>
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default AboutPage;
