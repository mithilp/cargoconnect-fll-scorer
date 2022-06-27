import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";

import { PointsProvider } from "./Points";
import { ContainersProvider } from "./Containers";

import Header from "./components/Header";
import MissionsContainer from "./components/MissionsContainer";
import InfoFooter from "./components/InfoFooter";
import PointsFooter from "./components/PointsFooter";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<PointsProvider>
				<ContainersProvider>
					{/* TODO: add in <ColorModeSwitcher /> when Chakra UI fixes flashing issue
					Learn more:
						https://chakra-ui.com/docs/features/color-mode#color-mode-flash-issue */}
					<Header />
					<MissionsContainer />
					<InfoFooter />
					<PointsFooter />
				</ContainersProvider>
			</PointsProvider>
		</ChakraProvider>
	);
}

export default App;
