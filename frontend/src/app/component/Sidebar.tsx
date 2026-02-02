"use client"
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import './sidebar.css';
import React, { ReactNode, useContext, useState, createContext } from 'react'

interface SidebarContextType {
    expanded: boolean;
}

interface sidebarProps {
    children:ReactNode;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error ("useSidebar must be used within a SidebarProvider");
    }
    return context;
}

const Sidebar = ( {children}: sidebarProps ) => {
    const [expanded, setExpanded] = useState<boolean>(true)
  return (
    <SidebarContext.Provider value={{ expanded }}>
    <aside className='h-screen'>
        <nav className="h-full flex flex-col bg-white  shadow-md">
            <div className="p-4 pb-2 flex justify-between items-center sidebar-header">
                <h3 className={`sidebar-logo overflow-hidden transition-all ${
                    expanded ? "w-32" : "w-0"
                }`}>Centaim Inventory</h3>
                <button onClick={() => setExpanded(curr => !curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    {expanded ? <ChevronFirst/> : <ChevronLast/>}
                </button>
            </div>
                <ul className="flex-1 px-3">{children} </ul>
            <div className="border-t border-gray-3 00 flex p3">
                <div className="w-10 h-10 rounded-md profile-color">AJ</div>
                <div className={`
                    flex justify-between items-center
                    overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }
                `}>
                    <div className="leading-4">
                        <h6 className="font-semibold">Alen Jerru Ganotice</h6>
                        <span className="text-xs text-gray-600">sampleEmail@gmail.com</span>
                    </div>
                    <MoreVertical size={20}/>
                </div>
            </div>
        </nav>
    </aside>
    </SidebarContext.Provider>
  )
}

export default Sidebar

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}

export function SidebarItem({ icon, text, active = false, alert = false  }: SidebarItemProps) {
    const {expanded} = useSidebar();
    return (
        <li className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors
            ${
                active
                 ? "bg-gradient-to-tr from-teal-200 to-teal-100 text-teal-800"
                 : "hover:bg-teal-50 text-gray-600"
            }
        `}>
            { icon }
            <span className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}>{ text }</span>
            {alert && <div className={`absolute right-2 w-2 h-2 bg-teal-400 rounded-md ${
                expanded ? "" : "top-2"
            }`} />}
        </li>
    )
}