import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { SimpleForm } from "../../Components/SimpleForm";
import { addFlightActionThunk } from "../../Store/ParametrsFlights/actions";
import { AIR_LINES, WHERE_FROM_WHERE } from "../../Constants/constants";

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
                                <option value={WHERE_FROM_WHERE.DOMODEDOVO.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.NEW_URENGOY.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.SCHEREMETEVO.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.YAKUTSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.EKATERINBURG.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.TYUMEN.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.OMSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.SAINT_PETERSBURG.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.KRASNOYARSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.PERMIAN.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.CHELYABINSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.NERYUNGRI.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.KRASNODAR.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.KYZYL.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.IRKUTSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.BLAGOVESHCHENSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.ABAKAN.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.SURGUT.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.ULAN_UDE.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.MAGADAN.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.VLADIVOSTOK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.CHITA.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.NORILSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.KHABAROVSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.MIRNYY.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.PETROPAVLOVSK_KAMCHATSKY.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.YUZHNO_SAKHALINSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.ROSTOV_NA_DONU.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.NIZHNEVARTOVSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.NOYABRSK.FROM_WHERE} />
                                <option value={WHERE_FROM_WHERE.VORONEZH.FROM_WHERE} />
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