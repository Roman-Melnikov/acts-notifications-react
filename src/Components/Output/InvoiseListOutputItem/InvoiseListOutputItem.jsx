import "./style.css";

export const InvoiseListOutputItem = ({ invoiseListOutputItem, invoiseListOutputLength, index }) => {
    return (
        <p class="content-header-indent-some">
            <span class="content-header-span-indent">- </span>№{invoiseListOutputItem.number} на {invoiseListOutputItem.thingAmount} вещей вес {invoiseListOutputItem.weight}кг
            от {invoiseListOutputItem.date}г. {invoiseListOutputItem.time} адресом {invoiseListOutputItem.ourAddress} из {invoiseListOutputItem.citiAddress}
            {invoiseListOutputLength - 1 !== index && <span>;</span>}
            {invoiseListOutputLength - 1 === index && <span>.</span>}
        </p>
    )
}