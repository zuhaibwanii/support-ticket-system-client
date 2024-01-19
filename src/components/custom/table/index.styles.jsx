import { makeStyles } from "@mui/styles";
import palette from "../../../theme";




const useStyles = makeStyles(() => ({
    wrapper: {
        overflow: 'auto',
        width: '100%',
        maxHeight: '72vh', //while freezing table header
        // height: '57vh',
        '&::-webkit-scrollbar': {
            height: '6px',
            width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: palette.colors.red,
            borderRadius: '6px',
        }
    },
    disableScroll: {
        overflow: 'hidden !important'
    },
    loaderBox: {
        minHeight: 'calc(2.4rem*10)',
        padding: '1rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > div': {
            backgroundColor: palette.bgThemeColor,
            '& > span': {
                height: '2rem !important',
                width: '2rem !important',
                color: `${palette.colors.red} !important`,
            }
        },
        '& > h1': {
            // marginTop: '2rem',
            fontFamily: 'Montserrat',
            color: palette.text.secondary,
            fontSize: "1rem",
            fontWeight: 700,
        }
    },
    Title: {
        // display: "flex",
        // alignItems: "center",
        fontFamily: 'Montserrat',
        color: palette.text.primary,
        fontSize: "14px",
        fontWeight: "Bolder",
        lineSpacing: "155"
    },
    Help_Icon: {
        color: "#F4511E",
        fontSize: "1rem",
        marginLeft: "0.5rem"
    },
    Table: {
        backgroundColor: palette.bgThemeColor,
        width: "100%",
        borderSpacing: "0px",
        borderRadius: "2px",
    },
    Table_Heading: {
        // border: "1px solid rgb(112, 112, 112, 0.4)",
        color: '#000',
        fontSize: "0.8rem",
        height: '3rem',
        textAlign: 'start',//table text alignment - this was center
        '& > th': {
            backgroundColor: '#e5091440',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            // minWidth: '12rem',
            minWidth: '200px',
            textWrap: 'nowrap',
            textTransform: 'capitalize',
            textAlign: 'start',//table text alignment
            paddingLeft: '2rem',//for center table text alignment
            border: '1px solid rgb(0,0,0,0.6)'
        }
    },
    Table_Data: {
        // border: "1px solid rgb(112, 112, 112, 0.4)",
        // borderTop: 'none',
        borderRadius: "2px",
        color: "#fff",
        fontSize: "0.8rem",
        height: '3rem',
        textAlign: 'start',//table text alignment - this was center
        '& > td': {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            borderBottom: '1px solid',
            textWrap: 'nowrap',
            padding: '0 2rem'//for center table text alignment
        },
    },
    SemiBold_Font: {
        fontWeight: "600",
    },
    iconBox: {
        '& > img:hover': {
            height: '1rem',
            margin: '0 0.4rem',
            filter: 'invert(34%) sepia(70%) saturate(2053%) hue-rotate(351deg) brightness(99%) contrast(93%)'
        }
    },
    Icons: {
        margin: "0 0.5rem",
        cursor: "pointer",
        height: '0.8rem',
    },
    Tooltip: {
        width: "120px",
        top: "100%",
        left: "50%",
        marginLeft: "-60px" /* Use half of the width (120/2 = 60), to center the tooltip */
    },
    Tooltiptext: {
        width: "120px",
        top: "100%",
        left: "50%",
        marginLeft: "-60px" /* Use half of the width (120/2 = 60), to center the tooltip */
    },
    leftIcon: {
        cursor: "pointer",
        "&:hover": {
            background: "#d5d5d5",
            borderRadius: "2rem"
        }
    },
    paginationBox: {
        color: palette.text.secondary,
        padding: "0.6rem",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center",
        '& > h5': {
            // border: '1px solid black',
            color: palette.text.secondary,
            fontFamily: "Montserrat",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginRight: '1rem'
        },

    },
    emptyTable: {
        minHeight: 'calc(2.4rem*10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "rgb(112, 112, 112)",
        fontFamily: "Montserrat",
        fontSize: "1rem",
        fontWeight: 500,
        borderBottom: "1px solid rgb(112, 112, 112, 0.4)",
        '& > .MuiButtonBase-root': {
            height: '40px',
            width: '170px',
            border: '1px solid #f4511e',
            backgroundColor: '#f4511e',
            color: '#fff',
            fontFamily: "Montserrat",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: 1
        }
    },
    selectRowsBox: {
        color: "rgb(0,0,0,0.8)",
        fontFamily: "Montserrat",
        fontSize: "0.8rem",
        fontWeight: 600,
        marginRight: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        '& .MuiFormControl-root': {
            minWidth: '1rem',
            margin: 0,
            '& .MuiInputBase-root': {
                lineHeight: 0,
                padding: 0,
                '& > svg': {
                    fontSize: '1.5rem',
                    color: '#f4511e',
                    right: '0.5rem'
                },
                '& > fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0)'
                },
                '& .MuiSelect-select': {
                    lineHeight: 0,
                    padding: '0.3rem',
                    display: 'flex',
                    width: '3rem',
                    alignItems: 'center',
                    color: '#f4511e',
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                    fontWeight: 600
                }
            }
        }
    },
    btnCell: {
        paddingLeft: '2.4rem',
        '& > span': {
            display: 'flex',
            justifyContent: 'center',
            width: '85px',
            minWidth: 'fit-content',
            padding: '0.5rem 0.7rem',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '0.7rem',
            fontFamily: 'Montserrat',
            color: '#fff',
            backgroundColor: 'rgb(0, 0, 0,)',
        }
    },
    buttonCell:{
        '& > svg:first-child':{
            marginRight: '3rem'
        }
    },
    successBtnCell: {
        '& > span': {
            color: '#43A047',
            // backgroundColor: '#ECF5EC',
            backgroundColor: '#000',
        }
    },
    errorBtnCell: {
        '& > span': {
            color: '#FF0000',
            // backgroundColor: '#FFE5E5',
            backgroundColor: '#000',
        }
    },
    inProgressBtnCell: {
        '& > span': {
            color: '#FFB300',
            // backgroundColor: '#FFF7E5',
            backgroundColor: '#000',
        }
    },
    linearProgress: {
        backgroundColor: '#F2F2F2',
        '& span': {
            backgroundColor: '#f4511e'
        },
        '& .MuiLinearProgress-bar1': {
            backgroundColor: '#f4511e'
        }
    },
    typography: {
        color: '#f4511e',
        fontSize: '1.2rem',
        fontFamily: 'Montserrat',
        fontWeight: 600
    }
}))
export default useStyles