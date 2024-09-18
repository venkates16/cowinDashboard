// Write your code here

import './index.css'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {obj} = props
  // console.log(obj)
  return (
    <PieChart width="100%" height={500}>
      <Pie
        cx="50%"
        cy="40%"
        data={obj}
        startAngle={0}
        endAngle={180}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Male" fill="#fecba6" />
        <Cell name="Female" fill="#b3d23f" />
        <Cell name="Others" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="middle"
        align="center"
      />
    </PieChart>
  )
}

export default VaccinationByGender
