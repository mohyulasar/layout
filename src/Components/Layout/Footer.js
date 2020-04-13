import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        color: 'white',
        backgroundColor: 'black',
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexGrow: 1
    }
})
const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid item xs={5}>
                        Acc.com ACC Global Headquarters
                    </Grid>
                    <Grid item xs={5}>
                        Office 1 # 884-095-2264
                    </Grid>
                    <Grid item xs={2}>
                        Privay & Policies
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid item xs={5}>
                        1001 G Street NW
                    </Grid>
                    <Grid item xs={5}>
                        Office 2 # 884-095-2264
                    </Grid>
                    <Grid item xs={2}>
                        F A Q ' s
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid item xs>
                        Suite 300W
                    </Grid>
                </Grid>
        </div>
    )
}
export default Footer;

