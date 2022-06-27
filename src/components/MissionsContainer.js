import { Wrap, WrapItem } from "@chakra-ui/react";

import M00 from "./Missions/M00";
import M01 from "./Missions/M01";
import M02 from "./Missions/M02";
import M03 from "./Missions/M03";
import M04 from "./Missions/M04";
import M05 from "./Missions/M05";
import M06 from "./Missions/M06";
import M07 from "./Missions/M07";
import M08 from "./Missions/M08";
import M09 from "./Missions/M09";
import M10 from "./Missions/M10";
import M11 from "./Missions/M11";
import M12 from "./Missions/M12";
import M13 from "./Missions/M13";
import M14 from "./Missions/M14";
import M15 from "./Missions/M15";
import M16 from "./Missions/M16";
import M17 from "./Missions/M17";

const MissionsContainer = () => {
	return (
		<Wrap spacing={3} p={3} justify="space-between">
			<WrapItem>
				<M00 />
			</WrapItem>
			<WrapItem>
				<M01 />
			</WrapItem>
			<WrapItem>
				<M02 />
			</WrapItem>
			<WrapItem>
				<M03 />
			</WrapItem>
			<WrapItem>
				<M04 />
			</WrapItem>
			<WrapItem>
				<M05 />
			</WrapItem>
			<WrapItem>
				<M06 />
			</WrapItem>
			<WrapItem>
				<M07 />
			</WrapItem>
			<WrapItem>
				<M08 />
			</WrapItem>
			<WrapItem>
				<M09 />
			</WrapItem>
			<WrapItem>
				<M10 />
			</WrapItem>
			<WrapItem>
				<M11 />
			</WrapItem>
			<WrapItem>
				<M12 />
			</WrapItem>
			<WrapItem>
				<M13 />
			</WrapItem>
			<WrapItem>
				<M14 />
			</WrapItem>
			<WrapItem>
				<M15 />
			</WrapItem>
			<WrapItem>
				<M16 />
			</WrapItem>
			<WrapItem>
				<M17 />
			</WrapItem>
		</Wrap>
	);
};

export default MissionsContainer;
