import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                FESA 会社情報 045-491-4108
                水曜定休 西神奈川2
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
