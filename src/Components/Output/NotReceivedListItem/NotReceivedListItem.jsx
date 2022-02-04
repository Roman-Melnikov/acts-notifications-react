import "./style.css";

export const NotReceivedListItem = ({ dataThing, index, notReceivedListLength }) => {
    return (
        <span class="content-main-not-received-list-span-item">
            {dataThing.typeThing} № {dataThing.numberThing} вес {dataThing.actualWeight} кг,
            адресом {dataThing.whereAddress} из {dataThing.fromAddress}
            {notReceivedListLength - 1 !== index && <span>;</span>}
            {notReceivedListLength - 1 === index && <span>.</span>}
        </span>
    )
}