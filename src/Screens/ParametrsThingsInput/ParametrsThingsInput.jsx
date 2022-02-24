import { Box, Button } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionAct_52_Input } from "../../Components/Input/SelectionAct_52_Input/SelectionAct_52_Input";
import { ThingDataListInput } from "../../Components/Input/ThingDataListInput/ThingDataListInput";
import { actList_52_Selector } from "../../Store/ActList_52/selectors";
import { DESCRIPTION } from "./constants";
import { setParametrsThingsActionThink } from "../../Store/ActList_52";
import { setActList_51_defectiveItemActionThink } from "../../Store/ActList_51_defective";
import { NUMBER_ACT_51_DEFECTIVE_CONSTANT } from "../../Constants/constants";
import "./style.css";


export const ParametrsThingsInput = () => {
    const [valueSelectionAct_52_Input, setValueSelectionAct_52_Input] = useState("");
    const [things, setThings] = useState([]);
    const { actList_52 } = useSelector(actList_52_Selector);
    const dispatch = useDispatch();
    const [numberAct_51_defectiveAndIdThing, setNumberAct_51_defectiveAndIdThing] = useState([]);
    const [fromGA, setFromGA] = useState(false);

    useEffect(() => {
        setThings([...things, {
            id: uuidv4(),
            values: { data: "", description: "", giviWeight: "", notReceived: false, excess: false, defective: false, differenceWeight: false },
        }]);
    }, []);

    useEffect(() => {
        let newNumberAct_51_defectiveAndIdThing = [];
        things.forEach((thingsItem) => {
            if (thingsItem.values.defective) {
                newNumberAct_51_defectiveAndIdThing = [...newNumberAct_51_defectiveAndIdThing, {
                    id: thingsItem.id, numberAct: numberAct_51_defectiveAndIdThing.find((numberAct_51_defectiveAndIdThingItem) => {
                        return numberAct_51_defectiveAndIdThingItem.id === thingsItem.id;
                    })?.numberAct || NUMBER_ACT_51_DEFECTIVE_CONSTANT
                }];
            };
        });
        setNumberAct_51_defectiveAndIdThing(newNumberAct_51_defectiveAndIdThing);
    }, [things]);

    useEffect(() => {
        window.scrollBy(0, window.innerHeight);// прокрутить страницу вниз,а чтобы вверх: window.scrollBy(0, -window.innerHeight);
    }, [things.length]);

    useEffect(() => {
        setValueSelectionAct_52_Input(actList_52[actList_52.length - 1]?.name ?? "");
    }, []);

    useEffect(() => {
        const actList_52_item = actList_52.find((item) => {
            return item.name === valueSelectionAct_52_Input;
        });
        setFromGA(actList_52_item?.fromGA);
    }, [valueSelectionAct_52_Input])

    const changeValueSelectionAct_52_Input = (e) => {
        setValueSelectionAct_52_Input(e.target.value);
    };

    const addThing = () => {
        const newThing = {
            id: uuidv4(),
            values: { data: "", description: "", giviWeight: "", notReceived: false, excess: false, defective: false, differenceWeight: false },
        };
        setThings([...things, newThing]);
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
        if (numberAct_51_defectiveAndIdThing.length !== 0) {
            dispatch(setActList_51_defectiveItemActionThink(valueSelectionAct_52_Input, numberAct_51_defectiveAndIdThing));
        }
    }, [valueSelectionAct_52_Input, numberAct_51_defectiveAndIdThing]);

    return (
        <Box className="parametrs-things">
            <SelectionAct_52_Input actList_52={actList_52} valueSelectionAct_52_Input={valueSelectionAct_52_Input}
                changeValueSelectionAct_52_Input={changeValueSelectionAct_52_Input} />
            <ThingDataListInput things={things} changeThingData={changeThingData} handleToogleReasons={handleToogleReasons}
                changeNumberAct_51_defective={changeNumberAct_51_defective}
                numberAct_51_defectiveAndIdThing={numberAct_51_defectiveAndIdThing}
                fromGA={fromGA} />
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