
import { getAccountwithtransactions } from '@/actions/account'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
import {TransactionTable} from './_components/transtable'
import { AccountChart } from './_components/account-chart'
const AccountPage = async ({params}) => {

  const accountData=await getAccountwithtransactions(params.id) 

  if(!accountData){
        notFound()
  }
  const{transactions,...account}=accountData;










return (
  <div className="m-10 flex flex-col min-h-full">
    {/* header */}
 
    <div className="flex justify-between items-center">
      <div className="flex mx-5 flex-col gap-0 leading-none">
        <h1 className="gradient-title text-4xl font-semibold m-0 leading-none">
          {account.name}
        </h1>
        <p className="text-sm text-gray-500 m-0 leading-none">
          {account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()}
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">₹{parseFloat(account.balance).toFixed(2)}</h1>
        <p className="text-sm text-gray-500">
          {account._count.transactions} transactions
        </p>
      </div>
    </div>
    <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
      <AccountChart   transactions={transactions} />
    </Suspense>

    {/* Table */}
    <div className="flex-1">
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  </div>
);
}

export default AccountPage 