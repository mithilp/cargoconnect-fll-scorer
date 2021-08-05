import defaultPoints from "./defaultPoints";

import { useState, createContext } from "react";

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
	const [missions, setMissions] = useState(defaultPoints);

	return (
		<PointsContext.Provider
			value={{
				missions,
				setMissions,
			}}
		>
			{children}
		</PointsContext.Provider>
	);
};
