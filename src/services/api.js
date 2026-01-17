// Базовый URL API
const API_BASE_URL = 'https://ch-z.ru/';

// Общие функции для работы с API
export const api = {
  // Базовый метод для всех запросов
	async request(endpoint, options = {}) {
	  const url = `${API_BASE_URL}${endpoint}`;
	  
	  console.log(`🌐 API Request: ${url}`);
	  
	  try {
		const response = await fetch(url, {
		  method: options.method || 'GET',
		  headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			...options.headers,
		  },
		  body: options.body ? JSON.stringify(options.body) : null,
		});

		console.log(`📡 Response Status: ${response.status} ${response.statusText}`);
		
		// Получаем сырой текст
		const rawText = await response.text();
		console.log('📦 Raw response:', rawText.substring(0, 300));
		
		let data;
		try {
		  data = JSON.parse(rawText);
		  console.log('✅ Parsed data:', data);
		} catch (e) {
		  console.error('❌ JSON parse error:', e.message);
		  throw new Error(`Ошибка парсинга JSON: ${e.message}`);
		}

		if (!response.ok) {
		  throw new Error(data.message || `HTTP error ${response.status}`);
		}

		console.log('🎯 API call successful:', data.success);
		return data;
	  } catch (error) {
		console.error('❌ API request failed:', error);
		throw error;
	  }
	},
  // GET запрос
  async get(endpoint, params = {}) {
    const queryString = Object.keys(params).length 
      ? `?${new URLSearchParams(params).toString()}`
      : '';
    
    return await this.request(`${endpoint}${queryString}`);
  },

  // POST запрос
  async post(endpoint, data = {}) {
    return await this.request(endpoint, {
      method: 'POST',
      body: data,
    });
  },

  // PUT запрос
  async put(endpoint, data = {}) {
    return await this.request(endpoint, {
      method: 'PUT',
      body: data,
    });
  },
};

// Сервис для работы с MaxMini API
export const maxMiniService = {
  // Проверка API
  async healthCheck() {
    return await api.get('/maxmini/api/health');
  },

  // Тестовый запрос
  async test() {
    return await api.get('/maxmini/api/test');
  },

  // Получить баланс клиента
  async getBalance(clientId = 1, retailerId = null, purchaseId = null) {
    const params = { client_id: clientId };
    if (retailerId) params.retailer_id = retailerId;
    if (purchaseId) params.purchase_id = purchaseId;
    
    return await api.get('/maxmini/api/balance', params);
  },

  // Получить профиль клиента
  async getProfile(clientId = 1) {
    return await api.get('/maxmini/api/profile', { client_id: clientId });
  },

  // Обновить профиль
  async updateProfile(clientId, profileData) {
    return await api.post('/maxmini/api/update-profile', {
      client_id: clientId,
      ...profileData
    });
  },

  // Получить список закупок
  async getPurchases(retailerId = null, status = 'active', limit = 10) {
    const params = { status, limit };
    if (retailerId) params.retailer_id = retailerId;
    
    return await api.get('/maxmini/api/purchases', params);
  },

  // Получить заказы клиента
  async getOrders(clientId = 1, retailerId = null, status = 'active', limit = 10) {
    const params = { 
      client_id: clientId, 
      status, 
      limit 
    };
    if (retailerId) params.retailer_id = retailerId;
    
    return await api.get('/maxmini/api/orders', params);
  },
};

// Утилиты для работы с клиентом
export const getCurrentClientId = () => {
  // 1. Попробуем получить из URL параметров (для MAX приложения)
  const urlParams = new URLSearchParams(window.location.search);
  const clientIdFromUrl = urlParams.get('client_id');
  
  if (clientIdFromUrl) return parseInt(clientIdFromUrl, 10);
  
  // 2. Попробуем получить из localStorage (для сохранения сессии)
  const clientIdFromStorage = localStorage.getItem('maxmini_client_id');
  if (clientIdFromStorage) return parseInt(clientIdFromStorage, 10);
  
  // 3. По умолчанию ID=1 для тестирования
  return 1;
};

export const setCurrentClientId = (clientId) => {
  localStorage.setItem('maxmini_client_id', clientId.toString());
};

export const getCurrentRetailerId = () => {
  // Аналогичная логика для retailer_id
  const urlParams = new URLSearchParams(window.location.search);
  const retailerIdFromUrl = urlParams.get('retailer_id');
  
  if (retailerIdFromUrl) return parseInt(retailerIdFromUrl, 10);
  
  const retailerIdFromStorage = localStorage.getItem('maxmini_retailer_id');
  if (retailerIdFromStorage) return parseInt(retailerIdFromStorage, 10);
  
  return 314; // По умолчанию 314 вместо null
};