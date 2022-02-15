import { InvoiseListOutput } from "../InvoiseListOutput";
import "./style.css";

export const Where = ({ invoiseList, flight, timeArrival, fromGA, dateArrival }) => {
    const hours = timeArrival.substring(0, 2);
    const minutes = timeArrival.substring(3, 5);
    const { day, mounthNumber, year } = dateArrival;
    return (
        <div class="content-header">
            {invoiseList.length === 1 && <div class="content-header-item"><span class="content-header-indent">С</span> рейса {flight?.number ?? " "} из {flight?.city ?? " "} в {hours}ч. {minutes}мин.
                поступила почта по общей накладной №{invoiseList[0].number} на {invoiseList[0].thingAmount} вещей вес {invoiseList[0].totalWeight}кг
                от {invoiseList[0].date}г. {invoiseList[0].time && <span>{invoiseList[0].time} </span>}
                адресом {invoiseList[0].ourAddress} из {invoiseList[0].citiAddress}.
            </div>
            }
            {invoiseList.length > 1 && <div>
                <p class="content-header-item"><span class="content-header-indent">С</span> рейса {flight?.number ?? " "} из {flight?.city ?? " "} в {hours}ч. {minutes}мин.
                    поступила почта по общим накладным:</p>
                <InvoiseListOutput invoiseList={invoiseList} />
            </div>
            }
            {
                fromGA && <div class="content-header-item"><span class="content-header-indent">От</span> органов ГА {`${day}.${mounthNumber}.${year}г.`} в {hours}ч. {minutes}мин.  без сопроводительных документов поступили следующие емкости и РПО:
                </div>
            }
        </div>
    )
}