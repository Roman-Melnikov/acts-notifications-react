import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GeneralActListItem } from "../../Components/GeneralActListItem/GeneralActListItem";
import { actList_51_defectiveSelector } from "../../Store/ActList_51_defective/selectors";
import { actList_52_Selector } from "../../Store/ActList_52/selectors";

export const GeneralActList = () => {
    const { actList_52 } = useSelector(actList_52_Selector);
    const { actList_51_defective } = useSelector(actList_51_defectiveSelector);
    const [generalActList, setGeneralActList] = useState([]);

    useEffect(() => {
        setGeneralActList(() => {
            const newGeneralActList = actList_52.map((itemActList_52) => {
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
            return newGeneralActList;
        })
    }, [actList_52, actList_51_defective]);

    return (
        <Box>
            {generalActList.map((item) => {
                return (
                    <GeneralActListItem generalListItem={item} />
                )
            })}
        </Box>
        
    )
}