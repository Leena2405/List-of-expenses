import React, { FC } from 'react'

import Exspenses from './components/exspenses/Exspenses'
import { useAppSelector } from './store'
import Button from './atoms/Button/Button'
import { NavLink, Link } from 'react-router-dom'

const buttonData = ['Wiadomości', 'Sport', 'Pogoda', 'Horoskop']

const customButtonData = [
	{
		text: 'Wiadomości',
		color: 'red',
	},
	{
		text: 'Sport',
		color: 'green',
	},
	{
		text: 'Pogoda',
		color: 'red',
	},
]

const App: FC = () => {
	const test = useAppSelector(state => state.exspenses.listExspenses)
	console.log(test)
	return (
		<>
			<Exspenses />
			{/* budowanie komponentów reuzywalnych, przekazywanie tekstu i np kolory, na samej tablicy i na tablicy z obiektami */}
			{buttonData.map(element => (
				<Button text={element} />
			))}
			{customButtonData.map(element => (
				<Button text={element.text} color={element.color} />
			))}
			<NavLink to={'/test'}>test</NavLink>
			<Link to='/invoices'>Invoices</Link> | <Link to='/expenses'>Expenses</Link>
		</>
	)
}

export default App
