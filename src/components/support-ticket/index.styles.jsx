import { makeStyles } from "@mui/styles";
import palette from "../../theme";

const useStyles = makeStyles(() => ({
    main: {
        backgroundColor: palette.bgThemeColor,
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        position: 'relative',
        gap: '1rem'
    },
    header: {
        position: 'relative',
        height: '3rem',
        '& > span': {
            position: 'absolute',
            right: 0,
            top: '0.2rem',
            display: 'flex',
            gap: '1.5rem',
        }

    },
    empty: {
        minHeight: 'calc(100vh - 7.2rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexDirection: 'column',
        '& > h1': {
            color: palette.colors.gray,
            fontFamily: 'Montserrat',

        },
        '& > span': {
            color: palette.text.link,
            fontSize: '1rem',
            fontFamily: 'Montserrat',
            textDecoration: 'underline',
            cursor: 'pointer',
            transition: '.4s',
            '&:hover': {
                fontWeight: 700
            }

        }
    },
    cardsWrapper: {
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        padding: '1rem'
    },


    wrapper: {
        // border: '1px solid red',
        marginTop: '2rem',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        // boxShadow: '0px 0px 9px -2px #e50914',
        width: '26rem',
        '@media (max-width:600px)': {
            width: '100%',
        },
    },
}));

export default useStyles;