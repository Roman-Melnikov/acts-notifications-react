import { Box, Button } from "@material-ui/core";
import { ThingDataListItemInput } from "../ThingDataListItemInput/ThingDataListItemInput";
import "./style.css";

export const ThingDataListInput =
    ({ things, changeThingData, handleToogleReasons, changeNumberAct_51_defective,
         numberAct_51_defectiveAndIdThing, fromGA, addThing }) => {
        return (
            <Box className="thing-data-list-input">
                {things.map((item) => <ThingDataListItemInput item={item} key={item.id}
                    changeThingData={changeThingData} handleToogleReasons={handleToogleReasons}
                    changeNumberAct_51_defective={changeNumberAct_51_defective}
                    numberAct_51_defectiveAndIdThing={numberAct_51_defectiveAndIdThing}
                    fromGA={fromGA} />)}
                    <Button onClick={addThing} variant="contained">Добавить емкость</Button>
            </Box>
        )
    }