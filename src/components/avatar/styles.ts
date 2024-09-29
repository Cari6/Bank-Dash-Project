import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const AvatarImage = styled.div<{ size: number }>`
  width: ${(props) => props.size}px; // Establecer un tamaño fijo
  height: ${(props) => props.size}px; // Establecer un tamaño fijo
  border-radius: 50%; // Bordes redondeados
  overflow: hidden; // Ocultar cualquier desbordamiento de imagen
  position: relative; // Para que el hijo (Image) se posicione correctamente
`;

export const TextTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #232323;
`;

export const TextSubtitle = styled.div`
  font-size: 16px;
  color: #718ebf;
`;
