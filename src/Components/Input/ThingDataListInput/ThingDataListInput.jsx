import { Box } from "@material-ui/core";
import { ThingDataListItemInput } from "../ThingDataListItemInput/ThingDataListItemInput";

export const ThingDataListInput =
    ({ things, changeThingData, handleToogleReasons, changeNumberAct_51_defective, numberAct_51_defectiveAndIdThing, fromGA }) => {
        return (
            <Box>
                {things.map((item) => <ThingDataListItemInput item={item} key={item.id}
                    changeThingData={changeThingData} handleToogleReasons={handleToogleReasons}
                    changeNumberAct_51_defective={changeNumberAct_51_defective}
                    numberAct_51_defectiveAndIdThing={numberAct_51_defectiveAndIdThing}
                    fromGA={fromGA} />)}
            </Box>
        )
    }