import React from 'react'
import palette from '../../../theme';

//mui
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.progress}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loader;


const useStyles = makeStyles(() => ({
    progress: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : palette.bgThemeColor,
        height: '100%',
        width: '100%',
        '& span': {
            // border: '1px solid rgb(112, 112, 112, 0.2)',
            width: '3rem !important',
            height: '3rem !important',
            '& svg': {
                filter: 'invert(20%) sepia(88%) saturate(7483%) hue-rotate(351deg) brightness(91%) contrast(111%)'
           }
        }
    },

}));