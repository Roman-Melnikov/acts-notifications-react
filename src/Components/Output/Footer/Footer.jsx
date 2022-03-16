import "./style.css";

export const Footer = ({ typeAct, currentAct }) => {
    return (
        <>
            {(currentAct && typeAct === "type52") &&
                <footer class="footer">
                    <p class="footer-txt"></p>
                    <div class="footer-family">
                        <div class="footer-family-wrp">
                            <div class="footer-family-item">
                                <p class="footer-family-item-position">{currentAct.surnamePosition?.firstPosition}</p>
                                <span class="footer-family-item-name">{currentAct.surnamePosition?.firstFamily}</span>
                            </div>
                            <div class="footer-family-item">
                                <p class="footer-family-item-position">{currentAct.surnamePosition?.thirdPosition}</p>
                                <span class="footer-family-item-name">{currentAct.surnamePosition?.thirdFamily}</span>
                            </div>
                        </div>
                        <div class="footer-family-wrp">
                            <div class="footer-family-item">
                                <p class="footer-family-item-position-operator footer-family-item-position-margin">
                                    {currentAct.surnamePosition?.secondPosition}</p>
                                <span class="footer-family-item-name">{currentAct.surnamePosition?.secondFamily}</span>
                            </div>
                            <div class="footer-family-item">
                                <p class="footer-family-item-position">
                                    {currentAct.surnamePosition?.fourthPosition}</p>
                                <span class="footer-family-item-name">{currentAct.surnamePosition?.fourthFamily}</span>
                            </div>
                        </div>
                    </div>
                </footer>
            }
            {(currentAct && typeAct === "tp51-d") &&
                <footer class="footer-type-51-defective">
                    <p>Постановили {currentAct.values?.data.typeThing === "РПО" ? "РПО" : `емкость ${currentAct.values?.data.typeThing} `}
                        дополнительно оклеить скотчем с логотипом УФПС Новосибирской области «Почта России» ,  составить акт  в  4-х экземплярах:</p>
                    <p>1-экземпляр отправить с емкостью до места назначения .</p>
                    <p>2-экземпляр сдать в КСУ.</p>
                    <p>3-экземпляр приобщить к документам.</p>
                    <p>4-экземпляр в службу почтовой безопасности.</p>
                    <div class="footer-type-51-defective-first">
                        <p class="footer-type-51-defective-first-position">{currentAct.surnamePosition?.firstPosition}</p>
                        <span class="footer-type-51-defective-first-family">{currentAct.surnamePosition?.firstFamily}</span>
                    </div>
                    <div class="footer-type-51-defective-second">
                        <p class="footer-type-51-defective-second-position">{currentAct.surnamePosition?.secondPosition}</p>
                        <span class="footer-type-51-defective-second-family">{currentAct.surnamePosition?.secondFamily}</span>
                    </div>
                </footer>
            }
        </>
    )
}