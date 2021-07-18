import { Stack, Heading, Spacer, StackDivider } from "@chakra-ui/react";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

const Header = () => {
	return (
		<Stack
			p={3}
			direction={{ base: "column", lg: "row" }}
			spacing={{ base: 1, lg: 2 }}
		>
			<Heading lineHeight={{ base: "normal", sm: "100px" }}>
				FLL CARGO CONNECT℠ Scorer
			</Heading>
			<Spacer />
			<Stack
				divider={<StackDivider borderColor="gray.200" />}
				direction={{ base: "column", sm: "row" }}
				spacing={{ base: 2, sm: 5 }}
			>
				<Timer />
				<Stopwatch />
			</Stack>
		</Stack>
	);
};

export default Header;
