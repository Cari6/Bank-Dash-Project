import styled from "styled-components";

export const TableMobileContainer = styled.table`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  border-spacing: 0;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const TD = styled.td`
  font-size: 14px;
  border-bottom: 1px solid #e6eff5;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div``;

export const Date = styled.div`
  color: #718ebf;
  margin-top: 5px;
`;
export const TRBody = styled.tr`
  height: 50px;
  &:last-child {
    border-bottom: none;
    ${TD} {
      border-bottom: none;
    }
  }
`;
export const TBody = styled.tbody``;
