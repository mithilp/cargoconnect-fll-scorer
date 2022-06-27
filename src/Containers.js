import { useState, createContext } from "react";

export const ContainersContext = createContext();

export const ContainersProvider = ({ children }) => {
	const [containers, setContainers] = useState({
		M15a: 0,
		M15b: 0,
		M15c: 0,
		M16a: 0,
		M16b: 0,
	});

	return (
		<ContainersContext.Provider
			value={{
				containers,
				setContainers,
			}}
		>
			{children}
		</ContainersContext.Provider>
	);
};
