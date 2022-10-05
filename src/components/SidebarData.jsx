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
    page: "/MainMenu"
  },
  {
    title: "Dashboard",
    icon:<WidgetsSharpIcon />,
    page: "/Dashboard"
  },
  {
    title: "Data Analytics",
    icon:<AssessmentSharpIcon />,
    page: "/DataAnalytics"
  },
  {
    title: "PDC Test",
    icon:<UsbSharpIcon />,
    page: "/MainMenu"
  },
  {
    title: "Material Test",
    icon:<HubSharpIcon />,
    page: "/PDCTest"
  },
  {
    title: "House Keeping",
    icon:<StorageSharpIcon />,
    page: "/Housekeeping"
  },
  {
    title: "Help",
    icon:<InfoSharpIcon />,
    page: "/Help"
  }
]
