import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.css";



export const ReferenceMonitoringDispatch = ({ dataForReferenceDispatch }) => {
    return (
        <>
            {dataForReferenceDispatch.numbers !== undefined &&
                <TableContainer className="reference-dispatch-table-container" component={Paper}>
                    <Table className="reference-dispatch-table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Номера накладных</TableCell>
                                <TableCell align="right">Общий вес</TableCell>
                                <TableCell align="right">Вес EMS</TableCell>
                                <TableCell align="right">Всего вещей</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {dataForReferenceDispatch.numbers}
                                </TableCell>
                                <TableCell align="right">{dataForReferenceDispatch.totalWeight.toFixed(3)}</TableCell>
                                <TableCell align="right">{dataForReferenceDispatch.emsWeight.toFixed(3)}</TableCell>
                                <TableCell align="right">{dataForReferenceDispatch.totalAmount}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    );
}
