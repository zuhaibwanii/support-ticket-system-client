import React, { useEffect } from 'react'

//mui
import { makeStyles } from "@mui/styles";

//constants
import constants from '../../../constants';
import palette from '../../../theme';


const CustomInput = ({
    id,
    value = '',
    type = 'text',
    width = '20rem',
    margin = 0,
    height = '2.5rem',
    placeholder = '',
    isDisabled = false,
    limit = 50,
    handleChange,
    errorText = ''
}) => {
    const classes = useStyles();
    const inputStyle = {
        width,
        height,
        margin,
        marginBottom: errorText.length ? '0.3rem' : 0
    }

    return (
        <div
            style={inputStyle}
            className={`${classes.customInputBox} ${errorText.length ? classes.error : ''}`}>
            <input
                id={id}
                style={inputStyle}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                maxLength={limit}
                type={type}
                disabled={isDisabled}
            />
            {errorText.length ? <div className={classes.errorText}>{errorText}</div> : null}
        </div>

    )
}

export default CustomInput;


const useStyles = makeStyles(() => ({

    customInputBox: {
        position: 'relative',
        outline: '1.5px solid rgb(184, 184, 184, 0.5)',
        borderRadius: '3px',
        display: 'flex',
        fontSize: "0.7rem",
        fontWeight: "500",
        '& input': {
            backgroundColor: '#fff',
            color: 'rgb(0,0,0,0.9)',
            padding: '0 0.5rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'Montserrat',
            '&:focus': {
                outline: 'none',
            },
            '&:disabled': {
                backgroundColor: '#cccccc', /* Grey */
                color: '#666666', /* Dark grey */
                cursor: 'not-allowed',
              }
        },

        '&:focus-within': {
            outline: `2px solid ${palette.colors.black} !important`,
        },
        '&:hover': {
            outline: `2px solid ${palette.colors.black} !important`,
        },
    },
    error: {
        outline: `2px solid ${palette.colors.red} !important`,
        '&:hover': {
            outline: `2px solid ${palette.colors.red} !important`,
        },
    },
    errorText: {
        position: 'absolute',
        bottom: '-1rem',
        color: "#EB3917",
        fontFamily: "Montserrat",
        fontSize: "0.6rem",
        fontWeight: "700",
    }

}));
