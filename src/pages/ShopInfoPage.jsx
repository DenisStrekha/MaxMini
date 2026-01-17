import React from 'react';
import { Container, Flex } from '@maxhub/max-ui';
import MenuButton from '../components/MenuButton';
import BackButton from '../components/BackButton';

const ShopInfoPage = ({ navigate, goBack }) => {
  const menuItems = [
    { id: 'about', title: '📖 О НАС', subtitle: 'О нашей компании', icon: '📖' },
    { id: 'purchaseTerms', title: '📝 УСЛОВИЯ ЗАКУПКИ', subtitle: 'Правила и условия', icon: '📝' },
    { id: 'delivery', title: '🚚 ДОСТАВКА', subtitle: 'Способы и сроки', icon: '🚚' },
    { id: 'schedule', title: '📅 ГРАФИК ЗАКУПКИ', subtitle: 'Расписание поставок', icon: '📅' },
  ];

  return (
    <Container>
      <Flex direction="column" gap={12}>
        {menuItems.map((item) => (
          <MenuButton
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onClick={() => navigate(item.id)}
            showArrow={true}
          />
        ))}
        <BackButton onClick={goBack} />
      </Flex>
    </Container>
  );
};

export default ShopInfoPage;