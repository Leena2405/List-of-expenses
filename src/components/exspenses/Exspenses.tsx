import { FC } from 'react'
import TextInput from '../../atoms/Form/Input/TextInput'
import Button from '../../atoms/Button/Button'
import { Formik, Field } from 'formik'
import { title } from 'process'

const Exspenses: FC = () => {
	return (
		<>
			<Formik
				initialValues={{ title: '1', amount: '222' }}
				onSubmit={values => {
					console.log(values)
					//tutaj dispach action with data
				}}>
				{({ handleSubmit, values, handleChange }) => (
					<form onSubmit={handleSubmit}>
						<Field onChange={handleChange} component={TextInput} name={'title'} value={values.title} />
						<Field onChange={handleChange} component={TextInput} name={'amount'} value={values.amount} />
						<Button type='submit' color={'red'} text='Add' />
					</form>
				)}
			</Formik>
			{/* <TextInput value={'3'} placeholder='Deal name' />
			<TextInput placeholder='enter amount' />
			<Button color={'red'} text='Add' onClick={() => console.log('Add')} />
			<Button color={'green'} text='Delete' onClick={() => console.log('Delete')} /> */}

			<div></div>
			<div></div>
			<div>test2</div>
		</>
	)
}

export default Exspenses
