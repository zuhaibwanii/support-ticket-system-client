import React, { useContext, useEffect, useState } from 'react'

//mui
import { Box } from '@mui/material'

//components
import CustomButton from '../custom/button'
import Title from '../custom/title'
import Label from '../custom/label'
import Card from '../card'
import Loader from '../custom/loader'
import CreateAgentModal from './modal'
import Table from '../custom/table'

//services
import agentServices from '../../services/agent'

//utils
import useRouter from '../../utils/useRouter';

//styles
import useStyles from './index.styles'

const staticHeadings = [
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "Phone", key: "phone" },
    { title: "Assigned Tickets", key: "assignedTicketsCount" },
    { title: "Created On", key: "dateCreated" },
]


const SupportAgent = () => {
    const classes = useStyles();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ limit: 0, startIndex: -1, totalCount: 0 });
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        fetchAgents()
    }, [startIndex])

    const fetchAgents = async () => {
        setLoading(true)
        const response = await agentServices.getAgents({ startIndex, limit: 10 });
        console.log('response = ', response);
        if (response.status === 200) {
            setLoading(false)
            let data = response.data.data.data.map(ele => ({ ...ele, dateCreated: `${new Date(ele.dateCreated).toDateString()} ${new Date(ele.dateCreated).toLocaleTimeString()}` }));;
            setTableData(data)
            setPagination(response.data.data.pagination);
        }
    }


    return (
        <Box
            className={classes.main}
            sx={{
                minHeight: `100vh`,
            }}>
            <div className={classes.header}>
                <Title titleText={'Support Ticket Entry System - Agents'} fs='1.5rem' padding='0.5rem 2rem' />
                <span>
                    <CustomButton btnText='Tickets' handleClick={() => router.history.push("/")} />
                    <CustomButton btnText='Create new agent' width='fit-content' handleClick={() => setShowModal(true)} />
                </span>
            </div>
            <hr />
            <Table
                tableHeadings={staticHeadings}
                tableData={tableData}
                loader={loading}
                withActions={false}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                withPagination={true}
                pagination={pagination}
            />

            {
                showModal ? <CreateAgentModal open={showModal} setOpen={setShowModal} fetchAgents={fetchAgents} /> : null
            }

        </Box>
    )
}

export default SupportAgent;




