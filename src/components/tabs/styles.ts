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
  position: relative;
  width: 100%;
`;

export const TabContainerInner = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Tab = styled.div<TabProps>`
  padding: 10px 20px;
  color: ${({ isActive }) => (isActive ? "#1814F3" : "#718EBF")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden;
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
  z-index: 1;
`;

export const TableWrapper = styled.div`
  margin-top: 15px;
`;

export const Border = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ebeef2;
  z-index: 0;
`;
