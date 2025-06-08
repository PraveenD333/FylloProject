 import React, { useState } from "react"
import { data } from "../Data/fertilizerData"
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend
} from "recharts"

const ProductsBarChart = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const states = [...new Set(data.map(d => d.state))]
  const years = [...new Set(data.map(d => d.year))]

  const [statevalue, setStatevalue] = useState(states[0])
  const [monthvalue, setMonthvalue] = useState(months[0])
  const [yearvalue, setYearvalue] = useState(years[0])

  const handleMonthChange = (e) => setMonthvalue(e.target.value)
  const handleStateChange = (e) => setStatevalue(e.target.value)
  const handleYearChange = (e) => setYearvalue(e.target.value)

  const chartData = data
    .filter(d =>
      d.state === statevalue &&
      d.month === monthvalue &&
      d.year === yearvalue
    )
    .map(d => ({
      product: d.product,
      requirement: Number(d.requirement),
      availability: Number(d.availability)
    }))

  return (
    <div className=" w-full h-screen  bg-white text-black dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Fertilizer Requirement and Availability
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Select Month:</label>
          <select
            value={monthvalue}
            onChange={handleMonthChange}
            className="p-2 border-2 border-black dark:border-white rounded w-48 bg-white text-black dark:bg-black dark:text-white">
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Select State:</label>
          <select
            value={statevalue}
            onChange={handleStateChange}
            className="p-2 border-2 border-black dark:border-white rounded w-64 bg-white text-black dark:bg-black dark:text-white"
          >
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Select Year:</label>
          <select
            value={yearvalue}
            onChange={handleYearChange}
            className="p-2 border-2 border-black dark:border-white rounded w-32 bg-white text-black dark:bg-black dark:text-white"
          >
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {chartData.length === 0 ? (
        <p className="text-center text-red-500">No data available to show.</p>) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="requirement" fill="#3B82F6" />
            <Bar dataKey="availability" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default ProductsBarChart
