import PropTypes from 'prop-types';
import { List, Item } from "../../StyledElements/List.styled";
import { Text } from "StyledElements/TextPhoto.styled";
import { Container } from "StyledElements/Container";
import { theme } from "constants";
import { TitleText } from "StyledElements/TextPhoto.styled";

export const Statistics = ({
    title: Title = null,
     stats}) => {
    return (
<Container>{Title && <TitleText
fontSize={theme.fontSizes.general}
fontWeight={theme.fontWeights.b}
fontColor={theme.colors.secondaryText}
>{Title}</TitleText>}
<List>
    {stats.map(({id, label, percentage, }) =>
    <Item key={id}
    bgcl={() => `#${Math.floor(Math.random() * 16777215).toString(16)}`}>
<Text fontSize={'16px'}
fontColor={theme.colors.secondaryText}>{label}
</Text>
<Text fontSize={theme.fontSizes.general}
fontColor={theme.colors.secondaryText}>{percentage}%</Text>
    </Item>)}
</List>
</Container>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number,
    }))
}