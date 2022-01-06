import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { SimpleForm } from "../../Components/SimpleForm";
import { addFlightActionThunk } from "../../Store/ParametrsFlights/actions";
import { AIR_LINES, FROM_WHERE } from "../../Constants/constants";

export const AddFlight = () => {
    const dispatch = useDispatch();

    return (
        <SimpleForm render={(props) => {
            return (
                <Box>
                    <fieldset>
                        <legend>Добавить рейс</legend>
                            <label class="position-label">Номер рейса</label>
                            <input
                                name="numberFlight"
                                value={props.getFieldValue("numberFlight")}
                                onChange={(e) => { props.setFieldValue("numberFlight", e.target.value) }}
                            />
                            <label class="position-label">Откуда</label>
                            <input
                                name="fromWhere"
                                list="fromWhere"
                                value={props.getFieldValue("fromWhere")}
                                onChange={(e) => { props.setFieldValue("fromWhere", e.target.value) }}
                            />
                            <datalist id="fromWhere">
                                <option value={FROM_WHERE.DOMODEDOVO} />
                                <option value={FROM_WHERE.NEW_URENGOY} />
                                <option value={FROM_WHERE.SCHEREMETEVO} />
                                <option value={FROM_WHERE.YAKUTSK} />
                                <option value={FROM_WHERE.EKATERINBURG} />
                                <option value={FROM_WHERE.TYUMEN} />
                                <option value={FROM_WHERE.OMSK} />
                                <option value={FROM_WHERE.SAINT_PETERSBURG} />
                                <option value={FROM_WHERE.KRASNOYARSK} />
                                <option value={FROM_WHERE.PERMIAN} />
                                <option value={FROM_WHERE.CHELYABINSK} />
                                <option value={FROM_WHERE.NERYUNGRI} />
                                <option value={FROM_WHERE.KRASNODAR} />
                                <option value={FROM_WHERE.KYZYL} />
                                <option value={FROM_WHERE.IRKUTSK} />
                                <option value={FROM_WHERE.BLAGOVESHCHENSK} />
                                <option value={FROM_WHERE.ABAKAN} />
                                <option value={FROM_WHERE.SURGUT} />
                                <option value={FROM_WHERE.ULAN_UDE} />
                                <option value={FROM_WHERE.MAGADAN} />
                                <option value={FROM_WHERE.VLADIVOSTOK} />
                                <option value={FROM_WHERE.CHITA} />
                                <option value={FROM_WHERE.NORILSK} />
                                <option value={FROM_WHERE.KHABAROVSK} />
                                <option value={FROM_WHERE.MIRNYY} />
                                <option value={FROM_WHERE.PETROPAVLOVSK_KAMCHATSKY} />
                                <option value={FROM_WHERE.YUZHNO_SAKHALINSK} />
                                <option value={FROM_WHERE.ROSTOV_NA_DONU} />
                                <option value={FROM_WHERE.NIZHNEVARTOVSK} />
                                <option value={FROM_WHERE.NOYABRSK} />
                                <option value={FROM_WHERE.VORONEZH} />
                            </datalist>
                            <label class="position-label">Авиакомпания</label>
                            <input
                                name="airLine"
                                list="airLine"
                                value={props.getFieldValue("airLine")}
                                onChange={(e) => { props.setFieldValue("airLine", e.target.value) }}
                            />
                            <datalist id="airLine">
                                <option value={AIR_LINES.SIBIRE} />
                                <option value={AIR_LINES.AEROFLOT} />
                                <option value={AIR_LINES.URAL_AIRLINES} />
                                <option value={AIR_LINES.YAKUTIA} />
                                <option value={AIR_LINES.KRAS_AVIA} />
                                <option value={AIR_LINES.UTAIR} />
                                <option value={AIR_LINES.ALROSA} />
                                <option value={AIR_LINES.REDWINGS} />
                                <option value={AIR_LINES.NORD_AVIA} />
                                <option value={AIR_LINES.AZIMUT} />
                            </datalist>
                    </fieldset>
                    <Button onClick={() => { dispatch(addFlightActionThunk(props.values)) }} variant="contained" endIcon={<SendIcon />}></Button>
                </Box>
            )
        }
        }
        />
    )
}