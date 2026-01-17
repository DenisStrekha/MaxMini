// src/hooks/useApi.js
import { useState, useCallback } from 'react';
import { maxMiniService, getCurrentClientId, getCurrentRetailerId } from '../services/api';

// Базовый хук для работы с API
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(async (apiFunction, ...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiFunction(...args);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, []);

  return { loading, error, callApi };
};

// Хук для работы с балансом
export const useBalance = () => {
  // Используем базовый хук useApi
  const { loading, error, callApi } = useApi();
  const [balance, setBalance] = useState(null);
  
  const loadBalance = useCallback(async (clientId = null, retailerId = null) => {
    // Используем переданные значения или получаем из функций
    const id = clientId || getCurrentClientId();
    const rid = retailerId || getCurrentRetailerId();
    
    console.log(`🔍 Loading balance for client ${id}, retailer ${rid}`);
    
    try {
      const result = await callApi(maxMiniService.getBalance, id, rid);
      console.log('📊 API result:', result);
      
      if (result.success) {
        console.log('✅ Setting balance data:', result.data);
        setBalance(result.data);
      } else {
        console.warn('⚠️ API returned success=false:', result.message);
        throw new Error(result.message || 'Ошибка при получении баланса');
      }
      return result;
    } catch (err) {
      console.error('❌ Error loading balance:', err);
      throw err;
    }
  }, [callApi]);

  return { 
    balance, 
    loading, 
    error, 
    loadBalance,
    refreshBalance: loadBalance
  };
};