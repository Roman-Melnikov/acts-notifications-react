import {Button} from "@material-ui/core";
import {useRef} from "react";
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx/xlsx.mjs';
import "./style.css";

export const Reference = ({dataForReference}) => {
    const {
        forTmsTotalWeight,
        forTmsEmsWeight,
        forTmsThingAmount,
        forMonitoringTotalgWeight,
        forMonitoringThingAmount,
        forMonitoringEmsAmount,
        forMonitoringEmsWeight,
        forMonitoringFirstAmount,
        forMonitoringFirstWeight,
        forMonitoringInsuranceAmount,
        forMonitoringInsuranceWeight,
        forMonitoringInternationalAmount,
        forMonitoringInternationalWeight,
        forMonitoringCorrespondenceAmount,
        forMonitoringCorrespondenceWeight,
        forMonitoringParcelAmount,
        forMonitoringParcelWeight,
    } = dataForReference;
    const tableRef = useRef(null);

    return (
        <section className="reference not-print">
            <table className="reference-table-tms">
                <caption>Данные для TMS:</caption>
                <tr>
                    <td className="reference-table-tms-col">Общий вес:</td>
                    <td className="reference-table-tms-col">{forTmsTotalWeight}</td>
                </tr>
                <tr>
                    <td className="reference-table-tms-col">Вес EMS:</td>
                    <td className="reference-table-tms-col">{forTmsEmsWeight}</td>
                </tr>
                <tr>
                    <td className="reference-table-tms-col">Всего вещей:</td>
                    <td className="reference-table-tms-col">{forTmsThingAmount}</td>
                </tr>
            </table>
                <>
                    <Button className="not-print" color="secondary" variant="contained" onClick={() => {
                        const workbook = XLSX.utils.table_to_book(tableRef.current);
                        XLSX.writeFile(workbook, "received.xlsx");
                    }}>В Excel</Button>
                    <table ref={tableRef}
                           className="reference-table-monitoring">
                        <caption>Данные для мониторинга:</caption>
                        <tr>
                            <th className="reference-table-monitoring-col-things">EMS шт</th>
                            <th className="reference-table-monitoring-col-weight">EMS кг</th>
                            <th className="reference-table-monitoring-col-things">1 кл шт</th>
                            <th className="reference-table-monitoring-col-weight">1 кл кг</th>
                            <th className="reference-table-monitoring-col-things">С/м шт</th>
                            <th className="reference-table-monitoring-col-weight">С/м кг</th>
                            <th className="reference-table-monitoring-col-things">Мжд шт</th>
                            <th className="reference-table-monitoring-col-weight">Мжд кг</th>
                            <th className="reference-table-monitoring-col-things">Корр шт</th>
                            <th className="reference-table-monitoring-col-weight">Корр кг</th>
                            <th className="reference-table-monitoring-col-things">Газ шт</th>
                            <th className="reference-table-monitoring-col-weight">Газ кг</th>
                            <th className="reference-table-monitoring-col-things">Пос шт</th>
                            <th className="reference-table-monitoring-col-weight">Пос кг</th>
                            <th className="reference-table-monitoring-col-things">Всего шт</th>
                            <th className="reference-table-monitoring-col-weight">Всего кг</th>
                        </tr>
                        <tr>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringEmsAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringEmsWeight}
                            </td>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringFirstAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringFirstWeight}
                            </td>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringInsuranceAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringInsuranceWeight}
                            </td>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringInternationalAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringInternationalWeight}
                            </td>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringCorrespondenceAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringCorrespondenceWeight}
                            </td>
                            <td className="reference-table-monitoring-col-things"></td>
                            <td className="reference-table-monitoring-col-weight"></td>
                            <td className="reference-table-monitoring-col-things">
                                {forMonitoringParcelAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringParcelWeight}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringThingAmount}
                            </td>
                            <td className="reference-table-monitoring-col-weight">
                                {forMonitoringTotalgWeight}
                            </td>
                        </tr>
                    </table>
                </>
        </section>
    )
}