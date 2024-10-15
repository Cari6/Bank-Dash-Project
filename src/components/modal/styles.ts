import styled from "styled-components";
import IconButton from "../icon-button";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ModalContent = styled.div`
  background-color: #f5f7fa;
  padding: 40px;
  margin: 0 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 900px;
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
  top: 0px;
  right: 0px;
  z-index: 1;
`;
