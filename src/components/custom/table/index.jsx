import React, { useEffect, useRef } from "react";

//mui
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';

//components
import Loader from '../loader';


//styles
import useStyles from "./index.styles";
import isEmpty from "../../../utils/isEmpty";
import CustomButton from "../button";
import palette from "../../../theme";


const Table = ({
    loader = false,
    loaderText = "LOADING. . .",
    loadingIdx = [],
    tableHeadings,
    tableData,
    withActions = true,
    handleAccept = () => { },
    handleReject = () => { },
    withPagination = false,
    pagination = {
        limit: 0,
        startIndex: -1,
        totalCount: 0
    },
    startIndex,
    setStartIndex

}) => {
    const styles = useStyles();
    const loadingDivRef = useRef(null);

    useEffect(() => {
        if (loader) {
            scrollToStart()
        }
    }, [loader])

  
    const handleBackClick = () => {
        if (startIndex >= pagination.limit) {
            console.log('new idx = ',startIndex - pagination.limit);
            setStartIndex(startIndex - pagination.limit)
        }
    }

    const handleForwardClick = () => {
        if (startIndex + pagination.limit < pagination.totalCount) {
            console.log('new idx = ',startIndex + pagination.limit);
            setStartIndex(startIndex + pagination.limit);
        }
    }


    const scrollToStart = () => {
        if (loadingDivRef.current) {
            loadingDivRef.current.scrollLeft = 0;
        }
    };

    const getPaginationText = () => {
        return `${pagination.startIndex + 1} - ${(pagination.startIndex + 1 * pagination.limit) > pagination.totalCount ? pagination.totalCount : pagination.startIndex + pagination.limit} of ${pagination.totalCount}`
        // return `${pagination.startIndex + 1} - ${pageNo === pageCount ? pagination.totalCount : pagination.startIndex + pagination.limit} of ${pagination.totalCount}`

    }


    const getValue = (element, data) => {
        if (isEmpty(element[data.key])) return "-";
        if (data.isDate) return `${new Date(element[data.key]).toDateString()} ${new Date(element[data.key]).toLocaleTimeString()}`
        return element[data.key];
    }
    const getBtnClass = (element, data) => {
        if (data.key === "status") {
            const success = ['ACCEPTED', 'ACTIVE', 'PAID'];
            const error = ['REJECTED', 'INACTIVE'];
            const inProgress = ['PENDING'];
            if (success.includes(element[data.key])) return styles.successBtnCell;
            if (error.includes(element[data.key])) return styles.errorBtnCell;
            if (inProgress.includes(element[data.key])) return styles.inProgressBtnCell;
        }
        return ""
    }
    return (
        <>
            <div className={`${styles.wrapper} ${loader || !tableData.length ? styles.disableScroll : ""}`} ref={loadingDivRef}>
                <table className={styles.Table}>
                    <thead style={{
                        backgroundColor: '#fff',//while freezing table header
                        position: 'sticky',//while freezing table header
                        top: 0 //while freezing table header
                    }}>
                        <tr className={styles.Table_Heading}>
                            {tableHeadings.map((element, i) => (
                                <th key={i}>{element.title}</th>
                            ))}
                        </tr>
                    </thead>
                    {!loader && <tbody>
                        {tableData.map((element, key) => (
                            <tr className={styles.Table_Data} key={key}>

                                {
                                    tableHeadings.map((data, i) => {
                                        if (data.isBtn) {
                                            return (<td key={i} className={`${styles.btnCell} ${getBtnClass(element, data)}`}>
                                                <span>{getValue(element, data)}</span>
                                            </td>)
                                        } else if (data.key === 'actions' && withActions) {
                                            if (element[data.key] === "PENDING") {
                                                if (loadingIdx.includes(element['_id'])) {
                                                    return (<td key={i} ><CircularProgress sx={{ height: '1rem !important', width: '1rem !important', color: palette.colors.red, marginLeft: '1rem' }} color="secondary" /></td>)
                                                } else {
                                                    return (<td key={i} className={`${styles.buttonCell}`}>
                                                        <CheckIcon sx={{ color: palette.successColor }} onClick={() => handleAccept(element)} />
                                                        <ClearIcon sx={{ color: palette.errorColor }} onClick={() => handleReject(element)} />
                                                    </td>)
                                                }

                                            } else {
                                                return (<td key={i}>-</td>)
                                            }

                                        } else {
                                            return (<td key={i}>{getValue(element, data)}</td>)
                                        }
                                    }
                                    )
                                }
                            </tr>
                        ))}
                    </tbody>}
                </table>
                {
                    (loader) ?
                        <div className={styles.loaderBox}>
                            <Loader />
                            <h1>
                                {loaderText}
                            </h1>
                        </div> : null
                }
                {
                    (!loader && !tableData.length && <div className={styles.emptyTable} style={{ minHeight: '10vh' }}>
                        No data found
                    </div>)
                }
            </div>
            {withPagination && !loader && tableData.length ? <div className={styles.paginationBox} style={{ borderTop: loader ? `1px solid ${palette.colors.white}` : 'none' }}>
                <h5>
                    {getPaginationText()}
                </h5>
                <ChevronLeftIcon className={styles.leftIcon} onClick={handleBackClick} />
                <ChevronRightIcon className={styles.leftIcon} onClick={handleForwardClick} />
            </div> : null}
        </>
    );
};

export default Table;


function LinearProgressWithLabel(props) {
    const styles = useStyles();
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{
                width: '42rem',
                height: '12px',
                mr: 1,
                '& > .MuiLinearProgress-root': {
                    height: '10px',
                    borderRadius: '4px'
                }
            }}>
                <LinearProgress className={styles.linearProgress} variant="determinate" color='warning' {...props} />
            </Box>
            {/* <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" className={styles.typography}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box> */}
        </Box>
    );
}