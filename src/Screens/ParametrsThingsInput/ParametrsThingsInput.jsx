import { Box, Button } from "@material-ui/core";
import faker from "faker";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionAct_52_Input } from "../../Components/Input/SelectionAct_52_Input/SelectionAct_52_Input";
import { ThingDataListInput } from "../../Components/Input/ThingDataListInput/ThingDataListInput";
import { actList_52_Selector } from "../../Store/ActList_52/selectors";
import { numberAct_51_constantSelector } from "../../Store/NumberAct_51_D_constant/selectors";
import { DESCRIPTION } from "./constants";
import { setParametrsThingsActionThink } from "../../Store/ActList_52";
import "./style.css";
import { setActList_51_defectiveItemActionThink } from "../../Store/ActList_51_defective";

export const ParametrsThingsInput = () => {
    const [valueSelectionAct_52_Input, setValueSelectionAct_52_Input] = useState("");
    const [things, setThings] = useState([]);
    const { actList_52 } = useSelector(actList_52_Selector);
    const dispatch = useDispatch();
    const { numberAct_51_constant: numberAct_51_defectiveConstant } = useSelector(numberAct_51_constantSelector);
    const [numberAct_51_defectiveAndIdThing, setNumberAct_51_defectiveAndIdThing] = useState([]);

    useEffect(() => {
        setThings([...things, {
            id: faker.datatype.uuid(),
            values: { data: "", description: "", weight: "", notReceived: false, excess: false, defective: false, differenceWeight: false },
        }]);
    }, []);

    useEffect(() => {
        setNumberAct_51_defectiveAndIdThing([{ id: things[0]?.id, numberAct: numberAct_51_defectiveConstant }]);
    }, [things[0]?.id]);

    useEffect(() => {
        window.scrollBy(0, window.innerHeight);// прокрутить страницу вниз,а чтобы вверх: window.scrollBy(0, -window.innerHeight);
    }, [things.length]);

    useEffect(() => {
        setValueSelectionAct_52_Input(actList_52[actList_52.length - 1]?.name ?? "");
    }, []);

    const changeValueSelectionAct_52_Input = (e) => {
        setValueSelectionAct_52_Input(e.target.value);
    };

    const addThing = () => {
        const newThing = {
            id: faker.datatype.uuid(),
            values: { data: "", description: "", weight: "", notReceived: false, excess: false, defective: false, differenceWeight: false },
        };
        setThings([...things, newThing]);
        setNumberAct_51_defectiveAndIdThing([...numberAct_51_defectiveAndIdThing, { id: newThing.id, numberAct: numberAct_51_defectiveConstant }]);
    };

    const changeThingData = (id, name, value) => {
        const [...newThings] = things;//остаточные параметры, rest параметр
        newThings.forEach((item) => {
            if (item.id === id) {
                item.values[name] = value;
                return;
            }
        })
        setThings(newThings);
    };

    const changeNumberAct_51_defective = useCallback((e, id) => {
        const [...newNumberAct_51_Defective] = numberAct_51_defectiveAndIdThing;//остаточные параметры, rest параметр
        newNumberAct_51_Defective.forEach((item) => {
            if (item.id === id) {
                item.numberAct = e.target.value;
                return;
            }
        })
        setNumberAct_51_defectiveAndIdThing(newNumberAct_51_Defective);
    }, [numberAct_51_defectiveAndIdThing]);

    const handleToogleReasons = (id, checked) => {
        const [...newThings] = things;//остаточные параметры, rest параметр
        newThings.forEach((item) => {
            if (item.id === id) {
                item.values.notReceived = checked.notReceived;
                item.values.excess = checked.excess;
                item.values.defective = checked.defective;
                item.values.differenceWeight = checked.differenceWeight;
                item.values.defective && (item.values.description = DESCRIPTION.DEFECTIVE);
                !item.values.defective && (item.values.differenceWeight && (item.values.description = DESCRIPTION.DIFFERENCE_WEIGHT));
                return;
            }
        })
        setThings(newThings);
    };

    const transferActList_52_ParametrsThingToStore = useCallback(() => {
        dispatch(setParametrsThingsActionThink(things, valueSelectionAct_52_Input))
    }, [things, valueSelectionAct_52_Input]);

    const transferActList_51_defectiveItemToStore = useCallback(() => {
        dispatch(setActList_51_defectiveItemActionThink(valueSelectionAct_52_Input, numberAct_51_defectiveAndIdThing))
    }, [valueSelectionAct_52_Input, numberAct_51_defectiveAndIdThing]);

    return (
        <Box className="parametrs-things">
            <SelectionAct_52_Input actList_52={actList_52} valueSelectionAct_52_Input={valueSelectionAct_52_Input}
                changeValueSelectionAct_52_Input={changeValueSelectionAct_52_Input} />
            <ThingDataListInput things={things} changeThingData={changeThingData} handleToogleReasons={handleToogleReasons}
                changeNumberAct_51_defective={changeNumberAct_51_defective}
                numberAct_51_defectiveAndIdThing={numberAct_51_defectiveAndIdThing} />
            <Button onClick={addThing} variant="contained">Добавить емкость</Button>
            <Box className="parametrs-things-btn-send">
                <Button onClick={() => {
                    transferActList_52_ParametrsThingToStore();
                    transferActList_51_defectiveItemToStore();
                }} variant="contained" color="primary"
                    endIcon={<SendIcon />} className="parametrs-act-btn">Отправить данные</Button>
            </Box>
        </Box>
    )
}