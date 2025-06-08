 import React from 'react'
import { data } from '../Data/fertilizerData'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB']

const LeastAvailablePieChart = () => {
  const least5 = Object.values(
    data.reduce((acc, cur) => {
      const key = cur.product
      acc[key] = acc[key] || { product: key, total: 0 }
      acc[key].total += Number(cur.availability)
      return acc
    }, {})
  )
    .sort((a, b) => a.total - b.total)
    .slice(0, 5)

  return (
    <div className="bg-white dark:bg-black p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-blck dark:text-white mb-6 text-center">
        Top 5 Least Available Fertilizers (Pie Chart)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={least5}
            dataKey="total"
            nameKey="product"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label>

            {least5.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" 
          height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LeastAvailablePieChart
