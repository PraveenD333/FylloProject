 import React from 'react'
import { data } from '../Data/fertilizerData'
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer
} from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A']

const TopRequiredPieChart = () => {
  const top5 = Object.values(
    data.reduce((acc, cur) => {
      const key = cur.product
      acc[key] = acc[key] || { product: key, total: 0 }
      acc[key].total += Number(cur.requirement)
      return acc
    }, {})
  )
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)

  return (
    <div className="bg-white dark:bg-black p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-6 text-center">
        Top 5 Most Required Fertilizers (Pie Chart)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={top5}
            dataKey="total"
            nameKey="product"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={{ fill: '#000', ...(window.matchMedia('(prefers-color-scheme: dark)').matches && { fill: '#fff' }) }} // fallback for labels
          >
            {top5.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', borderRadius: 8, border: 'none' }}
            itemStyle={{ color: 'white' }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ color: 'inherit' }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopRequiredPieChart
