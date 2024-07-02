import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  display: block;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: orange;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const ModalText = styled.p`
  margin-bottom: 20px;
  color: black;
`;

const RefreshButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

interface InactiveTabModalProps {
  onRefresh: () => void;
}

export const InactiveTabModal: React.FC<InactiveTabModalProps> = ({ onRefresh }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onRefresh}>&times;</ModalCloseButton>
        <ModalHeader>
          <ModalTitle>Две вкладки с игрой?</ModalTitle>
        </ModalHeader>
        <ModalText>
          Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой
          вкладке, обновите страницу.
        </ModalText>
        <RefreshButton onClick={onRefresh}>Обновить</RefreshButton>
      </ModalContent>
    </ModalOverlay>
  );
};
