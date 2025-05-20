import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #000;
  letter-spacing: 1px;
`;

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoText>CNDY</LogoText>
    </LogoWrapper>
  );
};

export default Logo; 