import React, { useState, useContext } from "react";

// mui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';

//components
import CustomButton from "../custom/button";
import CustomInput from "../custom/input";
import Title from "../custom/title";
import Label from "../custom/label";

//services
import agentServices from '../../services/agent'

//constants
import { TOAST_SEVERITY } from '../../constants';

//utils
import commonUtils from "../../utils/common.utils";

// theme
import palette from "../../theme";

//global-states
import { GlobalStates } from '../../App';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    height: 600,
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

const CreateAgentModal = (props) => {
    const {
        open = false,
        setOpen,
        fetchAgents
    } = props;
    const classes = useStyles();
    const { globalStates } = useContext(GlobalStates);
    const [saving, setSaving] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptioneError] = useState('');

    const handleClose = () => {
        return
    }

    const handleCreateAgent = async () => {
        const isValid = validate();
        if (!isValid) return
        setSaving(true);
        const payload = {
            name,
            email,
            phone,
            description,
        }
        const response = await agentServices.createAgent(payload);
        setSaving(false);
        if (response.status === 200 || response.status === 201) {
            setOpen(false);
            fetchAgents()
            const toast = {
                open: true,
                severity: TOAST_SEVERITY.success,
                message: response.data.message
            }
            globalStates.handleToast(toast);
        } else {
            const toast = {
                open: true,
                severity: TOAST_SEVERITY.error,
                message: response.data.message
            }
            globalStates.handleToast(toast);
        }
    }

    const validate = () => {
        let isValid = true;
        if (!name.length) {
            setNameError('Name is required');
            isValid = false
        }
        if (!phone.length) {
            setPhoneError('Phone number is required');
            isValid = false
        }
        if (!email.length) {
            setEmailError('Email is required');
            isValid = false
        }
        if (!description.length) {
            setDescriptioneError('Description is required');
            isValid = false
        }
        if (name.length && name.length < 3) {
            setNameError('Minimun 3 characters are required');
            isValid = false
        }
        if (phone.length && phone.length < 10) {
            setPhoneError('Minimun 10 digits are required');
            isValid = false
        }
        if (email.length && !commonUtils.isValidEmail(email)) {
            setEmailError('Invalid email ID');
            isValid = false
        }
        return isValid
    }

    const handleChangeName = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setNameError('Name is required');
        } else setNameError('');
        setName(value)
    }

    const handleChangePhone = (e) => {
        let value = e.target.value;
        if (value.length > 10) return
        if (!value.length) {
            setPhoneError('Phone number is required');
        } else setPhoneError('');
        setPhone(value)
    }

    const handleChangeEmail = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setEmailError('Email is required');
        } else setEmailError('');
        setEmail(value)
    }



    const handleChangeDescription = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setDescriptioneError('Description is required');
        } else setDescriptioneError('');
        setDescription(value)
    }




    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} className={classes.box}>
                <Title titleText={"Create new agent"} fs="1.8rem" padding="0" />
                <CloseIcon sx={{ position: 'absolute', top: 24, right: 24, fontSize: '2rem', cursor: 'pointer' }} onClick={() => setOpen(false)} />
                <hr />
                <div className={classes.wrapper}>
                    <Label labelText={"Name:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={name}
                        handleChange={handleChangeName}
                        errorText={nameError}
                    />
                    <Label labelText={"Email:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={email}
                        handleChange={handleChangeEmail}
                        errorText={emailError}
                    />
                    <Label labelText={"Phone:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='number'
                        value={phone}
                        handleChange={handleChangePhone}
                        errorText={phoneError}
                    />
                    <Label labelText={"Description:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={description}
                        handleChange={handleChangeDescription}
                        errorText={descriptionError}
                    />



                </div>
                <CustomButton
                    loading={saving}
                    margin={'1rem 0'}
                    width="100%"
                    btnText="CREATE"
                    bgcolor={palette.btnPrimary.background}
                    borderColor={palette.btnPrimary.borderColor}
                    handleClick={handleCreateAgent}
                />
            </Box>
        </Modal>
    )
}

export default CreateAgentModal;

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        margin: '1.5rem 0'
    },
    selectMenu: {
        height: '2.5rem',
        width: '100%',
        fontSize: '1rem',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        backgroundColor: '#fff',
        color: '#000'
    },
}));