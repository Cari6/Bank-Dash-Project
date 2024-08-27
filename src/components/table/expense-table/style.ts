import styled from "styled-components";

export const TableContainer = styled.table`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  border-spacing: 0;
  @media (max-width: 980px) {
    th,
    td {
      &:nth-child(n + 2):nth-child(-n + 4),
      &:nth-child(n + 7) {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
export const THead = styled.thead`
  text-align: left;
  height: 47px;
`;
export const TRHead = styled.tr``;

export const TH = styled.th`
  font-size: 14px;
  font-weight: 500;
  color: #718ebf;
  border-bottom: 1px solid #e6eff5;
  padding: 0;
`;

export const TD = styled.td`
  font-size: 14px;
  border-bottom: 1px solid #e6eff5;
`;

export const TRBody = styled.tr`
  height: 47px;
  &:last-child {
    border-bottom: none;
    ${TD} {
      border-bottom: none;
    }
  }
`;
export const TBody = styled.tbody``;
