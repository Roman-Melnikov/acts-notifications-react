import "./style.css";

/**
 * дефектная вещь - это вещь с доступом, разницей в весе и планирую добавить с течью
 * @param {*} param0 
 * @returns 
 */
export const DefectiveListItem = ({ defectiveListItem, index, defectiveListLength }) => {
    return (
        <span class="content-defective-list-span-item">
            {defectiveListItem.values.data.typeThing} №{defectiveListItem.values.data.numberThing} адресом {defectiveListItem.values.data.whereAddress} из {defectiveListItem.values.data.fromAddress}. {defectiveListItem.values.defective &&  <span>Имеется доступ к вложениям.</span>} {defectiveListItem.values.differenceWeight &&  <span>Есть расхождение в весе.</span>} Подавательский вес {defectiveListItem.values.giviWeight}кг, фактический {defectiveListItem.values.data.actualWeight}кг. {defectiveListItem.values.description}
            {defectiveListLength - 1 !== index && <span>;</span>}
            {defectiveListLength - 1 === index && <span>.</span>}
        </span>
    )
}