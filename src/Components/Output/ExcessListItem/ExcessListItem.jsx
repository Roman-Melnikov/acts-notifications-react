import "./style.css";

export const ExcessListItem = ({ dataThing, index, excessListLength }) => {
    return (
        <span class="content-main-excess-list-span-item">
            {dataThing.typeThing} № {dataThing.numberThing} вес {dataThing.actualWeight} кг,
            адресом {dataThing.whereAddress} из {dataThing.fromAddress}
            {excessListLength - 1 !== index && <span>;</span>}
            {excessListLength - 1 === index && <span>.</span>}
        </span>
    )
}