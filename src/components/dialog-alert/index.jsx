import React from "react";

// mui
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CustomButton from "../custom/button";

// theme
// import palette from "../../theme/palette";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 300,
    height: 250,
    width: '90%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    border: 'none',
    p: 3,
    borderRadius: '5px',
    '& .MuiTypography-root': {
        fontFamily: 'montserrat'
    }
}

const DialogAlert = (props) => {
    const {
        isOpen = false,
        content = 'Content',
        handleClick,
        loadingBtn = false
    } = props;
    const classes = useStyles();
    const handleClose = () => {
        return
    }
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box sx={style} className={classes.box}>
                <div><WhatsAppIcon sx={{ color: 'green', fontSize: '5rem' }} /></div>
                <Typography variant="body1" component="div" sx={{ color: '#000', fontSize: '1rem', fontWeight: 600, textAlign: 'center' }}> {content} </Typography>
                <CustomButton loading={loadingBtn} btnText="JOIN" bgcolor="green" borderColor="green" handleClick={handleClick}/>
            </Box>
        </Modal>
    )
}

export default DialogAlert;

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
    },
    alertBtn: {
        marginTop: '1.5rem',
        textAlign: 'right'
    },
}));