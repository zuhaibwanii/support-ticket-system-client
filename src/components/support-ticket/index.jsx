import React, { useContext, useEffect, useState } from 'react'

//mui
import { Box } from '@mui/material'

//components
import CustomButton from '../custom/button'
import Title from '../custom/title'
import Label from '../custom/label'
import Card from '../card'

//services
// import authServices from '../../services/auth'

//utils
import useRouter from '../../utils/useRouter';

//styles
import useStyles from './index.styles'

//constants
import constants, { TOAST_SEVERITY } from '../../constants';

//global-states
import { GlobalStates } from '../../App';

let tempData = {
    topic: 'This is topic text',
    description: 'Here is the description ',
    status: 'New',
    assignedTo: { name: 'Zuhaib wani' },
    dateCreated: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    severity: 'HIGH'
}

const SupportTicket = () => {
    const classes = useStyles();
    const router = useRouter();
    const { globalStates } = useContext(GlobalStates);
    const [tickets, setTickets] = useState([tempData, tempData, tempData, tempData])
    const [showModal, setShowModal] = useState(false)





    //   const handleLogin = async (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return
    //     setLoadingBtn(true);
    //     let payload = {
    //       phone,
    //       password
    //     }
    //     console.log('payload = ', payload);
    //     const response = await authServices.login(payload);
    //     console.log('response = ', response);
    //     setLoadingBtn(false);
    //     if (!response) {
    //       globalStates.handleToast({
    //         open: true,
    //         severity: TOAST_SEVERITY.error,
    //         message: 'Something went wrong, please try again!'
    //       });
    //       return
    //     }
    //     if (response.status === 200) {
    //       const session = { accessToken: response.data.data.accessToken }
    //       const user = response.data.data.data;
    //       localStorage.setItem('session', JSON.stringify(session));
    //       localStorage.setItem('user', JSON.stringify(user));
    //       router.history.push('/')
    //     } else {
    //       const toast = {
    //         open: true,
    //         severity: TOAST_SEVERITY.error,
    //         message: response.data.message
    //       }
    //       globalStates.handleToast(toast);

    //     }
    //   }
    //   const handleRegister = () => {
    //     router.history.push('/register')
    //   }

    return (
        <Box
            className={classes.main}
            sx={{
                minHeight: `100vh`,
            }}>
            <div className={classes.header}>
                <Title titleText={'Support Ticket Entry System - Tickets'} fs='1.5rem' padding='0.5rem 2rem' />
                <span>
                    <CustomButton btnText='Agents' />
                    <CustomButton btnText='Create new ticket' width='fit-content' />
                </span>
            </div>
            <hr />
            {
                tickets.length ?
                    <div className={classes.cardsWrapper}>
                        {
                            tickets.map(ele => (
                                <Card
                                    title={ele.topic}
                                    description={ele.description}
                                    status={ele.status}
                                    assignedTo={ele.assignedTo.name}
                                    dateCreated={ele.dateCreated}
                                    severity={ele.severity}
                                />
                            ))
                        }
                    </div> :
                    <div className={classes.empty}>
                        <h1>No tickets found</h1>
                        <span onClick={() => setShowModal(true)}> Click here to create one</span>
                    </div>
            }


        </Box>
    )
}

export default SupportTicket;
