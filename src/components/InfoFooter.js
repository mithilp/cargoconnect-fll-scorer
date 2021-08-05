import { Wrap, Link, Box } from "@chakra-ui/react";

const InfoFooter = () => {
	return (
		<Wrap p={3} mb="60px" bg="gray.100" justify="space-between">
			<Box>
				Made with ❤ by{" "}
				<Link href="https://quantumconnects.netlify.app/teams" target="_blank">
					Quantum Connects
				</Link>
			</Box>
			<Box>FLL Scorer v2 - Released August 4, 2021</Box>
			<Wrap spacing={3}>
				<Link
					href="https://github.com/Quantum-Connects/fll-scorer"
					target="_blank"
				>
					Contribute on GitHub
				</Link>
				<Link
					href="https://github.com/Quantum-Connects/fll-scorer/issues"
					target="_blank"
				>
					Report Bugs
				</Link>
			</Wrap>
		</Wrap>
	);
};

export default InfoFooter;
