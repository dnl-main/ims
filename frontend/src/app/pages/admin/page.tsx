import React from 'react'
import Header from './component/Header'
import StockStatus from './component/StockStatus'

const AdminDashboard = () => {
  return (
    <>
      <div className="admin flex gap-5 w-full py-2 px-8">
        <div className="admin-main w-full flex-col flex gap-6">
          <div className="admin-header flex-1">
            <Header/>
          </div>
          <div className="admin-stock-status">
            <StockStatus />
          </div>
        </div>
        <div className="admin-right flex-1">
          <p>hello</p>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard