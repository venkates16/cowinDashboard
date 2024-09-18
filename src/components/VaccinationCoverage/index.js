// Write your code here
import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {obj} = props
  // console.log(obj)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <BarChart
      width="100%"
      height={500}
      data={obj}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="vaccineDate"
        tick={{
          stroke: 'red',
          strokeWidth: 1,
        }}
      />
      <YAxis
        tickFormatter={DataFormatter}
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="10%" />
      <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
    </BarChart>
  )
}

export default VaccinationCoverage
