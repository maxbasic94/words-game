import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { WordGrid } from './components/WordGrid';
import { WordInput } from './components/WordInput';
import { LetterCircle } from './components/LetterCircle';
import { VictoryScreen } from './components/VictoryScreen';
import { levels } from './levels/levels';
import { getMinimumLetters } from './utils/letters';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const LevelText = styled.h1`
  margin: 20px 0;
`;

export const App: React.FC = () => {
  const [levelIndex, setLevelIndex] = useState<number>(0);
  // const [currentWord, setCurrentWord] = useState<string>('');
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [letters, setLetters] = useState<string[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  useEffect(() => {
    const currentLevel = levels[levelIndex % levels.length];
    setLetters(getMinimumLetters(currentLevel.words));
    setFoundWords([]);
  }, [levelIndex]);

  const handleWordSubmit = (word: string) => {
    const currentLevel = levels[levelIndex % levels.length];
    if (currentLevel.words.includes(word) && !foundWords.includes(word)) {
      setFoundWords((prev) => [...prev, word]);
      if (foundWords.length + 1 === currentLevel.words.length) {
        setIsVictory(true);
      }
    }
  };

  const goToNextLevel = () => {
    setIsVictory(false);
    // setCurrentWord('');
    setLevelIndex((prev) => prev + 1);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <LevelText>Уровень {levelIndex + 1}</LevelText>
        {isVictory ? (
          <VictoryScreen onNextLevel={goToNextLevel} level={levelIndex + 1} />
        ) : (
          <>
            <WordGrid words={foundWords} />
            <WordInput word={selectedLetters} />
            <LetterCircle
              letters={letters}
              onWordSubmit={handleWordSubmit}
              selectedLetters={selectedLetters}
              setSelectedLetters={setSelectedLetters}
            />
          </>
        )}
      </AppContainer>
    </>
  );
};
