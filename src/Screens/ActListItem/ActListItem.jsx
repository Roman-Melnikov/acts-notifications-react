import {Button, Grid} from "@material-ui/core";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
    getMounthStringByNumber,
    getDataForActType_51_defective,
    getForMonitoringtypeIdAmount,
    getForMonitoringtypeIdWeight
} from "./func";
import {Footer} from "../../Components/Output/Footer/Footer";
import {Header} from "../../Components/Output/Header";
import {Main} from "../../Components/Output/Main";
import {SidebarList} from "../../Components/Output/SidebarList";
import {actList_51_defectiveSelector} from "../../Store/ActList_51_defective/selectors";
import {actList_52_Selector} from "../../Store/ActList_52/selectors";
import {getForTmsEmsWeight} from "./func";
import {getForTmsTotalWeight} from "./func";
import {getForTmsThingAmount} from "./func";
import {getForMonitoringTotalgWeight} from "./func";
import {getForMonitoringThingAmount} from "./func";
import {Reference} from "../../Components/Output/Reference";
import {getForMonitorihgAdditionalInformationIfFromGa} from "./func";
import "./style.css";
import {OBJ_FOR_CHECK_TYPE_THING} from "../../Store/ActList_52";

export const ActListItem = () => {
    const [sidebarList, setSidebarList] = useState([]);
    const [typeAct, setTypeAct] = useState(null);
    const [currentAct, setCurrentAct] = useState(null);
    const [dateArrival, setDateArrival] = useState({
        year: " ",
        day: " ",
        mounthNumber: " ",
        mounthString: " ",
    });
    const [dateDelivery, setDateDelivery] = useState({
        year: " ",
        day: " ",
        mounthNumber: " ",
        mounthString: " ",
    });
    const [transportationScheduleOfRefund, setTransportationScheduleOfRefund] = useState({
        year: " ",
        day: " ",
        mounthNumber: " ",
        mounthString: " ",
    });
    const [dataForReference, setDataForReference] = useState({
        forTmsTotalWeight: null,
        forTmsEmsWeight: null,
        forTmsThingAmount: null,
        forMonitoringTotalgWeight: null,
        forMonitoringThingAmount: null,
    });
    const {actList_52} = useSelector(actList_52_Selector);
    const {actList_51_defective} = useSelector(actList_51_defectiveSelector);
    const {actId} = useParams();
    const [typeForSidebar, setTypeForSidebar] = useState("acts");//тип данных для sidebara

    useEffect(() => {
        setSidebarList(() => {
            const newSidebarList = actList_52.map((itemActList_52) => {
                return (
                    {
                        actList_52_itemName: itemActList_52.name,
                        actList_52_itemId: itemActList_52.id,
                        actList_51_defective: actList_51_defective.filter((itemActList_51_defective) => {
                            return itemActList_51_defective.name_52 === itemActList_52.name
                        })
                    }
                )
            });
            return newSidebarList;
        })
    }, [actList_52, actList_51_defective]);

    useEffect(() => {
        setTypeAct(actId?.substring(0, 6));
    }, [actId]);

    /**
     * текущий акт в зависимости от url-параметра, если текущий акт формы 51-д, то получаем для него данные из акта ф52
     */
    useEffect(() => {
        if (typeAct === "type52") {
            setCurrentAct(() => {
                let newCurrentAct = actList_52.find((actList_52_item) => actList_52_item.id === actId);
                return {...newCurrentAct};
            });
        }
        if (typeAct === "tp51-d") {
            setCurrentAct(() => {
                let actList_51_defectiveItem = actList_51_defective.find((actList_51_defectiveItem) => actList_51_defectiveItem.idAct === actId);
                let dataForActType_51_defective = {};
                if (actList_51_defectiveItem) {
                    dataForActType_51_defective = getDataForActType_51_defective(actList_52, actList_51_defectiveItem);
                }
                return {...actList_51_defectiveItem, ...dataForActType_51_defective};
            })
        }
    }, [actId, typeAct]);

    useEffect(() => {
        setDateArrival(() => {
            const year = currentAct?.dateArrival?.substring(0, 4) ?? " ";
            const day = currentAct?.dateArrival?.substring(8, 10) ?? " ";
            const mounthNumber = currentAct?.dateArrival?.substring(5, 7) ?? " ";
            const mounthString = getMounthStringByNumber(mounthNumber);
            return {
                year,
                day,
                mounthNumber,
                mounthString,
            }
        })
    }, [currentAct]);

    useEffect(() => {
        setDateDelivery(() => {
            const year = currentAct?.dateDelivery?.substring(0, 4) ?? " ";
            const day = currentAct?.dateDelivery?.substring(8, 10) ?? " ";
            const mounthNumber = currentAct?.dateDelivery?.substring(5, 7) ?? " ";
            const mounthString = getMounthStringByNumber(mounthNumber);
            return {
                year,
                day,
                mounthNumber,
                mounthString,
            }
        })
    }, [currentAct]);

    useEffect(() => {
        setTransportationScheduleOfRefund(() => {
            const year = currentAct?.dateArrival?.substring(0, 4) ?? " ";
            const mounthNumber = currentAct?.dateArrival?.substring(5, 7) ?? " ";
            const mounthString = getMounthStringByNumber(mounthNumber);
            return {
                year,
                mounthNumber,
                mounthString,
            }
        })
    }, [currentAct]);

    /**
     * Получение данных для справки(компонент Reference)
     */
    useEffect(() => {
        setDataForReference(() => {
            let newDataForReference = {};
            if (currentAct?.reasons) {
                newDataForReference = {
                    forTmsTotalWeight: getForTmsTotalWeight(currentAct),
                    forTmsEmsWeight: getForTmsEmsWeight(currentAct),
                    forTmsThingAmount: getForTmsThingAmount(currentAct),
                    forMonitoringTotalgWeight: getForMonitoringTotalgWeight(currentAct),
                    forMonitoringThingAmount: getForMonitoringThingAmount(currentAct),
                    forMonitoringEmsAmount: getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.ems[2], "emsQuantity"),
                    forMonitoringEmsWeight: getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.ems[2], "emsWeight"),
                    forMonitoringFirstAmount: getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.firstClass[2], "firstClassQuantity"),
                    forMonitoringFirstWeight: getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.firstClass[2], "firstClassWeight"),
                    forMonitoringInsuranceAmount:
                        getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.insurance[2], "insuranceQuantity"),
                    forMonitoringInsuranceWeight:
                        getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.insurance[2], "insuranceWeight"),
                    forMonitoringInternationalAmount: getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.international[2], "internationalQuantity"),
                    forMonitoringInternationalWeight: getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.international[2], "internationalWeight"),
                    forMonitoringCorrespondenceAmount:
                        +getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.customized[2], "customizedQuantity")
                        +
                        +getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.simple[2], "simpleQuantity") || "",
                    forMonitoringCorrespondenceWeight:
                        +(+getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.customized[2], "customizedWeight")
                            +
                            +getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.simple[2], "simpleWeight")).toFixed(3) || "",
                    forMonitoringParcelAmount:
                        +getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.parcel[2], "parcelQuantity")
                        +
                        +getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.departureEms[2], undefined)
                        +
                        +getForMonitoringtypeIdAmount(currentAct, OBJ_FOR_CHECK_TYPE_THING.ecom[2], undefined) || "",
                    forMonitoringParcelWeight:
                        +(+getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.parcel[2], "parcelWeight")
                            +
                            +getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.departureEms[2], undefined)
                            +
                            +getForMonitoringtypeIdWeight(currentAct, OBJ_FOR_CHECK_TYPE_THING.ecom[2], undefined)
                        ).toFixed(3) || "",
                }
            }
            return newDataForReference;
        })
    }, [currentAct]);

    return (
        /**
         * не смог сделать увеличение ширины второго Grid item при выводе на печать, для акта ф51-д.
         *  Хотя,для акта ф52 ширина менялась.
         *  Поэтому переделал на divы.
         */
        // <Grid container >
        //     <Grid item xs={0} className="not-print">
        //         <SidebarList sidebarList={sidebarList} />
        //     </Grid>
        //     <Grid item xs={9} className="act-list-item-right">
        //         <Header typeAct={typeAct} />
        //         <Main typeAct={typeAct} currentAct={currentAct} dateArrival={dateArrival} />
        //         <Footer typeAct={typeAct} currentAct={currentAct} />
        //     </Grid>
        // </Grid>
        <div class="act-list-item">
            <div class="not-print act-list-item-left">
                <SidebarList sidebarList={sidebarList} type={typeForSidebar}/>
            </div>
            {actId && <div class="act-list-item-right" contentEditable>
                <Button className="not-print print-btn" color="secondary" variant="contained"
                        onClick={() => window.print()}>Печать</Button>
                {typeAct === "type52" && <Reference dataForReference={dataForReference}/>}
                <Header typeAct={typeAct}/>
                <Main
                    typeAct={typeAct}
                    currentAct={currentAct}
                    dateArrival={dateArrival}
                    dateDelivery={dateDelivery}
                    transportationScheduleOfRefund={transportationScheduleOfRefund}/>
                <Footer typeAct={typeAct} currentAct={currentAct}/>
            </div>}
        </div>
    )
}