import { FC } from 'react'

import styles from './Button.module.scss'

import cn from 'classnames'

interface ButtonProps {
	text: string
	onClick?: () => void
	color: 'red' | 'green';
	type: 'submit';
}

const Button: FC<ButtonProps> = ({ text, onClick, color, type}) => {
	return (
		<button type={type} className={cn(styles.element, styles[`hasColor-${color}`])} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
