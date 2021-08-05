import {
	Stack,
	Heading,
	Spacer,
	StackDivider,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

const Header = () => {
	return (
		<Wrap p={3} spacing={{ base: 1, lg: 2 }} align="center">
			<WrapItem>
				<Heading>FLL CARGO CONNECT℠ Scorer</Heading>
			</WrapItem>
			<Spacer />
			<WrapItem>
				<Stack
					w={{ base: "calc(98vw - 1em)", md: "auto" }}
					divider={<StackDivider borderColor="gray.200" />}
					direction={{ base: "column", sm: "row" }}
					spacing={{ base: 2, sm: 5 }}
				>
					<Timer />
					<Stopwatch />
				</Stack>
			</WrapItem>
		</Wrap>
	);
};

export default Header;
