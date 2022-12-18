import styles from './TextInput.module.scss'

import cn from 'classnames'
import { FC } from 'react'
import { FieldInputProps } from 'formik';

interface InputProps {
	value?: string
	placeholder?: string;
	field: FieldInputProps<any>;
}

const Input: FC<InputProps> = ({ placeholder, value, field}) => {
	return <input 
		placeholder={placeholder} 
		value={value} 
		type='text' 
		className={cn(styles.element)} 
		onChange={field.onChange}
		name={field.name}
	/>
}

export default Input
