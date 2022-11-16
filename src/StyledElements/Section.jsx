import { Box } from "components/Box/Box";

export const Section = ({children}) => {
    return   <Box
    as='section'
    width='100%'
    py='30px'>{children}</Box>
}