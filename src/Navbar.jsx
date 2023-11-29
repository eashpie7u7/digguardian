import "./Navbar.css";
import {Box, Text} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <Box display= "flex" justifyContent= "space-between" alignItems= "center" bg= "#27187E" color= "white" position= "sticky" top= "0">
      <Text fontSize= "1.5rem" margin= "1rem" fontWeight= "bold" textDecoration= "none">
           DigGuardian
      </Text>
     
    </Box>
  );
};

export default Navbar;