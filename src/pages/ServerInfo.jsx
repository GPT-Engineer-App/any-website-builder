import { Box, Heading, Text } from "@chakra-ui/react";

function ServerInfo() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Minecraft Server Information
      </Heading>
      <Text fontSize="lg">
        Welcome to our Minecraft server! Here you will find all the information you need to join and enjoy our community.
      </Text>
    </Box>
  );
}

export default ServerInfo;