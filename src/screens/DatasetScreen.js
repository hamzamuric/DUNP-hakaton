import React from 'react'
import { Chart } from 'react-google-charts'
import './DatasetScreen.css'

const DatasetScreen = ({ onSwitch }) => {
	const transformed = Object.keys(deaths[0]).map(year => [year, deaths[0][year], deaths[1][year], deaths[2][year], deaths[3][year]])
	const data = [['Godina', 'Smrti zbog zagadjenosti vazduha', 'Smrti zbog zagadjenja kucnog vazduha', 'Smrti u specijalnim slucajevima zagadjenja', 'Smrti zbog ambijentnog zagadjenja ozonom'], ...transformed]

	return (
		<div>
			<div className="api-header-dataset">
				<button onClick={onSwitch}>Pogledaj dnevne podatke</button>
			</div>
			<div>
				<Chart
					// width={'800px'}
					// height={'300px'}
					width={'100%'}
					height={'90vh'}
					chartType="Bar"
					loader={<div>Loading Chart</div>}
					data={data}
					// data={[
					// 	['Year', 'Sales', 'Expenses', 'Profit'],
					// 	['2014', 1000, 400, 200],
					// 	['2015', 1170, 460, 250],
					// 	['2016', 660, 1120, 300],
					// 	['2017', 1030, 540, 350],
					// ]}
					options={{
						// Material design options
						chart: {
							title: 'Smrt od zagadjenja po godini u Srbiji',
						},
					}}
				/>
			</div>
		</div>
	)
}

const deaths = JSON.parse(`
[
  {
    "1990": 90.7010508,
    "1991": 84.67043649,
    "1992": 88.93859084,
    "1993": 90.38426133,
    "1994": 91.93945557,
    "1995": 93.31983127,
    "1996": 93.44700388,
    "1997": 93.78851351,
    "1998": 86.69690707,
    "1999": 86.5539946,
    "2000": 85.68500732,
    "2001": 83.18332908,
    "2002": 82.59098413,
    "2003": 82.28168657,
    "2004": 80.95907983,
    "2005": 81.04960141,
    "2006": 79.04235575,
    "2007": 76.65752492,
    "2008": 76.55995649,
    "2009": 76.20927409,
    "2010": 73.98502744,
    "2011": 74.68472079,
    "2012": 72.77353585,
    "2013": 69.48608212,
    "2014": 68.30638923,
    "2015": 68.17432544,
    "2016": 63.98877438,
    "2017": 62.57853348
  },
  {
    "1990": 46.67608192,
    "1991": 42.64956912,
    "1992": 44.68066224,
    "1993": 45.32120724,
    "1994": 46.4145451,
    "1995": 46.92500609,
    "1996": 46.43955166,
    "1997": 45.74411337,
    "1998": 41.48797226,
    "1999": 41.36567033,
    "2000": 39.99116349,
    "2001": 38.31353349,
    "2002": 37.35312338,
    "2003": 36.33314627,
    "2004": 34.87904891,
    "2005": 34.45557976,
    "2006": 32.90007229,
    "2007": 31.41716918,
    "2008": 31.05875708,
    "2009": 30.78564366,
    "2010": 29.70271645,
    "2011": 28.20286248,
    "2012": 28.07341574,
    "2013": 26.47697444,
    "2014": 25.55066989,
    "2015": 24.65374204,
    "2016": 23.75708211,
    "2017": 22.92674816
  },
  {
    "1990": 41.95736146,
    "1991": 40.04877547,
    "1992": 42.1946881,
    "1993": 42.96556701,
    "1994": 43.39642072,
    "1995": 44.23453882,
    "1996": 44.83222669,
    "1997": 45.8394796,
    "1998": 43.12425887,
    "1999": 43.11086716,
    "2000": 43.61309939,
    "2001": 42.85258992,
    "2002": 43.21396724,
    "2003": 43.8960964,
    "2004": 44.01706016,
    "2005": 44.49433904,
    "2006": 44.07050551,
    "2007": 43.19605461,
    "2008": 43.42755329,
    "2009": 43.33485069,
    "2010": 42.21611068,
    "2011": 44.41261392,
    "2012": 42.61066184,
    "2013": 40.95472046,
    "2014": 40.68466249,
    "2015": 41.42772016,
    "2016": 38.18777875,
    "2017": 37.63655417
  },
  {
    "1990": 3.022563872,
    "1991": 2.868165736,
    "1992": 2.992402577,
    "1993": 3.03457913,
    "1994": 3.075368711,
    "1995": 3.112722138,
    "1996": 3.129410997,
    "1997": 3.162905346,
    "1998": 2.982040903,
    "1999": 2.967826837,
    "2000": 2.961502682,
    "2001": 2.869825474,
    "2002": 2.875671418,
    "2003": 2.910649902,
    "2004": 2.919141807,
    "2005": 2.9659211,
    "2006": 2.92288646,
    "2007": 2.879761567,
    "2008": 2.916437742,
    "2009": 2.933655462,
    "2010": 2.894855476,
    "2011": 2.911390783,
    "2012": 2.91108676,
    "2013": 2.841875153,
    "2014": 2.8478057,
    "2015": 2.876787277,
    "2016": 2.781758744,
    "2017": 2.738878955
  }
]
`)

export default DatasetScreen
