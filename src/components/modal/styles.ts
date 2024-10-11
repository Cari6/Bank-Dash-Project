import styled from "styled-components";
import IconButton from "../icon-button";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 250px;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 1160px) {
    left: 0;
  }
`;

export const ModalContent = styled.div`
  background-color: #f5f7fa;
  padding: 30px;
  margin: 0 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const CustomIconButton = styled(IconButton)`
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
