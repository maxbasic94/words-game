import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20px;
`;

const LetterBox = styled.div`
  padding: 10px;
  border: 2px solid #575b7a;
  border-radius: 10px;
  background-color: #e1e1e1;
  font-size: 18px;
  color: black;
`;

const WordBox = styled.div`
  display: flex;
  gap: 5px;
`;

interface WordGridProps {
  words: string[];
}

export const WordGrid: React.FC<WordGridProps> = ({ words }) => {
  return (
    <GridContainer>
      {words.map((word, index) => (
        <WordBox>
          {word.split('').map((letter) => (
            <LetterBox key={index}>{letter}</LetterBox>
          ))}
        </WordBox>
      ))}
    </GridContainer>
  );
};
