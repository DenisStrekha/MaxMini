// src/App.jsx
import React, { useState } from 'react';
import { Panel } from '@maxhub/max-ui';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ShopInfoPage from './pages/ShopInfoPage';
import PersonalAccountPage from './pages/PersonalAccountPage';
import AboutPage from './pages/AboutPage';
import PurchaseTermsPage from './pages/PurchaseTermsPage';
import DeliveryPage from './pages/DeliveryPage';
import SchedulePage from './pages/SchedulePage';
import BalancePage from './pages/BalancePage';
import ProfilePage from './pages/ProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [history, setHistory] = useState(['main']);

  const navigate = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
    setHistory(prev => [...prev, page]);
  };

  const goBack = () => {
    console.log('Going back, history:', history);
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentPage(newHistory[newHistory.length - 1]);
    }
  };

  const renderPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'main':
        return <MainPage navigate={navigate} />;
      case 'shopInfo':
        return <ShopInfoPage navigate={navigate} goBack={goBack} />;
      case 'personalAccount':
        return <PersonalAccountPage navigate={navigate} goBack={goBack} />;
      case 'about':
        return <AboutPage goBack={goBack} />;
      case 'purchaseTerms':
        return <PurchaseTermsPage goBack={goBack} />;
      case 'delivery':
        return <DeliveryPage goBack={goBack} />;
      case 'schedule':
        return <SchedulePage goBack={goBack} />;
      case 'balance':
        return <BalancePage goBack={goBack} />;
      case 'profile':
        return <ProfilePage goBack={goBack} />;
      case 'changePassword':
        return <ChangePasswordPage goBack={goBack} />;
      default:
        return <MainPage navigate={navigate} />;
    }
  };

  return (
    <Panel mode="secondary" style={{ padding: 24, minHeight: '100vh' }}>
      <Header currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </Panel>
  );
};

export default App;