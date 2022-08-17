import React, { FC } from 'react'

import Exspenses from './components/exspenses/Exspenses'
import { useAppSelector } from './store'

const App: FC = () => {
	const test=useAppSelector(state=>state.exspenses.listExspenses)
	console.log(test);
	return <Exspenses />
}

export default App
