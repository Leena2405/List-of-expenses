import React, { FC } from 'react'
import Table from "./atoms/Table/Table";

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


	return (
		<>
			<Exspenses />
			{/* budowanie komponentów reuzywalnych, przekazywanie tekstu i np kolory, na samej tablicy i na tablicy z obiektami */}
			{buttonData.map((element,index) => (
			<React.Fragment key={index}>
					<Button text={element}  />
					<Button text={element}  />
				</React.Fragment>


			))}


		</>
	)
}

export default App
