import styled from "styled-components";

export const ItemlistContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  height: 60px;
  padding-left: 40px;
  align-items: center;
`;

export const ItemActive = styled.div`
  position: absolute;
  width: 6px;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 0 10px 10px 0;
  background-color: #2d60ff;
`;
