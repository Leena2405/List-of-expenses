import { FC } from 'react'

import styles from './Button.module.scss'

import cn from 'classnames'

interface ButtonProps {
	text: string
	onClick?: () => void
	color?: string
	type?: 'submit'
}

const Button: FC<ButtonProps> = ({ text, onClick, color = 'red', type }) => {
	return (
		<button type={type} className={cn(styles.element, styles[`hasColor-${color}`])} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
