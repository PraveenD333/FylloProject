import React from 'react'
import LeastAvailableList from './LeastAvailableList'
import TopRequiredList from './TopRequiredList'
import LeastAvailablePieChart from './LeastAvailablePieChart'
import TopRequiredPieChart from './TopRequiredPieChart'

const TopFertilizers = () => {
  return (
    <div className='flex items-center justify-evenly gap-2 bg-white dark:bg-black w-full h-screen p-5'>
        <div>
        <LeastAvailablePieChart/>
        <LeastAvailableList/>
        </div>

        <div>
        <TopRequiredPieChart/>
        <TopRequiredList/>
        </div>


    </div>
  )
}

export default TopFertilizers