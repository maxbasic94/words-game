import React from 'react';
import styled from 'styled-components';

const VictoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2e3246;
`;

const VictoryMessage = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin: 10px 0;
`;

const VictorySubMessage = styled.h1`
  color: #ffffff;
  font-size: 36px;
  margin: 10px 0;
`;

const NextLevelButton = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  background-color: #7ac74f;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 0px #4e8f29;
  transition: transform 0.1s;

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

interface VictoryScreenProps {
  onNextLevel: () => void;
  level: number;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({ onNextLevel, level }) => {
  return (
    <VictoryContainer>
      <VictoryMessage>Уровень {level} пройден</VictoryMessage>
      <VictorySubMessage>Изумительно!</VictorySubMessage>
      <NextLevelButton onClick={onNextLevel}>Уровень {level + 1}</NextLevelButton>
    </VictoryContainer>
  );
};
