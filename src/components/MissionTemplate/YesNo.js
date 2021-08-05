import { Text, Button, ButtonGroup } from "@chakra-ui/react";

const YesNo = ({ question, value, setValue, isDisabled }) => {
	return (
		<>
			<Text>{question}</Text>
			<ButtonGroup>
				<Button
					isDisabled={isDisabled}
					colorScheme={value === "yes" ? "blue" : "gray"}
					onClick={() => setValue(value === "yes" ? "none" : "yes")}
				>
					Yes
				</Button>
				<Button
					isDisabled={isDisabled}
					colorScheme={value === "no" ? "blue" : "gray"}
					onClick={() => setValue(value === "no" ? "none" : "no")}
				>
					No
				</Button>
			</ButtonGroup>
		</>
	);
};

export default YesNo;
