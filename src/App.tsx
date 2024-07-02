import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { WordGrid } from './components/WordGrid';
import { WordInput } from './components/WordInput';
import { LetterCircle } from './components/LetterCircle';
import { VictoryScreen } from './components/VictoryScreen';
import { levels } from './levels/levels';
import { getMinimumLetters } from './utils/letters';
import { InactiveTabModal } from './components/InactiveTabModal';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelText = styled.h1`
  margin: 20px 0;
`;

const LOCAL_STORAGE_KEY = 'wordGameProgress';
const LAST_ACTIVE_KEY = 'lastActiveTab';

type GameProgressType = {
  levelIndex: number;
  foundWords: string[];
};

const saveProgress = (progress: GameProgressType) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
};

const loadProgress = (): GameProgressType | null => {
  const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedProgress ? JSON.parse(savedProgress) : null;
};

export const App: React.FC = () => {
  const [init, setInit] = useState<boolean>(true);
  const [levelIndex, setLevelIndex] = useState<number>(0);
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [letters, setLetters] = useState<string[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [isInactive, setIsInactive] = useState<boolean>(false);
  console.log(3, foundWords);

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setLevelIndex(savedProgress.levelIndex);
      setFoundWords(savedProgress.foundWords);
    }

    const currentTabId = Date.now().toString();
    sessionStorage.setItem(LAST_ACTIVE_KEY, currentTabId);
    localStorage.setItem(LAST_ACTIVE_KEY, currentTabId);

    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key === LAST_ACTIVE_KEY &&
        event.newValue !== sessionStorage.getItem(LAST_ACTIVE_KEY)
      ) {
        setIsInactive(true);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const currentLevel = levels[levelIndex % levels.length];
    setLetters(getMinimumLetters(currentLevel.words));
    // setFoundWords([]);
  }, [levelIndex]);

  useEffect(() => {
    !init && saveProgress({ levelIndex, foundWords });
    setInit(false);
  }, [levelIndex, foundWords, init]);

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
    setLevelIndex((prev) => prev + 1);
    setFoundWords([]);
  };

  const handleRefresh = () => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setLevelIndex(savedProgress.levelIndex);
      setFoundWords(savedProgress.foundWords);
    }
    const currentTabId = Date.now().toString();
    sessionStorage.setItem(LAST_ACTIVE_KEY, currentTabId);
    localStorage.setItem(LAST_ACTIVE_KEY, currentTabId);
    setIsInactive(false);
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
        {isInactive && <InactiveTabModal onRefresh={handleRefresh} />}
      </AppContainer>
    </>
  );
};
