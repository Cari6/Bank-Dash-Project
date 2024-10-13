import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  // max-width: 500px;
  height: 280px;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  @media (max-width: 890px) {
    // max-width: 400px;
  }
`;
