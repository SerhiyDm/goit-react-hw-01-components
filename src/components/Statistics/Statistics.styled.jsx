import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 30% 0;
  border: 1px #c4cace solid;
  background-color: blue;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
  height: 20%;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.general};
  font-weight: 'bold';
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatisticsText = styled.p`
  font-size: ${props => props.theme.fontSizes.secondary};
  color: ${props => props.theme.colors.white};
`;
