import React from "react";
import './style.css';

export const Header = React.memo(({ typeAct }) => {
    return (
        <>
            {(typeAct === "type52") &&
                <header class="header">
                    <div class="header-wrp">
                        <p class="header-left">
                            <span class="header-left-txt-uppercase">утверждаю</span>
                            <span class="header-left-txt">генеральный директор</span>
                        </p>
                        <p class="header-right">
                            <span class="header-right-txt-uppercase">согласовано</span>
                            <span class="header-right-txt">Заместитель начальника центра по производству</span>
                            <span class="header-right-leader">Казаков Д.А.</span>
                        </p>
                    </div>
                    <div class="header-date">
                        <div class="header-date-wrp-left">
                            <span>&laquo;</span>
                            <span class="header-date-number"></span>
                            <span>&raquo;</span>
                            <span class="header-date-mounth"></span>
                            <span class="header-date-year">20   </span>
                            <span>г&#46;</span>
                        </div>
                        <div class="header-date-wrp-right">
                            <span>&laquo;</span>
                            <span class="header-date-number"></span>
                            <span>&raquo;</span>
                            <span class="header-date-mounth"></span>
                            <span class="header-date-year">20   </span>
                            <span>г&#46;</span>
                        </div>
                    </div>
                </header>}
            {(typeAct === "tp51-d") &&
                <header class="header">
                    <span class="header-type-51-d">ф.51</span>
                </header>}
        </>
    )
})