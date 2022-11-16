import PropTypes from 'prop-types';
import {
StatisticsList,
StatisticsItem,
StatisticsText,
StatisticsTitle } from './Statistics.styled';
import { Container } from 'components/Box/Container';

export const Statistics = ({
    title: Title = null,
     stats}) => {
    return (
<Container>{Title && <StatisticsTitle>{Title}</StatisticsTitle>}
<StatisticsList>
    {stats.map(({id, label, percentage, }) =>
    <StatisticsItem key={id}>
<StatisticsText>{label}
</StatisticsText>
<StatisticsText>{percentage}%</StatisticsText>
    </StatisticsItem>)}
</StatisticsList>
</Container>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}