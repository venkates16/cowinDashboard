// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {obj} = props
  console.log(obj)

  return (
    <PieChart width="100%" height={300}>
      <Pie
        cx="50%"
        cy="55%"
        data={obj}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="100%"
        dataKey="count"
      >
        <Cell name="18-44" fill="#fecba6" />
        <Cell name="44-60" fill="#b3d23f" />
        <Cell name="Above 60" fill="#a44c9e" />
      </Pie>{' '}
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  )
}

export default VaccinationByAge
