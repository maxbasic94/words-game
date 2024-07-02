import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #575b7a;
  border-radius: 50%;
`;

const LetterButton = styled.button<{ angle: number; selected: boolean }>`
  position: absolute;
  width: 55px;
  height: 55px;
  background-color: #e57373;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transform: ${({ angle }) => `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`};
`;

interface LetterCircleProps {
  letters: string[];
  selectedLetters: string[];
  setSelectedLetters: Dispatch<SetStateAction<string[]>>;
  onWordSubmit: (word: string) => void;
}

export const LetterCircle: React.FC<LetterCircleProps> = ({
  letters,
  onWordSubmit,
  selectedLetters,
  setSelectedLetters,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (letter: string) => {
    setIsDragging(true);
    setSelectedLetters([letter]);
  };

  const handleMouseOver = (letter: string) => {
    if (isDragging) {
      setSelectedLetters((prev) => [...prev, letter]);
    }
  };

  const handleMouseUp = () => {
    onWordSubmit(selectedLetters.join(''));
    setIsDragging(false);
    setSelectedLetters([]);
  };

  return (
    <CircleContainer onMouseUp={handleMouseUp}>
      <Circle />
      {letters.map((letter, index) => (
        <LetterButton
          key={letter}
          angle={(360 / letters.length) * index}
          selected={selectedLetters.includes(letter)}
          onMouseDown={() => handleMouseDown(letter)}
          onMouseOver={() => handleMouseOver(letter)}
        >
          {letter}
        </LetterButton>
      ))}
    </CircleContainer>
  );
};
