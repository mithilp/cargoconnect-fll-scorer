import { Heading } from "@chakra-ui/react";

const MissionHeader = ({ score, number, name }) => {
	return (
		<Heading as="h3" size="md">
			M{number} • {name} • {score}
		</Heading>
	);
};

export default MissionHeader;
