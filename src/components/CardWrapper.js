import { VStack } from "@chakra-ui/react";

const CardWrapper = ({ children }) => {
	return (
		<VStack
			borderWidth="1px"
			borderRadius="lg"
			boxShadow="lg"
			overflow="hidden"
			p={2}
			align="flex-start"
			w={{ base: "100%", sm: "25vw" }}
		>
			{children}
		</VStack>
	);
};

export default CardWrapper;
