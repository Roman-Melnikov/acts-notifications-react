import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { DialogActions } from "@mui/material";
import { useCallback, useEffect, useState } from "react"

export const AddMonitoringDispatchListItemModal = (props) => {
    const [open, setOpen] = useState(false);
    const [newMonitoringDispatchListItemName, setNewMonitoringDispatchListItemName] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleOpen = () => setOpen(!open);

    const handleClose = useCallback(() => {
        setNewMonitoringDispatchListItemName("");
        setOpen(false);
    }, []);

    const transitNewChatName = () => {
        props.addMonitoringDispatchListItem(newMonitoringDispatchListItemName);
        setNewMonitoringDispatchListItemName("");
        setOpen(false);
    };

    const handleChange = (e) => setNewMonitoringDispatchListItemName(e.target.value);

    useEffect(() => {
        setDisabled(!newMonitoringDispatchListItemName);
    }, [newMonitoringDispatchListItemName])

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpen} >
                Add
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Please enter the  monitoringDispatchListItem name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name:"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newMonitoringDispatchListItemName}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={transitNewChatName} disabled={disabled}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}