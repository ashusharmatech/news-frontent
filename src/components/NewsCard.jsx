import { Flex, HStack, IconButton, Image, Input, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import moment from "moment";
import { DeleteIcon } from '@chakra-ui/icons';

const NewsCard = ({title, timestamp, image, author, url}) => {
  return (
    <>
      <Flex
        w="100%"
        align="center"
        bg={useColorModeValue("gray.200", "gray.700")}
        id="card"
        m="4"
        boxShadow="lg"
        borderRadius="28px"
        px={2}
      >
        <VStack width="100%">
        <Link href={url} target="_blank">  
         <Text fontSize="xl" m="4">
          {title}
        </Text>
        </Link>
        <HStack width="95%">
          <Text
            width="50%"
            color={useColorModeValue("gray.700", "gray.200")}
            textAlign="left"
            fontSize={["xs", "sm", "md"]}
            fontFamily="'Work Sans', sans-serif"
            fontWeight="normal"
          >
            {author}
          </Text>
          <Text
            width="50%"
            color={useColorModeValue("gray.700", "gray.200")}
            textAlign="right"
            fontSize={["xs", "sm", "md"]}
            fontFamily="'Work Sans', sans-serif"
            fontWeight="normal"
          >
            {moment(timestamp).format("l") +
              " at " +
              moment(timestamp).format("LT")}
          </Text>

          </HStack>
        </VStack>

        <Image boxSize='150px' objectFit='cover' src={image} />
      </Flex>
    </>
  )
}

export default NewsCard