import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyChart from '../components/MyChart'
import './ApiScreen.css'

const TOKEN = '501b51edd5e2cbd7708fc56642361af2b9351b3a'

const ApiScreen = ({ onSwitch }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		(async function() {
			try {
				const response = await axios.get(`http://api.waqi.info/feed/novi-pazar/?token=${TOKEN}`)
				setData(response.data)
			} catch (err) {
				console.error(err)
			}
		})()
	}, [])

	useEffect(() => {
		console.log(data?.data?.forecast?.daily)
	}, [data, setData])

	if (data && data.status === 'ok') {

		const measurementTime = data.data.time.s
		const { o3, pm10, pm25, uvi } = data.data.forecast.daily
		console.log('o3', o3)
		console.log('uvi', uvi)

		return (
			<div>
				<div className="api-header-api">
					<p>Vreme merenja: {measurementTime}</p>
					<button onClick={onSwitch}>Pogledaj statistiku</button>
					<a id="city-name" target='_blank' href={data.data.city.url}>Grad: {data.data.city.name}</a>
				</div>
				<div id="chart-container">
					<MyChart name="O3" data={o3} color='lightblue' dotcolor='blue' />
					<MyChart name="PM 10" data={pm10} color='lightgreen' dotcolor='green' />
					<MyChart name="PM 2.5" data={pm25} color='yellow' dotcolor='orange' />
					<MyChart name="UVI" data={uvi.slice(0, 5)} color='red' dotcolor='darkred' />
				</div>
			</div>
		)
	}

	return (
		<div>
			<div className="api-header-api">
				<p>Vreme merenja: -</p>
				<button>Pogledaj statistiku</button>
				<a id="city-name" target='_blank' href="#">Grad: -</a>
			</div>
		</div>
	)
}

export default ApiScreen
