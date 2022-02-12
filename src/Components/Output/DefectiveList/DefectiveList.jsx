import { DefectiveListItem } from "../DefectiveListItem/DefectiveListItem";
import "./style.css";

export const DefectiveList = ({ defectiveList }) => {
    console.log(defectiveList);

    return (
        <>
            {/* {defectiveList?.length === 1 &&
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
                </div>} */}
            {defectiveList?.length >= 1 &&
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
}