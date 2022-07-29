import Link from 'next/link'
import React from 'react'
import styles from './Button.module.scss'

interface Props {
  path: string,
  buttonText: string,
  color: string
  bgColor: string,
  borderColor?: string
}

const Button = (props:Props) => {

  const buttonStyle = {
    color: `${props.color}`, 
    backgroundColor: `${props.bgColor}`, 
    borderColor: `${props.borderColor}`,
  };

  return (
    <Link href={props.path}>
      <button 
        className={styles.button} 
        style={buttonStyle}
      >
        {props.buttonText}
      </button>
    </Link>
  )
}

export default Button