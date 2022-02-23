import { Button } from "@material-ui/core";
import { useRef } from "react";
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx/xlsx.mjs';
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
    const tableRef = useRef(null);

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
            {forMonitorihgAdditionalInformationIfFromGa && <>
                <Button className="not-print" color="secondary" variant="contained" onClick={()=> {
                    const workbook = XLSX.utils.table_to_book(tableRef.current);
                    XLSX.writeFile(workbook, "received.xlsx");
                }} >В Excel</Button>
            <table ref={tableRef}
                className="reference-table-monitoring-from-ga" >
                <caption>Данные для мониторинга: </caption>
                <tr>
                        <th className="reference-table-monitoring-from-ga-col-things" >EMS шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >EMS кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >1 кл шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >1 кл кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >С/м шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >С/м кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >Мжд шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >Мжд кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >Корр шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >Корр кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >Газ шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >Газ кг</th>
                        <th className="reference-table-monitoring-from-ga-col-things" >Пос шт</th>
                        <th className="reference-table-monitoring-from-ga-col-weight" >Пос кг</th>
                </tr>
                <tr>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.emsAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.emsWeight}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.firstClassAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.firstClassWeight}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.insuranceAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.insuranceWeight}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.internationalAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.internationalWeight}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.correspondenceAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.correspondenceWeight}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-things" ></td>
                        <td className="reference-table-monitoring-from-ga-col-weight" ></td>
                        <td className="reference-table-monitoring-from-ga-col-things" >
                            {forMonitorihgAdditionalInformationIfFromGa.parcelAmount}
                        </td>
                        <td className="reference-table-monitoring-from-ga-col-weight" >
                            {forMonitorihgAdditionalInformationIfFromGa.parcelWeight}
                        </td>
                </tr>
            </table>
            </>}
        </section>
    )
}