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
            <table className="reference-table-tms">
                <caption>Данные для TMS:</caption>
                <tr>
                    <td className="reference-table-tms-col" >Общий вес:</td>
                    <td className="reference-table-tms-col" >{forTmsTotalWeight}</td>
                </tr>
                <tr>
                    <td className="reference-table-tms-col" >Вес EMS:</td>
                    <td className="reference-table-tms-col" >{forTmsEmsWeight}</td>
                </tr>
                <tr>
                    <td className="reference-table-tms-col" >Всего вещей:</td>
                    <td className="reference-table-tms-col" >{forTmsThingAmount}</td>
                </tr>
            </table>
            {!forMonitorihgAdditionalInformationIfFromGa && <table className="reference-table-monitoring">
                <caption>Данные для мониторинга:</caption>
                <tr>
                    <td className="reference-table-monitoring-col">Общий вес:</td>
                    <td className="reference-table-monitoring-col">{forMonitoringTotalgWeight}</td>
                </tr>
                <tr>
                    <td className="reference-table-monitoring-col">Всего вещей:</td>
                    <td className="reference-table-monitoring-col">{forMonitoringThingAmount}</td>
                </tr>
            </table>}
            {forMonitorihgAdditionalInformationIfFromGa && <table
                className="reference-table-monitoring-from-ga" >
                <caption>Данные для мониторинга: </caption>
                <tr>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >EMS</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >1 класс</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >С/м</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >Мжд</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >Корр.</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >Газеты</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                    <th className="reference-table-monitoring-from-ga-col" >
                        <span className="reference-table-monitoring-from-ga-type-thing" >Посылки</span>
                        <th className="reference-table-monitoring-from-ga-col-things" >шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >кг</th>
                    </th>
                </tr>
                <tr>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.emsAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.emsWeight}
                        </td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.firstClassAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.firstClassWeight}
                        </td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.insuranceAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.insuranceWeight}
                        </td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.internationalAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.internationalWeight}
                        </td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.correspondenceAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.correspondenceWeight}
                        </td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" ></td>
                        <td className="reference-table-monitoring-from-ga-col-weight" ></td>
                    </td>
                    <td className="reference-table-monitoring-from-ga-col" >
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.parcelAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.parcelWeight}
                        </td>
                    </td>
                </tr>
            </table>}
        </section>
    )
}