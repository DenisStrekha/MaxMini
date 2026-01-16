import React, { useState } from 'react'
import { Panel, Container, Flex, Button, Typography, Avatar } from '@maxhub/max-ui'

const App = () => {
  const [currentView, setCurrentView] = useState('main')

  const mainMenuItems = [
    { 
      id: 'shopInfo', 
      title: '🏬 ИНФОРМАЦИЯ О МАГАЗИНЕ', 
      subtitle: 'О нас, условия, доставка', 
      icon: '🏬'
    },
    { 
      id: 'personalAccount', 
      title: '👤 ЛИЧНЫЙ КАБИНЕТ', 
      subtitle: 'Баланс, профиль, настройки', 
      icon: '👤'
    },
  ]

  const shopInfoItems = [
    { id: '1', title: 'О НАС', subtitle: 'О нашей компании', icon: '📖' },
    { id: '2', title: 'УСЛОВИЯ ЗАКУПКИ', subtitle: 'Правила и условия', icon: '📝' },
    { id: '3', title: 'ДОСТАВКА', subtitle: 'Способы и сроки', icon: '🚚' },
    { id: '4', title: 'ГРАФИК ЗАКУПКИ', subtitle: 'Расписание поставок', icon: '📅' },
  ]

  const personalAccountItems = [
    { id: 'balance', title: 'ВАШ БАЛАНС', subtitle: 'Текущий баланс: 0 ₽', icon: '💰' },
    { id: 'profile', title: 'ПРОФИЛЬ', subtitle: 'Личные данные', icon: '👤' },
    { id: 'changePassword', title: 'СМЕНИТЬ ПАРОЛЬ', subtitle: 'Обновить пароль', icon: '🔐' },
  ]

  const handleMainClick = (id) => setCurrentView(id)
  const handleBack = () => setCurrentView('main')

  const renderMenu = (items, showBack = false) => (
    <Flex direction="column" gap={12}>
      {items.map((item) => (
        <Button
          key={item.id}
          mode="secondary"
          size="large"
          stretched
          onClick={() => alert(`Переход: ${item.title}`)}
          style={{ justifyContent: 'flex-start', paddingLeft: 20, height: 60 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>{item.subtitle}</div>
            </div>
          </div>
        </Button>
      ))}
      {showBack && (
        <Button mode="tertiary" onClick={handleBack} style={{ marginTop: 20 }}>
          ⬅️ НАЗАД
        </Button>
      )}
    </Flex>
  )

  return (
    <Panel mode="secondary" style={{ padding: 24, minHeight: '100vh' }}>
      {/* Шапка */}
      <Container>
        <Flex direction="column" align="center" gap={12}>
          <Avatar.Container size={80} form="squircle">
            <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
          </Avatar.Container>
          <Typography.Title>Мой магазин</Typography.Title>
          <Typography.Body type="secondary" style={{ textAlign: 'center' }}>
            {currentView === 'main' && 'Добро пожаловать в мини-приложение для MAX'}
            {currentView === 'shopInfo' && 'Информация о магазине'}
            {currentView === 'personalAccount' && 'Личный кабинет'}
          </Typography.Body>
        </Flex>
      </Container>

      {/* Контент */}
      <Container style={{ marginTop: 32 }}>
        {currentView === 'main' && renderMenu(mainMenuItems)}
        {currentView === 'shopInfo' && renderMenu(shopInfoItems, true)}
        {currentView === 'personalAccount' && renderMenu(personalAccountItems, true)}
      </Container>

      {/* Футер */}
      <Container style={{ marginTop: 40 }}>
        <Flex direction="column" align="center" gap={8}>
          <Typography.Body style={{ color: '#666', textAlign: 'center' }}>
            Ваш магазин в мессенджере MAX
          </Typography.Body>
          <Typography.Label style={{ color: '#999', fontSize: 12, textAlign: 'center' }}>
            Версия 1.0 • Поддержка: support@example.com
          </Typography.Label>
        </Flex>
      </Container>
    </Panel>
  )
}

export default App