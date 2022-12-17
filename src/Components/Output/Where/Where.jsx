import {InvoiseListOutput} from "../InvoiseListOutput";
import "./style.css";

export const Where = ({
                          invoiseList,
                          flight,
                          timeArrival,
                          timeDelivery,
                          fromGA,
                          withoutDocuments,
                          refund,
                          dateArrival,
                          dateDelivery,
                          transportationScheduleOfRefund,
                          typeAct
                      }) => {
    const hoursArrival = timeArrival.substring(0, 2);
    const minutesArrival = timeArrival.substring(3, 5);
    const hoursDelivery = timeDelivery.substring(0, 2);
    const minutesDelivery = timeDelivery.substring(3, 5);
    const {day, mounthNumber, year} = dateArrival;

    return (
        <span class="content-header">
            {invoiseList.length === 1 && !refund && <div class="content-header-item"><span
                class="content-header-indent">С</span> рейса {flight?.number ?? " "} из {flight?.city ?? " "} в {hoursArrival}ч. {minutesArrival}мин.
                поступила почта по общей накладной №{invoiseList[0].number} на {invoiseList[0].thingAmount} вещей
                вес {invoiseList[0].totalWeight}кг
                от {invoiseList[0].date}г. {invoiseList[0].time && <span>{invoiseList[0].time} </span>}
                адресом {invoiseList[0].ourAddress} из {invoiseList[0].citiAddress}.
            </div>
            }
            {invoiseList.length > 1 && !refund && <div>
                <p class="content-header-item"><span
                    class="content-header-indent">С</span> рейса {flight?.number ?? " "} из {flight?.city ?? " "} в {hoursArrival}ч. {minutesArrival}мин.
                    поступила почта по общим накладным:</p>
                <InvoiseListOutput invoiseList={invoiseList}/>
            </div>
            }
            {
                (fromGA && typeAct === "type52") &&
                <div class="content-header-item"><span class="content-header-indent">От</span> органов
                    ГА {`${day}.${mounthNumber}.${year}г.`} в {hoursArrival}ч. {minutesArrival}мин. без сопроводительных
                    документов
                    поступили следующие емкости и РПО:
                </div>
            }
            {
                (withoutDocuments && typeAct === "type52") &&
                <div class="content-header-item"><span
                    class="content-header-indent">С</span> рейса {flight?.number ?? " "} из {flight?.city ?? " "} в {hoursArrival}ч. {minutesArrival}мин.
                    без сопроводительных документов поступили следующие емкости и РПО:
                </div>
            }
            {
                (refund && invoiseList.length === 1 && typeAct === "type52") &&
                <div class="content-header-item"><span
                    class="content-header-indent">Согласно</span> графику перевозки почты по обьёмам
                    на <span
                        class="content-header-mounth">{transportationScheduleOfRefund?.mounthString} </span>{`${transportationScheduleOfRefund?.year}г. `}
                    была приготовлена и сдана
                    почта {`${dateDelivery?.day}.${dateDelivery?.mounthNumber}.${dateDelivery?.year}г.`} в {hoursDelivery}ч. {minutesDelivery}мин.
                    на рейс {flight?.number ?? " "} адресом {flight?.city ?? " "} по общей накладной
                    №{invoiseList[0].number} на {invoiseList[0].thingAmount} вещей
                    вес {invoiseList[0].totalWeight}кг
                    <p class="content-header-indent">Органами ГА в {hoursArrival}ч. {minutesArrival}мин. {`${day}.${mounthNumber}.${year}г. `}
                        почта была возвращена.</p>
                </div>
            }
            {
                (refund && invoiseList.length > 1 && typeAct === "type52") &&
                <div class="content-header-item"><p><span
                    class="content-header-indent">Согласно</span> графику перевозки почты по обьёмам
                    на <span
                        class="content-header-mounth">{transportationScheduleOfRefund?.mounthString} </span>{`${transportationScheduleOfRefund?.year}г. `}
                    была приготовлена и сдана
                    почта {`${dateDelivery?.day}.${dateDelivery?.mounthNumber}.${dateDelivery?.year}г.`} в {hoursDelivery}ч. {minutesDelivery}мин.
                    на рейс {flight?.number ?? " "} адресом {flight?.city ?? " "} по общим накладным:</p>
                    <InvoiseListOutput invoiseList={invoiseList}/>
                    <p class="content-header-indent">Органами ГА в {hoursArrival}ч. {minutesArrival}мин. {`${day}.${mounthNumber}.${year}г. `}
                        почта была возвращена.</p>
                </div>
            }
            {
                (fromGA && typeAct === "tp51-d") && <span class="content-header-item"><span
                    class="content-header-indent">От</span> органов ГА {`${day}.${mounthNumber}.${year}г.`} в {hoursArrival}ч. {minutesArrival}мин.  без сопроводительных документов
                </span>
            }
        </span>
    )
}