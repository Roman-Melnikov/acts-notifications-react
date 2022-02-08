import { Box, MenuItem, TextField } from "@material-ui/core";

export const SelectionAct52Input = ({ actList_52, valueSelectionAct_52_Input, changeValueSelectionAct_52_Input }) => {

    return (
        <Box>
            <TextField select value={valueSelectionAct_52_Input} onChange={changeValueSelectionAct_52_Input} helperText="Please select the act of interest">
                {actList_52.filter((_, index) => (actList_52.length - index) < 30).sort((a, b) => b.numberAct - a.numberAct).map((item) => {
                    return (
                        <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                    )
                })}
            </TextField>
        </Box>
    )
}