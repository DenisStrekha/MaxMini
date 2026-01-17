// src/pages/BalancePage.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { Container, Flex, Typography, Button } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';
import { useBalance } from '../hooks/useApi';
import { formatCurrency, formatDate } from '../utils/format';

const BalancePage = ({ goBack }) => {
  const { balance, loading, error, loadBalance } = useBalance();
  const [lastUpdate, setLastUpdate] = useState(null);

  // Функция для загрузки баланса
  const fetchBalance = useCallback(async () => {
    try {
      await loadBalance();
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Ошибка при загрузке баланса:', err);
    }
  }, [loadBalance]);

  // Загружаем баланс при монтировании
  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  // Обновляем каждые 60 секунд
  useEffect(() => {
    const intervalId = setInterval(fetchBalance, 60000);
    return () => clearInterval(intervalId);
  }, [fetchBalance]);

  const handleRefresh = async () => {
    setLastUpdate('Обновление...');
    await fetchBalance();
  };

  const handleAddFunds = () => {
    alert('Функция пополнения баланса будет доступна в ближайшее время');
  };

  const handleViewHistory = () => {
    alert('История операций будет доступна позже');
  };

  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Ваш баланс
      </Typography.Title>
      
      {/* Блок с балансом */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 12,
        padding: 24,
        marginBottom: 32,
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <Typography.Body style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 8 }}>
          Текущий баланс
        </Typography.Body>
        
        {loading ? (
          <Typography.Title level={1} style={{ color: 'white', marginBottom: 16 }}>
            Загрузка...
          </Typography.Title>
        ) : error ? (
          <Typography.Title level={1} style={{ color: '#ff6b6b', marginBottom: 16 }}>
            Ошибка загрузки
          </Typography.Title>
        ) : (
          <>
            <Typography.Title level={1} style={{ color: 'white', marginBottom: 16 }}>
              {formatCurrency(balance?.balance || 0)}
            </Typography.Title>
            
            {balance?.is_test_data && (
              <Typography.Label style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: 12,
                display: 'block',
                marginBottom: 8 
              }}>
                ⚠️ Тестовые данные
              </Typography.Label>
            )}
            
            {balance?.is_real_data && (
              <Typography.Label style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: 12,
                display: 'block',
                marginBottom: 8 
              }}>
                ✅ Реальные данные
              </Typography.Label>
            )}
          </>
        )}
        
        <Flex gap={12} style={{ justifyContent: 'center' }}>
          <Button 
            mode="primary" 
            size="small"
            onClick={handleAddFunds}
            disabled={loading}
          >
            Пополнить
          </Button>
          <Button 
            mode="tertiary" 
            size="small" 
            style={{ background: 'rgba(255,255,255,0.2)' }}
            onClick={handleViewHistory}
            disabled={loading}
          >
            История
          </Button>
          <Button 
            mode="tertiary" 
            size="small" 
            style={{ background: 'rgba(255,255,255,0.2)' }}
            onClick={handleRefresh}
            disabled={loading}
          >
            ⟳ Обновить
          </Button>
        </Flex>
      </div>
      
      {/* Детализация баланса */}
      {balance && !loading && !error && (
        <div style={{ 
          backgroundColor: '#f9f9f9',
          borderRadius: 8,
          padding: 20,
          marginBottom: 24,
          border: '1px solid #eee'
        }}>
          <Typography.Body style={{ marginBottom: 16, fontWeight: 'bold' }}>
            Детализация баланса
          </Typography.Body>
          
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography.Body type="secondary">Баланс для текущей закупки:</Typography.Body>
              <Typography.Body style={{ fontWeight: 'bold' }}>
                {formatCurrency(balance.balance_purch || 0)}
              </Typography.Body>
            </div>
            
            {balance.plusbalance > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography.Body type="secondary">Положительный баланс:</Typography.Body>
                <Typography.Body style={{ color: '#10b981', fontWeight: 'bold' }}>
                  {formatCurrency(balance.plusbalance)}
                </Typography.Body>
              </div>
            )}
            
            {balance.minusbalance < 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography.Body type="secondary">Отрицательный баланс:</Typography.Body>
                <Typography.Body style={{ color: '#ef4444', fontWeight: 'bold' }}>
                  {formatCurrency(balance.minusbalance)}
                </Typography.Body>
              </div>
            )}
            
            {balance.nextpurchaseorders > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography.Body type="secondary">Заказы в след. закупке:</Typography.Body>
                <Typography.Body>
                  {formatCurrency(balance.nextpurchaseorders)}
                  {balance.nextpurchaseorderscount > 0 && ` (${balance.nextpurchaseorderscount} шт.)`}
                </Typography.Body>
              </div>
            )}
            
            {balance.neworders > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography.Body type="secondary">Новые заказы:</Typography.Body>
                <Typography.Body>
                  {formatCurrency(balance.neworders)}
                  {balance.neworderscount > 0 && ` (${balance.neworderscount} шт.)`}
                </Typography.Body>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Информация о клиенте */}
      {balance && !loading && !error && (
        <div style={{ 
          backgroundColor: '#f0f9ff',
          borderRadius: 8,
          padding: 16,
          marginBottom: 24,
          border: '1px solid #bae6fd'
        }}>
          <Typography.Body style={{ fontSize: 14, color: '#0369a1' }}>
            👤 <strong>Клиент:</strong> {balance.client_name || 'Не указано'} (ID: {balance.client_id})
          </Typography.Body>
          {balance.last_updated && (
            <Typography.Label style={{ fontSize: 12, color: '#0891b2', marginTop: 4 }}>
              Обновлено в API: {formatDate(balance.last_updated)}
            </Typography.Label>
          )}
          {lastUpdate && (
            <Typography.Label style={{ fontSize: 12, color: '#0891b2', marginTop: 4 }}>
              Последняя проверка: {lastUpdate}
            </Typography.Label>
          )}
        </div>
      )}
      
      {/* Сообщение об ошибке */}
      {error && !loading && (
        <div style={{ 
          backgroundColor: '#fee2e2',
          border: '1px solid #fca5a5',
          borderRadius: 8,
          padding: 16,
          marginBottom: 24
        }}>
          <Typography.Body style={{ color: '#dc2626', textAlign: 'center' }}>
            ⚠️ Ошибка загрузки баланса: {error}
          </Typography.Body>
          <Button 
            mode="secondary" 
            size="small" 
            onClick={handleRefresh}
            style={{ marginTop: 8, width: '100%' }}
          >
            Попробовать снова
          </Button>
        </div>
      )}
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default BalancePage;