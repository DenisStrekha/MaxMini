import React from 'react';
import { Button } from '@maxhub/max-ui';

const MenuButton = ({ 
  title, 
  subtitle, 
  icon, 
  onClick, 
  mode = 'secondary',
  showArrow = false 
}) => (
  <Button
    mode={mode}
    size="large"
    stretched
    onClick={onClick}
    style={{
      justifyContent: 'flex-start',
      paddingLeft: 20,
      paddingRight: showArrow ? 16 : 20,
      height: 60,
      transition: 'all 0.2s ease'
    }}
  >
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: 12,
      width: '100%'
    }}>
      <span style={{ fontSize: 20, minWidth: 24 }}>{icon}</span>
      <div style={{ 
        textAlign: 'left',
        flex: 1,
        overflow: 'hidden'
      }}>
        <div style={{ 
          fontSize: 16, 
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ 
            fontSize: 12, 
            color: '#666',
            marginTop: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {subtitle}
          </div>
        )}
      </div>
      {showArrow && (
        <span style={{ fontSize: 16, color: '#999' }}>→</span>
      )}
    </div>
  </Button>
);

export default MenuButton;