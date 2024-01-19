import React from 'react'
import { makeStyles } from "@mui/styles";
import palette from "../../theme";
import CustomButton from '../custom/button';
import commonUtils from '../../utils/common.utils';


const Card = ({ title = '', description = '', status = '', assignedTo, dateCreated, severity }) => {
  const classes = useStyles();
  const getColor = () => {
    let color = '#000';
    if(severity === 'HIGH') color = palette.errorColor;
    if(severity === 'MEDIUM')color = 'yellow'
    return color
  }
  return (
    <div className={classes.card}>
      <h1 title={title}>{commonUtils.truncateString(title, 30)}</h1>
      <h2 title={description}>{commonUtils.truncateString(description, 200)}</h2>
      <div className={classes.detailWrapper}>
        <span>Status: <span>{status}</span></span>
        <span>Assigned To: <span>{assignedTo}</span></span>
      </div>
      <div className={classes.detailWrapper}>
        <span>Created On: <span>{dateCreated}</span></span>
        <span>Severity:<span style={{ color: getColor() }}> {severity}</span></span>
      </div>
    </div>
  )
}

export default Card;


const useStyles = makeStyles(() => ({
  card: {
    width: '26rem',
    aspectRatio: 16 / 9,
    borderRadius: 5,
    padding: '1rem',
    boxShadow: '0px 0px 10px 0px #ccc',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '& > *': {
      fontFamily: 'Montserrat',
    },
    '& h1': {
      fontSize: '1.4rem'
    },
    '& h2': {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: palette.colors.gray,
      minHeight: '5rem'
    },
    // '@media (max-width:370px)': {
    //   width: '8rem',
    //   '& h4, h6': {
    //     fontSize: '0.7rem',
    //   },
    //   '& h6': {
    //     fontSize: '1.2rem'
    //   },
    //   '& > button': {
    //     padding: '0.7rem'
    //   },
    // },
    // '@media (max-width:299px)': {
    //   width: '7rem'
    // },
  },
  detailWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > span': {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '0.9rem',
      '& > span': {
        fontFamily: 'Montserrat',
        fontWeight: 500,

      }
    }
  }
}));

