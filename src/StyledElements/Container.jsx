import { Box } from "components/Box/Box";
export const Container = ({children}) =>  {
return (<Box
as="div"
width="35vw"
bg="white"
m="0 auto"
borderRadius="4px"
boxShadow="0px 3px 13px 0px #000000bf"
>{children}</Box>);
};