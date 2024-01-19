import React from 'react'

import palette from '../../../theme'


const Label = ({
  labelText,
  fs = '1rem',
  fw = 700,
  color = palette.text.primary,
  htmlFor = '',
  ff = "Montserrat",
  required = false,
  padding = 0
}) => {

  const customStyles = {
    fontSize: fs,
    fontWeight: fw,
    color: color,
    fontFamily: ff,
    position: 'relative',
    padding
  }
  const asteriskStyle = {
    color: palette.colors.red,
    fontSize: '0.6rem',
    position: 'absolute',
    top: 0,
    paddingLeft: '0.3rem',
  }
  return (
    <label
      htmlFor={htmlFor}
      style={customStyles}>
      {labelText}
      {required ?
        <span style={asteriskStyle }>*</span> : null}</label>
  )
}

export default Label;


