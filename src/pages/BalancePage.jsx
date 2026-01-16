import React from 'react';
import { Container, Flex, Typography, Button } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import PageTitle from '../components/PageTitle';

const BalancePage = () => {
  const balance = 0;
  const transactions = [];

  return (
    <Container>
      <PageTitle>Ваш баланс</PageTitle>
      
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 12,
        padding: 24,
        marginBottom: 32,
        color: 'white',
        textAlign: 'center'
      }}>
        <Typography.Body style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 8 }}>
          Текущий баланс
        </Typography.Body>
        <Typography.Title level={1} style={{ color: 'white', marginBottom: 16 }}>
          {balance} ₽
        </Typography.Title>
        
        <Flex gap={12} style={{ justifyContent: 'center' }}>
          <Button mode="primary" size="small">
            Пополнить
          </Button>
          <Button mode="tertiary" size="small" style={{ background: 'rgba(255,255,255,0.2)' }}>
            История операций
          </Button>
        </Flex>
      </div>
      
      <Typography.Body style={{ marginBottom: 16, fontWeight: 'bold' }}>
        История операций
      </Typography.Body>
      
      {transactions.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: 40,
          color: '#999'
        }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>📊</div>
          <Typography.Body>Операций пока нет</Typography.Body>
        </div>
      ) : (
        <div style={{ marginBottom: 24 }}>
          {/* Здесь будет список транзакций */}
        </div>
      )}
      
      <BackButton />
    </Container>
  );
};

export default BalancePage;