import "./style.css";

export const Reference = ({ dataForReference }) => {
    const {
        forTmsTotalWeight,
        forTmsEmsWeight,
        forTmsThingAmount,
        forMonitoringTotalgWeight,
        forMonitoringThingAmount,
        forMonitorihgAdditionalInformationIfFromGa,
    } = dataForReference;

    return (
        <section className="reference not-print">
            <table>
                <tr>
                    <th>Данные для TMS:</th>
                </tr>
                <tr>
                    <td>Общий вес:</td>
                    <td>{forTmsTotalWeight}</td>
                </tr>
                <tr>
                    <td>Вес EMS:</td>
                    <td>{forTmsEmsWeight}</td>
                </tr>
                <tr>
                    <td>Всего вещей:</td>
                    <td>{forTmsThingAmount}</td>
                </tr>
                <tr>
                    <th>Данные для мониторинга:</th>
                </tr>
                <tr>
                    <td>Общий вес:</td>
                    <td>{forMonitoringTotalgWeight}</td>
                </tr>
                <tr>
                    <td>Всего вещей:</td>
                    <td>{forMonitoringThingAmount}</td>
                </tr>
                {forMonitorihgAdditionalInformationIfFromGa && <> <tr>
                    <td>EMS:</td>
                    <td>{forMonitorihgAdditionalInformationIfFromGa.emsAmount}</td>
                </tr>
                    <tr>
                        <td>1 класс:</td>
                        <td>{forMonitorihgAdditionalInformationIfFromGa.firstClassAmount}</td>
                    </tr>
                    <tr>
                        <td>Страховые:</td>
                        <td>{forMonitorihgAdditionalInformationIfFromGa.insuranceAmount}</td>
                    </tr>
                    <tr>
                        <td>Международные:</td>
                        <td>{forMonitorihgAdditionalInformationIfFromGa.internationalAmount}</td>
                    </tr>
                    <tr>
                        <td>Корреспонденция:</td>
                        <td>{forMonitorihgAdditionalInformationIfFromGa.correspondenceAmount}</td>
                    </tr>
                    <tr>
                        <td>Посылки:</td>
                        <td>{forMonitorihgAdditionalInformationIfFromGa.parcelAmount}</td>
                    </tr></>}
            </table>
        </section>
    )
}