import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  margin-right: 5px;
  
  &:before {
    content: '';
    width: 18px;
    height: 10px;
    background: linear-gradient(135deg, #8bc34a 0%, #4caf50 100%);
    border-radius: 1px;
  }
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`;

const LogoPlaceholder: React.FC = () => {
  return (
    <LogoContainer>
      <ImageIcon />
      <LogoText>Logo</LogoText>
    </LogoContainer>
  );
};

export default LogoPlaceholder; 