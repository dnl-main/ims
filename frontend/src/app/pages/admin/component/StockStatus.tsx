import React from 'react'

import './stockStatus.css';
import { Logs, ChartLine, TriangleAlert } from 'lucide-react';

const StockStatus = () => {
  return (
    <div className="flex justify-around">
        <div className="stock-card bg-white rounded-md">
            <div className="stock-card-top flex justify-between w-3xs py-2 px-2">
                <p className='font-semibold card-title'>Total Products</p>
                <p className="semibold card-title icon opacity-40"><Logs/></p>
            </div>
            <div className="stock-card-bottom px-2 flex justify-between">
                <p className='font-semibold text-2xl'>5,320</p>
                <p className=' status-good font-thing text-sm py-1 px-1 rounded-md flex gap-2 items-center'> <ChartLine/>Good</p>
            </div>
        </div>
        <div className="stock-card bg-white rounded-md">
            <div className="stock-card-top flex justify-between w-3xs py-2 px-2">
                <p className='font-semibold card-title w-3xs '>Available Stock</p>
                <p className="semibold card-title icon opacity-40"><Logs/></p>
            </div>
            <div className="stock-card-bottom px-2 flex justify-between">
                <p className='font-semibold text-2xl'>3,120</p>
                <p className=' status-good font-thing text-sm py-1 px-1 rounded-md flex gap-2 items-center'> <ChartLine/>Good</p>
            </div>
        </div>
        <div className="stock-card bg-white rounded-md">
           <div className="stock-card-top flex justify-between w-3xs py-2 px-2">
                <p className='font-semibold card-title w-3xs '>Low Stock</p>
                <p className="semibold card-title icon opacity-40"><Logs/></p>
            </div>
            <div className="stock-card-bottom px-2 flex justify-between">
                <p className='font-semibold text-2xl'>200</p>
                <p className=' status-good font-thing text-sm py-1 px-1 rounded-md flex gap-2 items-center'> <ChartLine/> Good</p>
            </div>
        </div>
        <div className="stock-card bg-white rounded-md">
            <div className="stock-card-top flex justify-between w-3xs py-2 px-2">
                <p className='font-semibold card-title w-3xs '>Out of Stock</p>
                <p className="semibold card-title icon opacity-40"><Logs/></p>
            </div>
            <div className="stock-card-bottom px-2 flex justify-between">
                <p className='font-semibold text-2xl'>1,000</p>
                <p className=' status-bad font-thing text-sm py-1 px-1 rounded-md flex gap-2 items-center'> <TriangleAlert /> Attention</p>
            </div>
        </div>
    </div>
  )
}

export default StockStatus