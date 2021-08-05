import { Text, Select } from "@chakra-ui/react";

const SelectComponent = ({ question, value, onChange, options }) => {
	return (
		<>
			<Text>{question}</Text>

			<Select
				cursor="pointer"
				value={value}
				onChange={onChange}
				placeholder="None"
			>
				{options
					? options.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
					  ))
					: ""}
			</Select>
		</>
	);
};

export default SelectComponent;
