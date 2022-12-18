import React, { FC } from 'react'
import TextInput from '../../atoms/Form/Input/TextInput'
import Button from '../../atoms/Button/Button'
import { Formik, Field } from 'formik'
import { title } from 'process'
import {useAppDispatch, useAppSelector} from "../../store";
import {sentFromData} from "../../store/reducers/Exspenses/slice";
import Table from "../../atoms/Table/Table";
import styles from './Exspenses.module.scss';


const Exspenses: FC = () => {
	const dispatch = useAppDispatch();
	const {listExspenses} = useAppSelector(state => state.exspenses)
	console.log(listExspenses)
	// if (!listExspenses) return <></>
	return (
		<>

			<Formik
				initialValues={{ title: '1', amount: '222' }}
				onSubmit={values => {
					console.log(values)
					dispatch(sentFromData(values))
					//sent from dispatch sentFromDataTest -wysyłam to co wymaga interfejs(czyli string) i zrobic tak samo z number
				}}>
				{({ handleSubmit, values, handleChange }) => (
					<form onSubmit={handleSubmit}>
						<Field onChange={handleChange} component={TextInput} name={'title'} value={values.title} />
						<Field onChange={handleChange} component={TextInput} name={'amount'} value={values.amount} />
						<Button type='submit' color={'red'} text='Add' />
					</form>
				)}
			</Formik>

			<div>
				{listExspenses && <>
					title:{listExspenses!.title}
					amount:{listExspenses!.amount}
				</>}

			</div>
			<Table className={styles.table}/>
			{/*<Table className={styles.tableExspenses}/>*/}
			{/* <TextInput value={'3'} placeholder='Deal name' />
			<TextInput placeholder='enter amount' />
			<Button color={'red'} text='Add' onClick={() => console.log('Add')} />
			<Button color={'green'} text='Delete' onClick={() => console.log('Delete')} /> */}
			{/*
			w 38 wyswietle dane z inputow- bede to wyswietlala z pomoca zmiennej listexpenses z slice reducera. jak wyciagnac dane z reducer(metoda useAppselector)
			redux tool-kit,
			*/}

		</>
	)
}

export default Exspenses
