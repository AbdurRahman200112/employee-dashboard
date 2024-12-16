import React from "react";
import { Home, Profile, Tables, Notifications, MessagesCard, TimeTracking, FullTimeEmployees, PartTimeEmployees, Approval, EmployeeMap, EmployeeDetails, Adhoc, ApprovalEdit, LiveMetrics, AddEmployee, EditEmployee } from "@/pages/dashboard";
import { SignIn, SignUp, ForgotPassword, ResetPassword } from "@/pages/auth";
import { CiGrid42 } from "react-icons/ci";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { HiChartBarSquare } from "react-icons/hi2";
import { PiMapPinLineFill } from "react-icons/pi";

const icon = {
  className: "w-5 h-5 text-inherit",
};

const logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  logout();
  localStorage.removeItem("token");
  navigate("/sign-in");
};

const routes = [
  {
    layout: "dashboard",
    title: "Dashboard",
    pages: [
      {
        icon: <CiGrid42 {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Employees",
        path: "/profile", // Assign a path for the parent route
        element: <Profile />,

        children: [
          {
            name: "Full Time",
            path: "/FullTimeEmployees",
            element: <FullTimeEmployees />,
          },
          {
            name: "Part Time",
            path: "/PartTimeEmployees",
            element: <PartTimeEmployees />,
          },
          {
            name: "Adhoc",
            path: "/adhoc",
            element: <Adhoc />,
          },
        ],
      },
      {
        icon: <HiChartBarSquare {...icon} />,
        name: "Live Metrics",
        path: "/live-metrics",
        element: <LiveMetrics />,
      },
      {
        icon: <PiMapPinLineFill {...icon} />,
        name: "Gps tracking",
        path: "/employeeMap",
        element: <EmployeeMap />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Management",
        path: null, // No direct path for the parent

        children: [
          {
            icon: <IoMdSettings {...icon} />,
            name: "Time Tracking",
            path: "/TimeTracking",
            element: <TimeTracking />,
          },
          {
            icon: <IoMdSettings {...icon} />,
            name: "Approval",
            path: "/approval",
            element: <Approval />,
          },
          {
            icon: <IoMdSettings {...icon} />,
            name: "Employee Details",
            path: "/employeeDetails",
            element: <EmployeeDetails />,
          },
          {
            icon: <IoMdSettings {...icon} />,
            name: "Add Employee",
            path: "/AddEmployee",
            element: <AddEmployee />,
          },
        ],
      },
      {
        icon: <FaRegUserCircle {...icon} />,
        name: "Profile",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Settings",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Message Card",
        path: "/messagesCard",
        element: <MessagesCard />,
      },
    
      {
        icon: <IoMdSettings {...icon} />,
        name: "Full Time",
        path: "/FullTimeEmployees",
        element: <FullTimeEmployees />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Part Time",
        path: "/PartTimeEmployees",
        element: <PartTimeEmployees />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Time Tracking",
        path: "/TimeTracking",
        element: <TimeTracking />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Approval",
        path: "/approval",
        element: <Approval />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Gps tracking",
        path: "/employeeMap",
        element: <EmployeeMap />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Employee Details",
        path: "/employeeDetails",
        element: <EmployeeDetails />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Adhoc",
        path: "/adhoc",
        element: <Adhoc />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Approval Edit",
        path: "/approval/edit/:id",
        element: <ApprovalEdit />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Add Employee",
        path: "/AddEmployee",
        element: <AddEmployee />,
      },

        {
        icon: <IoMdSettings {...icon} />,
        name: "Edot Employee",
        path:"/edit-employee/:id",
        
        element: <EditEmployee />,
      },

      // <Route path="/dashboard/employeeDetails/edit/:id" element={<EditEmployee />} />

    ],
  },
  {
    layout: "auth",
    title: "",
    pages: [
      {
        icon: <CiLogout {...icon} />,
        name: "Logout",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <CiLogout {...icon} />,
        name: "Sign Up",
        path: "/sign-up",
        element: <SignUp/>,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Forgot Password",
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        icon: <IoMdSettings {...icon} />,
        name: "Reset Password",
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      
    ],
  },
];

export default routes;