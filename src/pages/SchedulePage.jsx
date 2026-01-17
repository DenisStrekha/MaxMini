import React from 'react';
import { Container, Typography } from '@maxhub/max-ui';
import BackButton from '../components/BackButton';

const SchedulePage = ({ goBack }) => {
  const schedule = [
    { day: 'Понедельник', time: '9:00 - 20:00', note: 'Прием заказов до 18:00' },
    { day: 'Вторник', time: '9:00 - 20:00', note: 'Прием заказов до 18:00' },
    { day: 'Среда', time: '9:00 - 20:00', note: 'Прием заказов до 18:00' },
    { day: 'Четверг', time: '9:00 - 20:00', note: 'Прием заказов до 18:00' },
    { day: 'Пятница', time: '9:00 - 20:00', note: 'Прием заказов до 18:00' },
    { day: 'Суббота', time: '10:00 - 18:00', note: 'Прием заказов до 16:00' },
    { day: 'Воскресенье', time: '10:00 - 16:00', note: 'Только самовывоз' },
  ];

  return (
    <Container>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        График работы и закупки
      </Typography.Title>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>🕒 График работы магазина:</strong>
      </Typography.Body>
      
      <div style={{ 
        marginBottom: 24,
        border: '1px solid #eaeaea',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        {schedule.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            padding: '12px 16px',
            borderBottom: index < schedule.length - 1 ? '1px solid #eaeaea' : 'none',
            backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1, fontWeight: 'bold' }}>{item.day}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{item.time}</div>
            <div style={{ flex: 1, textAlign: 'right', color: '#666', fontSize: 14 }}>
              {item.note}
            </div>
          </div>
        ))}
      </div>
      
      <Typography.Body style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong>📦 График закупок товара:</strong>
      </Typography.Body>
      
      <ul style={{ 
        marginLeft: 20, 
        marginBottom: 24,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <li style={{ marginBottom: 8 }}>🔄 <strong>Ежедневно:</strong> Бытовые товары, продукты</li>
        <li style={{ marginBottom: 8 }}>📅 <strong>По понедельникам:</strong> Электроника, техника</li>
        <li style={{ marginBottom: 8 }}>📅 <strong>По средам:</strong> Одежда, обувь</li>
        <li style={{ marginBottom: 8 }}>📅 <strong>По пятницам:</strong> Косметика, бытовая химия</li>
      </ul>
      
      <Typography.Body style={{ marginBottom: 24, lineHeight: 1.6 }}>
        <strong>ℹ️ Примечание:</strong> Заказы, оформленные после времени приема, 
        обрабатываются на следующий рабочий день.
      </Typography.Body>
      
      <div style={{ 
        backgroundColor: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24
      }}>
        <Typography.Body style={{ fontSize: 14, color: '#92400e' }}>
          📢 <strong>Важно:</strong> В праздничные дни график может меняться. 
          Следите за обновлениями в чате магазина.
        </Typography.Body>
      </div>
      
      <BackButton onClick={goBack} />
    </Container>
  );
};

export default SchedulePage;
