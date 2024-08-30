import styled from "styled-components";

interface TabProps {
  isActive: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const Tab = styled.div<TabProps>`
  padding: 10px 20px;
  color: ${({ isActive }) => (isActive ? "#1814F3" : "#718EBF")};
`;

export const TabActive = styled.div`
  height: 4px;
  background-color: #1814f3;
  border-radius: 10px 10px 0 0;
`;

export const TableWrapper = styled.div`
  margin-top: 15px;
`;
