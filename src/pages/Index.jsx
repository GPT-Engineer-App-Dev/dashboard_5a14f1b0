import React from "react";
import { Box, Flex, Heading, Text, Button, Icon, Divider, Stack, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid } from "@chakra-ui/react";
import { FaRegChartBar, FaUserTie, FaRegListAlt, FaPlus } from "react-icons/fa";

const StatCard = ({ title, stat, icon }) => {
  return (
    <Stat p={5} shadow="md" border="1px solid" borderColor="gray.200" borderRadius="xl">
      <Flex justifyContent="space-between">
        <Box pl={2}>
          <StatLabel fontWeight="medium">{title}</StatLabel>
          <StatNumber fontSize="2xl" fontWeight="medium">
            {stat}
          </StatNumber>
          <StatHelpText>Compared to last month</StatHelpText>
        </Box>
        <Box my="auto" color="blue.500">
          <Icon as={icon} w={10} h={10} />
        </Box>
      </Flex>
    </Stat>
  );
};

const Index = () => {
  return (
    <Box px={8} py={12}>
      <Heading mb={6}>Dashboard</Heading>
      <Flex justifyContent="space-between" mb={5}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Welcome, User!
          </Text>
          <Text fontSize="md" color="gray.500">
            Here's what's happening with your business today.
          </Text>
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="blue" size="md">
          Add New Item
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={6}>
        <StatCard title="Total Revenue" stat="$48,390" icon={FaRegChartBar} />
        <StatCard title="New Clients" stat="124" icon={FaUserTie} />
        <StatCard title="Active Projects" stat="8" icon={FaRegListAlt} />
      </SimpleGrid>
      <Divider my={6} />
      <Stack spacing={5}>
        <Heading size="md">Recent Activities</Heading>
        {/* ... other components for recent activities will go here */}
      </Stack>
    </Box>
  );
};

export default Index;
