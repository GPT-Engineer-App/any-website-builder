import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={NavLink} to="/" color="white" fontSize="lg" fontWeight="bold">
          Home
        </Link>
        <Link as={NavLink} to="/server-info" color="white" fontSize="lg" fontWeight="bold">
          Server Info
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;