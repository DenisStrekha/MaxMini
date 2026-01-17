// src/utils/format.js
// Форматирование валюты
export const formatCurrency = (amount, currency = 'RUB') => {
  console.log(`💰 formatCurrency called with:`, { amount, currency });
  
  if (amount === null || amount === undefined) {
    console.warn('⚠️ formatCurrency received null/undefined amount');
    return '0 ₽';
  }
  
  const result = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
  
  console.log(`💰 formatCurrency result: ${result}`);
  return result;
};

// Форматирование даты
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return dateString;
  }
};

// Сокращение чисел
export const formatNumber = (num, decimals = 2) => {
  if (num === null || num === undefined) return '0';
  
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
};