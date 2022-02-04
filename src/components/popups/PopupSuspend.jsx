
import React from 'react';
import Drawer from '../drawer/MemDrawer'



<PopupState variant = "popover" popupId= "demo-popup-menu">
    
    {(popupState) => (
        <React.Fragment>
            <Button variant = "contained" {...bindTrigger(popupState)}>
                Suspend
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.Close}>60 Days</MenuItem>
                <MenuItem onClick={popupState.Close}>90 Days</MenuItem>
                <MenuItem onClick={popupState.Close}>Indefinately</MenuItem>
            </Menu>
        </React.Fragment>
    )}
</PopupState>