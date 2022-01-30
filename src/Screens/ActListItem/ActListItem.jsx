import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSurnameUndPositionForFooterActType_51_defective, getTypeThingForFooterActType_51_defective } from "./func";
import { Footer } from "../../Components/Output/Footer/Footer";
import { Header } from "../../Components/Output/Header";
import { SidebarList } from "../../Components/Output/SidebarList";
import { actList_51_defectiveSelector } from "../../Store/ActList_51_defective/selectors";
import { actList_52_Selector } from "../../Store/ActList_52/selectors";

export const ActListItem = () => {
    const [sidebarList, setSidebarList] = useState([]);
    const [typeAct, setTypeAct] = useState(null);
    const [currentAct, setCurrentAct] = useState(null);
    const { actList_52 } = useSelector(actList_52_Selector);
    const { actList_51_defective } = useSelector(actList_51_defectiveSelector);
    const { actId } = useParams();

    console.log(actList_52);

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
            }).reverse();
            return newSidebarList;
        })
    }, [actList_52, actList_51_defective]);

    useEffect(() => {
        setTypeAct(actId?.substring(0, 6));
    }, [actId]);

    /**
     * текущий акт в зависимости от url-параметра
     */
    useEffect(() => {
        setCurrentAct(() => {
            let newCurrentAct = actList_52.find((actList_52_item) => actList_52_item.id === actId);
            if (!newCurrentAct) {
                newCurrentAct = actList_51_defective.find((actList_51_defectiveItem) => actList_51_defectiveItem.idAct === actId);
            }
            return newCurrentAct;
        })
    }, [actId]);

    /**
     * если текущий акт формы 51-д, то получаем фамилии, позиции и тип вещи для Footer
     */
    useEffect(() => {
        if (typeAct === "tp51-d") {
            setCurrentAct(() => {
                let actList_51_defectiveItem = actList_51_defective.find((actList_51_defectiveItem) => actList_51_defectiveItem.idAct === actId);
                if (actList_51_defectiveItem) {
                    actList_51_defectiveItem.surnamePosition = getSurnameUndPositionForFooterActType_51_defective(actList_52, actList_51_defectiveItem);
                    actList_51_defectiveItem.typeThing = getTypeThingForFooterActType_51_defective
                    (actList_52, actList_51_defectiveItem);
                }
                return actList_51_defectiveItem;
            })
        }
    }, [typeAct]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <SidebarList sidebarList={sidebarList} />
            </Grid>
            <Grid item xs={9}>
                <Header typeAct={typeAct} />
                <Footer typeAct={typeAct} currentAct={currentAct} />
            </Grid>
        </Grid>
    )
}