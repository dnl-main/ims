"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "./pages/admin/page";
import Sidebar from "./component/Sidebar";

import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react"

import { SidebarItem } from "./component/Sidebar";

export default function Home() {
  const [status, setStatus] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`)
      .then((res) => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then((data) => {
        setStatus(data.message);
      })
      .catch(() => {
        setError("Could not connect to backend");
      });
  }, []);

  return (
    <>
      <div className="body-layout">
        <div className="sidebar">
          <Sidebar>
            <SidebarItem
              icon={ <LayoutDashboard size={20}/> }
              text="Dashboard"
              active
            />
            <SidebarItem
              icon={ <BarChart3 size={20}/> }
              text="Statistics"
              
            />
            <SidebarItem
              icon={ <UserCircle size={20}/> }
              text="Users"
              
            />
            <SidebarItem
              icon={ <Boxes size={20}/> }
              text="Inventory"
              
            />
            <SidebarItem
              icon={ <Package size={20}/> }
              text="Orders"
              alert
            />
            <SidebarItem
              icon={ <Receipt size={20}/> }
              text="Billings"
              
            />
            <hr className="my-3" />
            <SidebarItem
              icon={ <Settings size={20}/> }
              text="Settings"
              
            />
            <SidebarItem
              icon={ <LifeBuoy size={20}/> }
              text="Help"
              
            />
          </Sidebar>
        </div>
        <div className="main-content">
          <AdminDashboard/>
        </div>
      </div>
    </>
  );
}
