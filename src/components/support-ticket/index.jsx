import React, { useContext, useEffect, useState } from 'react'

//mui
import { Box } from '@mui/material'

//components
import CustomButton from '../custom/button'
import Title from '../custom/title'
import Label from '../custom/label'
import Card from '../card'
import Loader from '../custom/loader'
import CreateTicketModal from './modal'

//services
import ticketServices from '../../services/tickets'

//utils
import useRouter from '../../utils/useRouter';

//styles
import useStyles from './index.styles'

const SupportTicket = () => {
    const classes = useStyles();
    const router = useRouter();
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchTickets()
    }, [])

    const fetchTickets = async () => {
        setLoading(true)
        const response = await ticketServices.getTickets({ startIndex: 0, limit: 100 });
        console.log('response = ', response);
        if (response.status === 200) {
            setLoading(false)
            let data = response.data.data.data.map(ele => ({ ...ele, dateCreated: `${new Date(ele.dateCreated).toDateString()} ${new Date(ele.dateCreated).toLocaleTimeString()}` }));
            setTickets(data)
        }
    }


    return (
        <Box
            className={classes.main}
            sx={{
                minHeight: `100vh`,
            }}>
            <div className={classes.header}>
                <Title titleText={'Support Ticket Entry System - Tickets'} fs='1.5rem' padding='0.5rem 2rem' />
                <span>
                    <CustomButton btnText='Agents' handleClick={() => router.history.push("/support-agents")} />
                    <CustomButton btnText='Create new ticket' width='fit-content' handleClick={() => setShowModal(true)} />
                </span>
            </div>
            <hr />
            {
                loading ?
                    <div className={classes.empty}>
                        <Loader />
                    </div> :
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
            {
                showModal ? <CreateTicketModal open={showModal} setOpen={setShowModal} fetchTickets={fetchTickets} /> : null
            }

        </Box>
    )
}

export default SupportTicket;




