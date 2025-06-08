import React, { useState } from 'react'
import { data } from '../Data/fertilizerData'
import { Legend,Line,LineChart,Tooltip,XAxis,YAxis,ResponsiveContainer} from 'recharts'
import ProductsBarChart from './ProductsBarChart'

const FertilizerChart = () => {
  // Get all unique product names from the data
  const products = [...new Set(data.map(d => d.product))]

  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const handleChange = (e) => setSelectedProduct(e.target.value)

  // Filter and format data for selected product
  
  const chartData = data.filter(d => d.product === selectedProduct)
    .map(d => ({
      month: `${d.month} ${d.year}`,
      requirement: Number(d.requirement),
      availability: Number(d.availability)
    }))

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white w-full h-[100vh]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
        Fertilizer Requirement and Availability
      </h2>

      <div className="mb-9 p-5">
        <label className="block mb-1 text-black  dark:text-white font-medium">Select Product:</label>
        <select
          value={selectedProduct}
          onChange={handleChange}
          aria-label="Select fertilizer product"
          className="p-2  border rounded w-full max-w-xs text-center bg-white text-black dark:bg-black dark:text-white">

            {products.map((product) => (
            <option key={product} value={product}>{product}</option>))}
        </select>
      </div>

      {chartData.length > 0 ? (
        <ResponsiveContainer width="93%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="requirement"
              stroke="#8884d8"
              strokeWidth={2}/>
            <Line
              type="monotone"
              dataKey="availability"
              stroke="#82ca9d"
              strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>) : (
        <p className="text-center text-red-500">No data available for this product.</p>
      )}
      <ProductsBarChart/>
    </div>
  )
}

export default FertilizerChart
