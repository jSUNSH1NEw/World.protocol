import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";



function Card(props) {
    const {image, summary, link } = props;
  
    return (
      <Box
        p={4}
        display={{ md: "flex" }}
        maxWidth="350px"
        maxHeight="200px" 
        borderWidth={1}
        margin={5}
        rounded="xl"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            maxWidth="200px"
            margin="auto"
            alt="Picture of World Team Member"
          >
        {image}
        </Image>
          
        </AspectRatio>
        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {summary}
          </Text>
          <Link
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            {link}
          </Link>
          <Button maxWidth="100px" my={2}>
            Click me!
          </Button>
        </Stack>
      </Box>
    );
  }
  
  export default Card;
  