import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import UsbSharpIcon from '@mui/icons-material/UsbSharp';
import HubSharpIcon from '@mui/icons-material/HubSharp';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';

export const SidebarData = [
  {
    title: "Main Menu",
    icon:<HomeSharpIcon />,
    path: "/"
  },
  {
    title: "Dashboard",
    icon:<WidgetsSharpIcon />,
    path: "/dashboard"
  },
  {
    title: "Data Analytics",
    icon:<AssessmentSharpIcon />,
    path: "/dataAnalytics"
  },
  {
    title: "PDC Test",
    icon:<UsbSharpIcon />,
    path: "/pdcTest"
  },
  {
    title: "Material Test",
    icon:<HubSharpIcon />,
    path: "/materialTest"
  },
  {
    title: "House Keeping",
    icon:<StorageSharpIcon />,
    path: "/housekeeping"
  },
  {
    title: "Help",
    icon:<InfoSharpIcon />,
    path: "/help"
  }
]
