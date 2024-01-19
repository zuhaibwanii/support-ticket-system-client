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
import ticketServices from '../../services/tickets'

//constants
import { TOAST_SEVERITY } from '../../constants';

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

const CreateTicketModal = (props) => {
    const {
        open = false,
        setOpen,
        fetchTickets
    } = props;
    const classes = useStyles();
    const { globalStates } = useContext(GlobalStates);
    const [saving, setSaving] = useState(false);
    const [topic, setTopic] = useState('');
    const [topicError, setTopicError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptioneError] = useState('');
    const [type, setType] = useState('');
    const [typeError, setTypeError] = useState('');
    const [severity, setSeverity] = useState('LOW');
    const handleClose = () => {
        return
    }

    const handleCreateTicket = async () => {
        const isValid = validate();
        if (!isValid) return
        setSaving(true);
        const payload = {
            topic,
            description,
            severity,
            type,
        }
        const response = await ticketServices.createTicket(payload);
        setSaving(false);
        if (response.status === 200 || response.status === 201) {
            setOpen(false);
            fetchTickets()
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
        if (!topic.length) {
            setTopicError('Topic is required');
            isValid = false
        }
        if (!description.length) {
            setDescriptioneError('Description is required');
            isValid = false
        }
        if (!type.length) {
            setTypeError('Type is required');
            isValid = false
        }
        return isValid
    }

    const handleSeverityChange = (e) => {
        setSeverity(e.target.value);
    }

    const handleChangeTopic = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setTopicError('Topic is required');
        } else setTopicError('');
        setTopic(value)
    }

    const handleChangeDescription = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setDescriptioneError('Description is required');
        } else setDescriptioneError('');
        setDescription(value)
    }

    const handleChangeType = (e) => {
        let value = e.target.value;
        if (!value.length) {
            setTypeError('Type is required');
        } else setTypeError('');
        setType(value)
    }



    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} className={classes.box}>
                <Title titleText={"Create new ticket"} fs="1.8rem" padding="0" />
                <CloseIcon sx={{ position: 'absolute', top: 24, right: 24, fontSize: '2rem', cursor: 'pointer' }} onClick={() => setOpen(false)} />
                <hr />
                <div className={classes.wrapper}>
                    <Label labelText={"Topic:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={topic}
                        handleChange={handleChangeTopic}
                        errorText={topicError}
                    />
                    <Label labelText={"Description:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={description}
                        handleChange={handleChangeDescription}
                        errorText={descriptionError}
                    />
                    <Label labelText={"Type:"} required={true} />
                    <CustomInput
                        width="100%"
                        type='text'
                        value={type}
                        handleChange={handleChangeType}
                        errorText={typeError}
                    />
                    <Label labelText={"Severity:"} required={true} />
                    <select defaultValue={'LOW'} className={classes.selectMenu} onChange={handleSeverityChange}>
                        <option value={'0'} disabled>Select Severity</option>
                        <option value={'LOW'}>LOW</option>
                        <option value={'MEDIUM'}>MEDIUM</option>
                        <option value={'HIGH'}>HIGH</option>
                    </select>

                </div>
                <CustomButton
                    loading={saving}
                    margin={'1rem 0'}
                    width="100%"
                    btnText="CREATE"
                    bgcolor={palette.btnPrimary.background}
                    borderColor={palette.btnPrimary.borderColor}
                    handleClick={handleCreateTicket}
                />
            </Box>
        </Modal>
    )
}

export default CreateTicketModal;

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