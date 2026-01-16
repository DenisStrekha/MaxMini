import React, { Suspense } from 'react';
import { Panel } from '@maxhub/max-ui';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

// Ленивая загрузка страниц (выносим за компонент)
const MainPage = React.lazy(() => import('./pages/MainPage'));
const ShopInfoPage = React.lazy(() => import('./pages/ShopInfoPage'));
const PersonalAccountPage = React.lazy(() => import('./pages/PersonalAccountPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PurchaseTermsPage = React.lazy(() => import('./pages/PurchaseTermsPage'));
const DeliveryPage = React.lazy(() => import('./pages/DeliveryPage'));
const SchedulePage = React.lazy(() => import('./pages/SchedulePage'));
const BalancePage = React.lazy(() => import('./pages/BalancePage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const ChangePasswordPage = React.lazy(() => import('./pages/ChangePasswordPage'));

// Основной компонент с навигацией
const AppContent = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'main': return <MainPage />;
      case 'shopInfo': return <ShopInfoPage />;
      case 'personalAccount': return <PersonalAccountPage />;
      case 'about': return <AboutPage />;
      case 'purchaseTerms': return <PurchaseTermsPage />;
      case 'delivery': return <DeliveryPage />;
      case 'schedule': return <SchedulePage />;
      case 'balance': return <BalancePage />;
      case 'profile': return <ProfilePage />;
      case 'changePassword': return <ChangePasswordPage />;
      default: return <MainPage />;
    }
  };

  return (
    <Panel mode="secondary" style={{ padding: 24, minHeight: '100vh' }}>
      <Header />
      <Suspense fallback={<PageLoader />}>
        {renderPage()}
      </Suspense>
      <Footer />
    </Panel>
  );
};

// Главный компонент приложения
const App = () => (
  <NavigationProvider>
    <AppContent />
  </NavigationProvider>
);

export default App;