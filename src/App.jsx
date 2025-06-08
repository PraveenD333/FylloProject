import React from 'react'
import DataTable from './Components/DataTable'
import FertilizerChart from './Components/FertilizerChart'
import TopFertilizers from './Components/TopFertilizers'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'

const Sidebar = () => (
  <div className="w-52 h-screen bg-white text-black dark:bg-black dark:text-white pt-20 fixed top-0 left-0">
    {/* <h2 className="text-xl text-center font-semibold px-4 mb-4 ">Dashboard</h2> */}
    <nav className="space-y-6 px-4">
      <Link to="/" className="block text-center text-black dark:text-white hover:text-green-700 dark:hover:text-green-700">Products</Link>
      <Link to="/chart" className="block text-center text-black dark:text-white hover:text-green-700 dark:hover:text-green-700">FertilizerChart</Link>
      <Link to="/top-fertilizers" className="block text-center text-black dark:text-white hover:text-green-700 dark:hover:text-green-700">Top Fertilizers</Link>
    </nav>
  </div>
)
 
const App = () => {
  return (
    <Router>
      <div> 
        <Navbar />
 
        <div className="flex pt-16"> 
          <Sidebar />
 
          <div className="ml-52 w-full">
            <Routes>
              <Route path="/" element={<DataTable />} />
              <Route path="/chart" element={<FertilizerChart />} />
              <Route path="/top-fertilizers" element={<TopFertilizers />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
