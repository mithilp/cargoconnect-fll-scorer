import { useState } from "react";

import { Text, Button, ButtonGroup } from "@chakra-ui/react";

const YesNo = ({ question, onYes, onNo }) => {
	const [yes, setYes] = useState(false);
	const [no, setNo] = useState(false);

	return (
		<>
			<Text>{question}</Text>
			<ButtonGroup>
				<Button
					colorScheme={yes ? "blue" : "gray"}
					onClick={() => {
						setNo(yes ? false : false);
						setYes(!yes);
						onYes();
					}}
				>
					Yes
				</Button>
				<Button
					colorScheme={no ? "blue" : "gray"}
					onClick={() => {
						setYes(no ? false : false);
						setNo(!no);
						onNo();
					}}
				>
					No
				</Button>
			</ButtonGroup>
		</>
	);
};

export default YesNo;
