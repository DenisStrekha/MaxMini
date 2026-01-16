import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import PageTitle from '../components/PageTitle';

const AboutPage = () => {
  return (
    <Container>
      <PageTitle>О нашей компании</PageTitle>
      
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
      
      <BackButton />
    </Container>
  );
};

export default AboutPage;