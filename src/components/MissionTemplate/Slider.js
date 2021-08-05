import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Text,
	HStack,
	useToast,
} from "@chakra-ui/react";

const SliderComponent = ({
	question,
	value,
	setValue,
	isDisabled,
	defaultValue,
	step,
	max,
}) => {
	const toast = useToast();
	return (
		<>
			<Text>{question}</Text>
			<HStack w="100%" spacing={3}>
				<NumberInput
					w="7ch"
					isDisabled={isDisabled}
					value={value}
					onChange={(val) => {
						if (val > max) {
							if (Number(val.toString()[1]) <= max) {
								setValue(Number(val.toString()[1]));
							} else {
								toast({
									title: "Too Large Input",
									description: `The maximum is ${max}`,
									status: "error",
									duration: 2000,
									isClosable: true,
								});
							}
						} else {
							setValue(val);
						}
					}}
					defaultValue={defaultValue ? defaultValue : 0}
					step={step ? step : 1}
					min={0}
					max={max}
				>
					<NumberInputField px={2} />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
				<Slider
					aria-label="slider"
					isDisabled={isDisabled}
					value={value}
					onChange={setValue}
					defaultValue={defaultValue ? defaultValue : 0}
					step={step ? step : 1}
					min={0}
					max={max}
					focusThumbOnChange={false}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb borderWidth="1px" borderColor="gray.500" />
				</Slider>
			</HStack>
		</>
	);
};

export default SliderComponent;
