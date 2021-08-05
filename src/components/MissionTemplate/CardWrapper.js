import { VStack } from "@chakra-ui/react";

const CardWrapper = ({ children }) => {
	return (
		<VStack
			borderWidth="1px"
			borderRadius="lg"
			boxShadow="md"
			overflow="hidden"
			p={3}
			align="flex-start"
			w={{ base: "94.5vw", md: "47.5vw", lg: "31.5vw" }}
		>
			{children}
		</VStack>
	);
};

export default CardWrapper;
