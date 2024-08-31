import React from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Image,
  Heading,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import backgroundImage from "./assets/images/bgnf.jpg";
import logo from "./assets/images/neuralforge.png";
import OSound from "./sound/OSound";
import OUnSupSound from "./sound/OUnSupSound";
import { useParams } from "react-router-dom";

// Define your components for different routes here
const Home = () => (
  <Box p={10} textAlign="center">
    <Heading as="h1" size="2xl" mb={5} color="teal.500">
      Welcome to Project Echo
    </Heading>
    <Text fontSize="lg" color="gray.600" mb={5}>
      A unified platform for deploying machine learning models on web and
      desktop.
    </Text>
    <HStack spacing={4} justifyContent="center">
      <Link to="/sound">
        <Button colorScheme="teal" variant="solid">
          Explore Sound Models
        </Button>
      </Link>
      <Link to="/about">
        <Button colorScheme="teal" variant="outline">
          About Project Echo
        </Button>
      </Link>
    </HStack>
  </Box>
);

const AboutMe = () => (
  <Box p={10}>
    <Heading as="h2" size="lg" mb={5} color="teal.600">
      About Project Echo
    </Heading>
    <Text fontSize="md" color="gray.700">
      Project Echo is designed to bring cutting-edge machine learning models to
      both web and desktop environments. With its unique architecture, users can
      switch between modes seamlessly and deploy models efficiently.
    </Text>
  </Box>
);

const ProjectView = () => {
  const { projectName } = useParams();
  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5} color="teal.600">
        Project: {projectName}
      </Heading>
      <Text>Details and operations for the project go here.</Text>
    </Box>
  );
};

class OHome extends React.Component {
  render() {
    return (
      <Box>
        <Router>
          <Flex
            direction="column"
            minHeight="100vh"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: "-1",
              filter: "blur(8px) brightness(0.7)",
            }}
          >
            <Box flex="1" position="relative" zIndex="1">
              <Box position="relative" zIndex="1" paddingBottom="100px">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sound" element={<OSound />} />
                  <Route
                    path="/sound/supervised/:projectName"
                    element={
                      <ProjectView
                        projectName={
                          window.location.pathname.split("/").pop() || ""
                        }
                      />
                    }
                  />
                  <Route
                    path="/sound/unsupervised/:projectName"
                    element={
                      <OUnSupSound
                        projectName={
                          window.location.pathname.split("/").pop() || ""
                        }
                      />
                    }
                  />
                  <Route path="/about" element={<AboutMe />} />
                </Routes>
              </Box>
            </Box>
            <Box
              as="footer"
              width="100%"
              backgroundColor="rgba(0, 0, 0, 0.7)" // Darker footer for better contrast
              color="white"
              padding="10px"
              textAlign="center"
              boxShadow="0 -2px 10px rgba(0, 0, 0, 0.2)" // Subtle shadow for the footer
            >
              <Flex align="center" justifyContent="space-between">
                <ChakraLink as={Link} to="/" display="flex" alignItems="center">
                  <Image
                    src={logo}
                    alt="Home"
                    boxSize="40px"
                    cursor="pointer"
                    mr="4"
                    _hover={{
                      transform: "scale(1.1)", // Slightly enlarge the logo
                      transition: "transform 0.2s ease-in-out", // Smooth transition
                    }}
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    Project Echo
                  </Text>
                </ChakraLink>
                <HStack spacing={4}>
                  <ChakraLink as={Link} to="/sound">
                    <Button colorScheme="teal" variant="outline">
                      Sound Models
                    </Button>
                  </ChakraLink>
                  <ChakraLink as={Link} to="/about">
                    <Button colorScheme="teal" variant="outline">
                      About
                    </Button>
                  </ChakraLink>
                </HStack>
              </Flex>
            </Box>
          </Flex>
        </Router>
      </Box>
    );
  }
}

export default OHome;
