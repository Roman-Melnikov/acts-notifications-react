import { NotReceivedList } from "../NotReceivedList";
import { HeadingMain } from "../HeadingMain/HeadingMain";
import { Where } from "../Where/Where";
import { Why } from "../Why/Why";
import { ExcessList } from "../ExcessList/ExcessList";
import { useEffect, useState } from "react";
import { DefectiveList } from "../DefectiveList/DefectiveList";
import { FooterMain } from "../FooterMain/FooterMain";
import "./style.css";

export const Main = ({ currentAct, typeAct, dateArrival }) => {
    const [defectiveList, setDefectiveList] = useState([]);
    const [amountThingReceived, setAmountThingReceived] = useState(null);
    const [deceleration, setDeceleration] = useState(null);

    /**
     * объединение массивов "разница в весе" и "с доступом" для формы 52
     */
    useEffect(() => {
        setDefectiveList(() => {
            if (currentAct?.reasons) {
                return [...currentAct?.reasons?.differenceWeight, ...currentAct?.reasons?.defective];
            }
        })
    }, [currentAct?.id]);

    /**
     * объект "с доступом" помещается в массив для корректной работы компонентов
     * для формы 51-д
     */
    useEffect(() => {
        setDefectiveList(() => {
            if (currentAct?.idAct) {
                return [currentAct];
            }
        })
    }, [currentAct?.idAct]);

    /**
     * количество поступивших вещей для расписки
     */
    useEffect(() => {
        setAmountThingReceived(() => {
            const amountThingByInvoises = currentAct?.invoiseList?.reduce((accum, currentValue) => {
                return accum + +currentValue.thingAmount;
            }, 0);
            return amountThingByInvoises + +currentAct?.reasons?.excess?.length - +currentAct?.reasons?.notReceived?.length;
        })
    }, [currentAct?.reasons?.excess, currentAct?.reasons?.notReceived]);

    /**
     * если у текущего акта, в любой из накладных есть время выпуска данной накладной, то "замедление" - TRUE
     */
    useEffect(() => {
        setDeceleration(() => {
            let bool = false;
            currentAct?.invoiseList?.forEach((item) => {
                if (item.time) {
                    bool = true;
                }
            });
            return bool;
        })
    }, [currentAct?.invoiseList]);

    return (
        <main>
            <HeadingMain dateArrival={dateArrival} numberAct={currentAct?.numberAct ?? " "}
                surname={currentAct?.surnamePosition?.fourthFamily ?? " "} typeAct={typeAct} />
            <section class="content">
                {((typeAct === "type52") && !currentAct?.fromGA) && <Why dateArrival={dateArrival} airLine={currentAct?.flight?.airLine}
                    contract={currentAct?.flight?.contract} />}
                <Where invoiseList={currentAct?.invoiseList ?? []} flight={currentAct?.flight}
                    timeArrival={currentAct?.timeArrival ?? " "} fromGA={currentAct?.fromGA}
                    dateArrival={dateArrival} typeAct={typeAct} />
                <NotReceivedList notReceivedList={currentAct?.reasons?.notReceived ?? []} />
                <ExcessList excessList={currentAct?.reasons?.excess ?? []} fromGA={currentAct?.fromGA} />
                <DefectiveList defectiveList={defectiveList} typeAct={typeAct}
                    fromGA={currentAct?.fromGA} />
                {((currentAct?.reasons?.excess?.length !== 0 || currentAct?.reasons?.notReceived?.length !== 0) &&
                    (currentAct?.reasons/*иначе,когда только замедление, расписка выходит, т.к. undefined !==0 */)) &&
                    <p class="content-main-receipt">Расписка дана за {amountThingReceived} вещей.</p>}
                {currentAct?.reasons &&
                    <p class="content-main-copy">Копия акта ф.51 прилагается.</p>}
                {(deceleration && typeAct === "type52") &&
                    <p class="content-main-deceleration">Замедление почты составило более суток.</p>}
                {typeAct === "type52" && <FooterMain />}
            </section>
        </main>
    )
}