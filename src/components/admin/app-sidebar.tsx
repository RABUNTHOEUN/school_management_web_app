"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/admin/nav-main"
import { NavProjects } from "@/components/admin/nav-projects"
import { NavUser } from "@/components/admin/nav-user"
import { TeamSwitcher } from "@/components/admin/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Academics ",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Student Management",
          url: "/admin/students",
        },
        {
          title: "Teacher Management",
          url: "/admin/teachers",
        },
        {
          title: "Course Management",
          url: "/admin/course",
        },
        {
          title: "Class Management",
          url: "/admin/class-management",
        },
        {
          title: "Attendance Management",
          url: "/admin/attendance",
        },
        {
          title: "Grade Management",
          url: "/admin/grade",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Fee Management",
          url: "/admin/fee-management",
        },
      ],
    },
    {
      title: "Library",
      url: "/admin/teachers",
      icon: BookOpen,
      items: [
        {
          title: "Library Management",
          url: "/admin/library",
        },
      ],
    },
    {
      title: "Transport",
      url: "/admin/teachers",
      icon: Settings2,
      items: [
        {
          title: "Transport Management",
          url: "/admin/transport",
        },
      ],
    },
    {
      title: "Events",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Event Management",
          url: "/admin/events",
        },
      ],
    },
    {
      title: "Notifications",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Notifications",
          url: "/admin/notifications",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Reports",
          url: "/admin/reports",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Settings",
          url: "/admin/settings",
        },
      ],
    },
    {
      title: "User Management",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "User Management",
          url: "/admin/user-management",
        },
      ],
    },
    {
      title: "Logs",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Logs",
          url: "/admin/logs",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
