import defaultPoints from "../defaultPoints";

import { Center, HStack, Text, Button } from "@chakra-ui/react";

import { useContext } from "react";
import { PointsContext } from "../Points.js";

const PointsFooter = () => {
	const { missions, setMissions } = useContext(PointsContext);

	return (
		<Center
			position="fixed"
			bottom={0}
			left={0}
			w="100vw"
			h="70px"
			bg="green.200"
			zIndex={1}
		>
			<HStack spacing={5}>
				<Text fontSize="lg" fontWeight="bold">
					Points:{" "}
					{(missions.M00.q1 === "yes" ? 25 : 0) +
						(missions.M01.q1 === "yes" ? 20 : 0) +
						(missions.M02.q1 === "completely"
							? 30
							: missions.M02.q1 === "partly"
							? 20
							: missions.M02.q1 === "no"
							? 0
							: 0) +
						((missions.M03.q1 === "yes" ? 5 : 0) +
							(missions.M03.q2 === "yes" ? 15 : 0) +
							(missions.M03.q3 === "yes" ? 10 : 0) +
							(missions.M03.q4 === "yes" ? 10 : 0)) +
						((missions.M04.q1 === "yes" ? 30 : 0) +
							(missions.M04.q2 === "yes" ? 10 : 0)) +
						(missions.M05.q1 === "yes" ? 20 : 0) +
						((missions.M06.q1 === "yes" ? 20 : 0) +
							(missions.M06.q2 === "yes" ? 30 : 0)) +
						((missions.M07.q1 === "yes" ? 20 : 0) +
							(missions.M07.q2 === "yes" ? 10 : 0)) +
						((missions.M08.q1 === "yes" ? 20 : 0) +
							(missions.M08.q2 === "yes" ? 10 : 0) +
							(missions.M08.q3 === "yes" ? 10 : 0)) +
						((missions.M09.q1 === "yes" ? 20 : 0) +
							(missions.M09.q2 === "yes" ? 20 : 0)) +
						(missions.M10.q1 === "yes" ? 20 : 0) +
						(missions.M11.q1 === "completely"
							? 20
							: missions.M11.q2 === "partly"
							? 10
							: 0) +
						((missions.M12.q1 === "holder-mat"
							? 20
							: missions.M12.q1 === "only-holder"
							? 30
							: 0) +
							(missions.M12.q2 === "completely"
								? 10
								: missions.M12.q2 === "partly"
								? 5
								: 0)) +
						((missions.M13.q1 === "yes" ? 10 : 0) +
							(missions.M13.q2 === "yes" ? 20 : 0)) +
						missions.M14.q1 * 10 +
						(missions.M15.q1 * 10 +
							missions.M15.q2 * 20 +
							missions.M15.q3 * 30) +
						(missions.M17.q1 === 1
							? 10
							: missions.M17.q1 === 2
							? 15
							: missions.M17.q1 === 3
							? 25
							: missions.M17.q1 === 4
							? 35
							: missions.M17.q1 === 5
							? 50
							: missions.M17.q1 === 6
							? 50
							: 0)}
				</Text>
				<Button onClick={() => setMissions(defaultPoints)}>Reset All</Button>
			</HStack>
		</Center>
	);
};

export default PointsFooter;
