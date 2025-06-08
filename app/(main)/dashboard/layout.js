import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'
const DashboardLayout = () => {
  return (
    <div className='mt-10 ml-3 '>
      <h1 className='text-4xl  gradient-title'>Dashboard</h1>



<Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="#9333ea"/>}>

      <DashboardPage/>



</Suspense>
    </div>
  )
}

export default DashboardLayout
