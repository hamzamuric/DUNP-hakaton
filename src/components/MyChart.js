import React from 'react'
import './MyChart.css'
import { min, max } from 'lodash'

// 20 70 => 0 100

function scale(fromStart, fromEnd, toStart, toEnd, num) {
	const percent = (num - fromStart) / (fromEnd - fromStart)
	return percent * (toEnd - toStart) + toStart
}

const MyChart = ({ name, data, color, dotcolor }) => {
	const minMin = min(data.map(x => x.min))
	const maxMax = max(data.map(x => x.max))

	return (
		<svg className="my-chart" viewBox="0 0 120 120">
			<text x={20} y={10} fontSize="6">MIN</text>
			<text x={52} y={10} fontSize="6">AVG</text>
			<text x={84} y={10} fontSize="6">MAX</text>
			<text x={52} y={116} fontSize="6">{name}</text>
			{data.map((el, idx) => 
				<>
					<text className="chart-text" fontSize="smaller" x={scale(minMin, maxMax, 0, 80, minMin) + 2} y={idx * 20 + 23}>{el.min}</text>
					<text className="chart-text" fontSize="smaller" x={scale(minMin, maxMax, 0, 80, maxMax) + 22} y={idx * 20 + 23}>{el.max}</text>
					<line className="chart-back-line"
						x1={scale(minMin, maxMax, 0, 80, minMin) + 20}
						y1={idx * 20 + 20}
						x2={scale(minMin, maxMax, 0, 80, maxMax) + 20}
						y2={idx * 20 + 20} />
					<line className="chart-line"
						style={{ stroke: color }}
						x1={scale(minMin, maxMax, 0, 80, el.min) + 20}
						y1={idx * 20 + 20}
						x2={scale(minMin, maxMax, 0, 80, el.max) + 20}
						y2={idx * 20 + 20} />
					<circle className="chart-circle"
						style={{ stroke: dotcolor, fill: 'white' }}
						cx={scale(minMin, maxMax, 0, 80, el.avg) + 20}
						cy={idx * 20 + 20}
						r={2} />
				</>
			)}
		</svg>
	)
}

export default MyChart
