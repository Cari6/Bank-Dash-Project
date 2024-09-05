import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1370px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
