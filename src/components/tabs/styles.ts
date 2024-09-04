import styled from "styled-components";

interface TabProps {
  isActive: boolean;
}

interface TabActiveProps {
  position: number;
  count: number;
}

export const TabContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;
  width: 100%;
  position: relative;
`;

export const Tab = styled.div<TabProps>`
  padding: 10px 20px;
  color: ${({ isActive }) => (isActive ? "#1814F3" : "#718EBF")};
  position: relative;
  flex: 1;
  text-align: center;
`;

export const TabActive = styled.div<TabActiveProps>`
  height: 4px;
  background-color: #1814f3;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  left: ${({ position, count }) => (position / count) * 100}%;
  width: ${({ count }) => 100 / count}%;
  transition: left 0.3s ease;
`;

export const TableWrapper = styled.div`
  margin-top: 15px;
`;
