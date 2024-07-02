import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
`;

const InputContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 2px solid #575b7a;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

const CurrentWord = styled.span`
  font-size: 24px;
  color: #333;
`;

interface WordInputProps {
  word: string[];
}

export const WordInput: React.FC<WordInputProps> = ({ word }) => {
  return (
    <Container>
      {word.length ? (
        <InputContainer>
          <CurrentWord>{word.join('')}</CurrentWord>
        </InputContainer>
      ) : null}
    </Container>
  );
};
