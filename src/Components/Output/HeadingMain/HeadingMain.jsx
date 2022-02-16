import React from "react";
import { NUMBER_ACT_52_CONSTANT } from "../../../Constants/constants";
import "./style.css";

export const HeadingMain = React.memo(({ dateArrival, numberAct, surname, typeAct }) => {
    const { year, day, mounthString, mounthNumber } = dateArrival;
    return (
        <>
            {typeAct === "type52" &&
                <section class="heading">
                    <span class="heading-title">
                        <span class="heading-title-txt">акт</span>
                        <span class="heading-title-number">{`${NUMBER_ACT_52_CONSTANT}${numberAct}`}</span>
                    </span>
                    <span class="heading-wrp-date">
                        <span class="heading-date">{`${day} ${mounthString} ${year}г.`}</span>
                        <span class="heading-airport"></span>
                    </span>
                    <div class="heading-where-compiled">
                        <span class="heading-where-compiled-first">настоящий</span>
                        акт составлен в участке АОПП Новосибирского ЛПЦ в присутствии работника ООО &laquo;
                        Аэропорт Толмачево&raquo;,
                        водителя службы наземного и технического обслуживания ОАО &laquo;Аэропорт Толмачево&raquo;
                        <p class="heading-where-compiled-worker">{surname}</p>
                        <p class="heading-where-compiled-family-position-txt">фамилия и должность представителя</p>
                        <p class="heading-where-compiled-border"></p>
                        <p class="heading-where-compiled-company">предприятия</p>
                    </div>
                </section>
            }
            {typeAct === "tp51-d" &&
                <section class="heading">
                    <span class="heading-title">
                        <span class="heading-title-txt">акт</span>
                        <span class="heading-title-number">{numberAct}</span>
                    </span>
                    <div class="heading-where-compiled-type-51-defective">
                        <span class="heading-where-compiled-first">составлен</span>
                        в  АОПП Новосибирского ЛПЦ {`${day}.${mounthNumber}.${year}г.`}  о том , что
                    </div>
                </section>
            }
        </>
    )
})