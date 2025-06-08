 import React from 'react'
import { data } from '../Data/fertilizerData'

const TopRequiredList = () => {
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
    <div className="bg-white dark:bg-black p-6 rounded shadow-md w-full max-w-xl mx-auto">
      <h3 className="text-xl text-center font-semibold text-black dark:text-white mb-4">
        Top 5 Most Required Fertilizers
      </h3>
      <ul className="space-y-2">
        {top5.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between bg-white dark:bg-gray-800 px-4 py-2 rounded"
          >
            <span className="font-medium text-blck dark:text-gray-200">{item.product}</span>
            <span className="text-blck dark:text-white">{item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopRequiredList
