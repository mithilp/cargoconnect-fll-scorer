import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";

import Header from "./components/Header";

function App() {
	return (
		<ChakraProvider theme={theme}>
			{/* TODO: add in <ColorModeSwitcher /> when Chakra UI fixes flashing issue
				Learn more:
					https://chakra-ui.com/docs/features/color-mode#color-mode-flash-issue */}
			<Header />
		</ChakraProvider>
	);
}

export default App;
