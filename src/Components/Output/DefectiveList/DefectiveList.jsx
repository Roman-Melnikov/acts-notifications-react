import React from "react";
import { DefectiveListItem } from "../DefectiveListItem/DefectiveListItem";
import "./style.css";

export const DefectiveList = React.memo(({ defectiveList, typeAct, fromGA }) => {

    return (
        <>
            {((fromGA && typeAct === "tp51-d") && defectiveList?.length === 1) &&
                <span class="content-main-defective-list-from-Ga" >
                    {defectiveList[0]?.values.data.typeThing !== "РПО" &&
                        <span>поступила дефектная емкость </span>}
                    {defectiveList[0]?.values.data.typeThing === "РПО" &&
                        <span>поступило дефектное </span>}
                    {defectiveList?.map((defectiveListItem, index) => {
                        return (
                            <>
                                <DefectiveListItem
                                    key={defectiveListItem.id}
                                    defectiveListItem={defectiveListItem}
                                    index={index}
                                    defectiveListLength={defectiveList?.length} />
                            </>)
                    })}
                </span>}
            {((!fromGA && typeAct === "tp51-d") && defectiveList?.length === 1) &&
                <div class="content-main-defective-list" >
                    {defectiveList[0]?.values.data.typeThing !== "РПО" &&
                        <span class="content-main-defective-list-indent" >Поступила дефектная емкость </span>}
                    {defectiveList[0]?.values.data.typeThing === "РПО" &&
                        <span class="content-main-defective-list-indent" >Поступило дефектное </span>}
                    {defectiveList?.map((defectiveListItem, index) => {
                        return (
                            <>
                                <DefectiveListItem
                                    key={defectiveListItem.id}
                                    defectiveListItem={defectiveListItem}
                                    index={index}
                                    defectiveListLength={defectiveList?.length} />
                            </>)
                    })}
                </div>}
            {(typeAct === "type52" && defectiveList?.length >= 1) &&
                <div class="content-main-defective-list" >
                    <span class="content-main-defective-list-indent">При </span>
                    <span>
                        поименной проверке следующие емкости и РПО оказались дефектными:
                    </span>
                    {defectiveList?.map((defectiveListItem, index) => {
                        return (
                            <p class="content-main-defective-list-p-item">
                                <span class="content-main-defective-list-p-item-span-indent">- </span>
                                <DefectiveListItem
                                    key={defectiveListItem.id}
                                    defectiveListItem={defectiveListItem}
                                    index={index}
                                    defectiveListLength={defectiveList?.length} />
                            </p>)
                    })}
                </div>}
        </>
    )
})