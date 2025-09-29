"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  TrendingUp,
  Trophy,
  MapPin,
  Calendar,
  Search,
  Filter,
  BarChart3,
  Activity,
  Medal,
  Target,
  Star,
  UserSearch,
  Settings,
  Plus,
  AlertCircle,
  FileText,
  Download,
  Shield,
  UserCheck,
  Database,
  Lock,
  UserCog,
  Building,
} from "lucide-react"

type Athlete = {
  id: number
  name: string
  age: number
  gender: string
  state: string
  district: string
  sport: string
  specialization: string
  performanceScore: number
  tier: string
  coach: string
  academy: string
  achievements: string[]
  personalBest: string
  avatar: string
}

export default function SportsDashboard() {
  const [selectedState, setSelectedState] = useState("all")
  const [selectedSport, setSelectedSport] = useState("all")
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for KPIs
  const kpiData = [
    {
      title: "Total Registered Athletes",
      value: "24,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-chart-1",
    },
    {
      title: "Active Athletes This Month",
      value: "18,293",
      change: "+8.2%",
      trend: "up",
      icon: Activity,
      color: "text-chart-2",
    },
    {
      title: "Assessments Completed",
      value: "3,456",
      change: "+15.3%",
      trend: "up",
      icon: Target,
      color: "text-chart-3",
    },
    {
      title: "Trial Candidates",
      value: "892",
      change: "+22.1%",
      trend: "up",
      icon: Medal,
      color: "text-chart-4",
    },
  ]

  // Mock data for top performing states
  const topStates = [
    { name: "Maharashtra", athletes: 3247, performance: 92 },
    { name: "Karnataka", athletes: 2891, performance: 89 },
    { name: "Tamil Nadu", athletes: 2654, performance: 87 },
    { name: "Kerala", athletes: 2103, performance: 85 },
    { name: "Punjab", athletes: 1987, performance: 83 },
  ]

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      athlete: "Priya Sharma",
      action: "Qualified for State Trials",
      sport: "Sit and Reach",
      time: "2 hours ago",
      avatar: "/female-athlete.png",
    },
    {
      id: 2,
      athlete: "Rahul Kumar",
      action: "New Personal Best",
      sport: "vertical jump",
      time: "4 hours ago",
      avatar: "/Vertical-Jump-2.webp",
    },
    {
      id: 3,
      athlete: "Anita Patel",
      action: "Assessment Completed",
      sport: "shuttle run",
      time: "6 hours ago",
      avatar: "/female-badminton.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-8 w-8 text-accent" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Sports Talent Management</h1>
                  <p className="text-sm text-muted-foreground">Government of India Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Avatar>
                <AvatarImage src="/admin-user-interface.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent h-12">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="athletes" className="flex items-center gap-2">
                <UserSearch className="h-4 w-4" />
                Athletes
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Admin
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Tabs Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="overview" className="mt-0">
          <div className="container mx-auto px-6 py-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {kpiData.map((kpi, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                    <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-1">{kpi.value}</div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500 font-medium">{kpi.change}</span>
                      <span className="text-sm text-muted-foreground">from last month</span>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Interactive Map Section */}
              <div className="lg:col-span-2">
                <Card className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">Athlete Distribution Map</CardTitle>
                        <CardDescription>Regional participation heatmap across India</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Select value={selectedSport} onValueChange={setSelectedSport}>
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Sport" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Sports</SelectItem>
                            <SelectItem value="Sit and Reach">Sit and Reach</SelectItem>
                            <SelectItem value="Vertical Jump">Vertical Jump</SelectItem>
                            <SelectItem value="Broad Jump">Broad Jump</SelectItem>
                            <SelectItem value="Shuttle Run">Shuttle Run</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Placeholder for interactive map */}
                    <div className="h-96 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-chart-2/5 to-chart-3/10" />
                      <div className="text-center z-10">
                        <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">Interactive India Map</h3>
                        <p className="text-muted-foreground">Click on states to view detailed athlete statistics</p>
                      </div>
                      {/* Mock state indicators */}
                      <div className="absolute top-20 left-32 w-3 h-3 bg-chart-1 rounded-full animate-pulse" />
                      <div
                        className="absolute top-32 right-40 w-4 h-4 bg-chart-2 rounded-full animate-pulse"
                        style={{ animationDelay: "500ms" }}
                      />
                      <div
                        className="absolute bottom-32 left-48 w-2 h-2 bg-chart-3 rounded-full animate-pulse"
                        style={{ animationDelay: "1000ms" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Performing States */}
              <div>
                <Card className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Top Performing States</CardTitle>
                    <CardDescription>Based on athlete performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topStates.map((state, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{state.name}</p>
                            <p className="text-sm text-muted-foreground">{state.athletes.toLocaleString()} athletes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <Progress value={state.performance} className="w-16 h-2" />
                            <span className="text-sm font-medium text-foreground">{state.performance}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="mt-6 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
                    <CardDescription>Latest athlete achievements and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {activity.athlete
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{activity.athlete}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {activity.sport}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="mt-8 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                <CardDescription>Frequently used dashboard functions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                    onClick={() => setActiveTab("athletes")}
                  >
                    <Search className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">Search Athletes</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                    onClick={() => setActiveTab("analytics")}
                  >
                    <BarChart3 className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">View Analytics</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                    onClick={() => setActiveTab("events")}
                  >
                    <Calendar className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">Schedule Trials</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                  >
                    <Star className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">Talent Tagging</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Athlete Management Tab Content */}
        <TabsContent value="athletes" className="mt-0">
          <AthleteManagement />
        </TabsContent>

        {/* Analytics Tab Content */}
        <TabsContent value="analytics" className="mt-0">
          <PerformanceAnalytics />
        </TabsContent>

        {/* Events Tab Content */}
        <TabsContent value="events" className="mt-0">
          <EventsManagement />
        </TabsContent>

        {/* Replaced placeholder admin content with comprehensive AdminReports component */}
        {/* Admin Tab Content */}
        <TabsContent value="admin" className="mt-0">
          <AdminReports />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AdminReports() {
  const [selectedView, setSelectedView] = useState("users")
  const [selectedReportType, setSelectedReportType] = useState("performance")

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      email: "rajesh.kumar@gov.in",
      role: "Super Admin",
      department: "Ministry of Sports",
      lastLogin: "2024-01-15 09:30",
      status: "Active",
      permissions: ["Full Access", "User Management", "Data Export", "System Config"],
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@maharashtra.gov.in",
      role: "Regional Official",
      department: "Maharashtra Sports Authority",
      lastLogin: "2024-01-15 14:22",
      status: "Active",
      permissions: ["Regional Data", "Athlete Management", "Event Management"],
    },
    {
      id: 3,
      name: "Coach Sunil Patel",
      email: "sunil.patel@academy.com",
      role: "Coach",
      department: "Mumbai Sports Academy",
      lastLogin: "2024-01-14 18:45",
      status: "Active",
      permissions: ["Athlete Profiles", "Performance Data", "Training Records"],
    },
    {
      id: 4,
      name: "Anita Verma",
      email: "anita.verma@karnataka.gov.in",
      role: "Regional Official",
      department: "Karnataka Sports Board",
      lastLogin: "2024-01-13 11:15",
      status: "Inactive",
      permissions: ["Regional Data", "Athlete Management"],
    },
  ]

  // Mock audit logs
  const auditLogs = [
    {
      id: 1,
      timestamp: "2024-01-15 10:30:45",
      user: "Dr. Rajesh Kumar",
      action: "Exported athlete performance report",
      resource: "Performance Analytics",
      ipAddress: "192.168.1.100",
      status: "Success",
    },
    {
      id: 2,
      timestamp: "2024-01-15 09:15:22",
      user: "Priya Sharma",
      action: "Updated athlete profile",
      resource: "Athlete ID: 1247",
      ipAddress: "10.0.0.45",
      status: "Success",
    },
    {
      id: 3,
      timestamp: "2024-01-15 08:45:10",
      user: "Coach Sunil Patel",
      action: "Attempted to access admin panel",
      resource: "User Management",
      ipAddress: "172.16.0.23",
      status: "Denied",
    },
    {
      id: 4,
      timestamp: "2024-01-14 16:20:33",
      user: "System",
      action: "Automated backup completed",
      resource: "Database Backup",
      ipAddress: "127.0.0.1",
      status: "Success",
    },
  ]

  // Mock reports data
  const availableReports = [
    {
      id: 1,
      name: "State-wise Athlete Performance",
      description: "Comprehensive performance analysis by state and district",
      type: "Performance",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-14",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Gender Participation Analysis",
      description: "Gender distribution across sports and regions",
      type: "Demographics",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-13",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Sport-specific Talent Pipeline",
      description: "Talent identification and development pipeline by sport",
      type: "Talent",
      format: ["PDF", "Excel", "CSV"],
      lastGenerated: "2024-01-12",
      size: "3.1 MB",
    },
    {
      id: 4,
      name: "Coach Performance Metrics",
      description: "Coach effectiveness and athlete development statistics",
      type: "Coaching",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-11",
      size: "1.5 MB",
    },
    {
      id: 5,
      name: "Infrastructure Utilization Report",
      description: "Sports facility usage and capacity analysis",
      type: "Infrastructure",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-10",
      size: "2.2 MB",
    },
  ]

  const getRoleColor = (role : string) => {
    switch (role) {
      case "Super Admin":
        return "bg-red-100 text-red-800 border-red-200"
      case "Regional Official":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Coach":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: String) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAuditStatusColor = (status : String) => {
    switch (status) {
      case "Success":
        return "text-green-600"
      case "Denied":
        return "text-red-600"
      case "Warning":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin & Reports</h1>
          <p className="text-muted-foreground">System administration and comprehensive reporting</p>
        </div>
        <div className="flex gap-4">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add User
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-8">
        <Button
          variant={selectedView === "users" ? "default" : "outline"}
          onClick={() => setSelectedView("users")}
          className="flex items-center gap-2"
        >
          <UserCog className="h-4 w-4" />
          User Management
        </Button>
        <Button
          variant={selectedView === "reports" ? "default" : "outline"}
          onClick={() => setSelectedView("reports")}
          className="flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          Reports
        </Button>
        <Button
          variant={selectedView === "security" ? "default" : "outline"}
          onClick={() => setSelectedView("security")}
          className="flex items-center gap-2"
        >
          <Shield className="h-4 w-4" />
          Security & Audit
        </Button>
        <Button
          variant={selectedView === "system" ? "default" : "outline"}
          onClick={() => setSelectedView("system")}
          className="flex items-center gap-2"
        >
          <Database className="h-4 w-4" />
          System Settings
        </Button>
      </div>

      {/* User Management View */}
      {selectedView === "users" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">User Role Management</CardTitle>
              <CardDescription>Manage user access, roles, and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-sm text-muted-foreground">{user.department}</p>
                          <p className="text-xs text-muted-foreground mt-1">Last login: {user.lastLogin}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Permissions</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Edit Permissions
                      </Button>
                      <Button variant="outline" size="sm">
                        <Lock className="h-4 w-4 mr-2" />
                        Reset Password
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={user.status === "Active" ? "text-red-600" : "text-green-600"}
                      >
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reports View */}
      {selectedView === "reports" && (
        <div className="space-y-6">
          {/* Report Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Generate Reports</CardTitle>
              <CardDescription>Create and download comprehensive reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Select value={selectedReportType} onValueChange={setSelectedReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Report Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="performance">Performance Reports</SelectItem>
                    <SelectItem value="demographics">Demographics</SelectItem>
                    <SelectItem value="talent">Talent Pipeline</SelectItem>
                    <SelectItem value="coaching">Coaching Metrics</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Available Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Available Reports</CardTitle>
              <CardDescription>Download previously generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableReports.map((report) => (
                  <div key={report.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{report.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Type: {report.type}</span>
                          <span>Size: {report.size}</span>
                          <span>Generated: {new Date(report.lastGenerated).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {report.format.map((format) => (
                          <Button
                            key={format}
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 bg-transparent"
                          >
                            <Download className="h-3 w-3" />
                            {format}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Data Sharing</CardTitle>
              <CardDescription>Share data with ministries and sports federations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Ministry Partners</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Ministry of Youth Affairs</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Share Data
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Ministry of Education</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Share Data
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Sports Federations</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Athletics Federation of India</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Share Data
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Vertical Jump Federation of India</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Share Data
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">System Maintenance</CardTitle>
              <CardDescription>System maintenance and monitoring tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                >
                  <Database className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">Database Backup</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                >
                  <Shield className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">Security Scan</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                >
                  <Activity className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">System Health</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-accent/5 hover:border-accent transition-all duration-200 bg-transparent"
                >
                  <FileText className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">Export Logs</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

// Athlete Management Component
function AthleteManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("all")
  const [selectedSport, setSelectedSport] = useState("all")
  const [selectedTier, setSelectedTier] = useState("all")
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null)
  // Mock athlete data
  const athletes = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 19,
      gender: "Female",
      state: "Maharashtra",
      district: "Mumbai",
      sport: "Sit and Reach",
      specialization: "100m Sprint",
      performanceScore: 92,
      tier: "High Potential",
      coach: "Rajesh Kumar",
      academy: "Mumbai Sports Academy",
      achievements: ["State Champion 2023", "National Junior Record"],
      personalBest: "11.24s",
      avatar: "/female-athlete.png",
    },
    {
      id: 2,
      name: "Rahul Patel",
      age: 21,
      gender: "Male",
      state: "Gujarat",
      district: "Ahmedabad",
      sport: "Vertical Jump",
      specialization: "Freestyle",
      performanceScore: 88,
      tier: "Trial Candidate",
      coach: "Sunita Verma",
      academy: "Gujarat  Center",
      achievements: ["Regional Champion 2023", "University Games Gold"],
      personalBest: "22.45s (50m)",
      avatar: "/Vertical-Jump-2.webp",
    },
    {
      id: 3,
      name: "Anita Singh",
      age: 18,
      gender: "Female",
      state: "Punjab",
      district: "Ludhiana",
      sport: "Shuttle Run",
      specialization: "Singles",
      performanceScore: 85,
      tier: "Needs Improvement",
      coach: "Vikram Singh",
      academy: "Punjab  Academy",
      achievements: ["District Champion 2023"],
      personalBest: "Rank 45 National",
      avatar: "/female-badminton.jpg",
    },
  ]

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "all" || athlete.state === selectedState
    const matchesSport = selectedSport === "all" || athlete.sport === selectedSport
    const matchesTier = selectedTier === "all" || athlete.tier === selectedTier

    return matchesSearch && matchesState && matchesSport && matchesTier
  })

  const getTierColor = (tier:string) => {
    switch (tier) {
      case "High Potential":
        return "bg-green-100 text-green-800 border-green-200"
      case "Trial Candidate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Needs Improvement":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Athlete Management</h1>
          <p className="text-muted-foreground">Search, filter, and manage athlete profiles</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Athlete
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search and Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Search & Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search athletes or sports..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">State</label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="Punjab">Punjab</SelectItem>
                      <SelectItem value="Karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Sport</label>
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      <SelectItem value="Sit and Reach">Sit and Reach</SelectItem>
                      <SelectItem value="Vertical Jump">Vertical Jump</SelectItem>
                      <SelectItem value="Broad Jump">Broad Jump</SelectItem>
                      <SelectItem value="Shuttle Run">Shuttle Run</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Performance Tier</label>
                  <Select value={selectedTier} onValueChange={setSelectedTier}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tiers</SelectItem>
                      <SelectItem value="High Potential">High Potential</SelectItem>
                      <SelectItem value="Trial Candidate">Trial Candidate</SelectItem>
                      <SelectItem value="Needs Improvement">Needs Improvement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredAthletes.length} of {athletes.length} athletes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Athlete List and Details */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Athlete List */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Athletes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredAthletes.map((athlete) => (
                    <div
                      key={athlete.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedAthlete?.id === athlete.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => setSelectedAthlete(athlete)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={athlete.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {athlete.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{athlete.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {athlete.sport} • {athlete.specialization}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {athlete.state}, {athlete.district}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getTierColor(athlete.tier)}>{athlete.tier}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="text-xs font-medium">{athlete.performanceScore}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Athlete Details */}
            <div>
              {selectedAthlete ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Athlete Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarImage src={selectedAthlete.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-lg">
                          {selectedAthlete.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold text-foreground">{selectedAthlete.name}</h3>
                      <p className="text-muted-foreground">
                        {selectedAthlete.sport} • {selectedAthlete.specialization}
                      </p>
                      <Badge className={getTierColor(selectedAthlete.tier)}>{selectedAthlete.tier}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Age</label>
                        <p className="text-foreground">{selectedAthlete.age} years</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Gender</label>
                        <p className="text-foreground">{selectedAthlete.gender}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">State</label>
                        <p className="text-foreground">{selectedAthlete.state}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">District</label>
                        <p className="text-foreground">{selectedAthlete.district}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Performance Score</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Progress value={selectedAthlete.performanceScore} className="flex-1" />
                        <span className="text-sm font-medium">{selectedAthlete.performanceScore}/100</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Personal Best</label>
                      <p className="text-foreground font-semibold">{selectedAthlete.personalBest}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Coach & Academy</label>
                      <p className="text-foreground">{selectedAthlete.coach}</p>
                      <p className="text-sm text-muted-foreground">{selectedAthlete.academy}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Achievements</label>
                      <div className="space-y-1 mt-1">
                        {selectedAthlete.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Edit Profile</Button>
                      <Button variant="outline">View Analytics</Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <UserSearch className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Select an Athlete</h3>
                      <p className="text-muted-foreground">
                        Choose an athlete from the list to view their detailed profile
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Performance Analytics Component
function PerformanceAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month")
  const [selectedSport, setSelectedSport] = useState("all")

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Performance Analytics</h1>
          <p className="text-muted-foreground">AI-powered insights and performance trends</p>
        </div>
        <div className="flex gap-4">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedSport} onValueChange={setSelectedSport}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sports</SelectItem>
              <SelectItem value="Sit and Reach">Sit and Reach</SelectItem>
              <SelectItem value="Vertical Jump">Vertical Jump</SelectItem>
              <SelectItem value="badminton">Badminton</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-8">
        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              AI Insights
            </CardTitle>
            <CardDescription>Automated analysis and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Rising Stars</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">Priya Sharma (Sit and Reach)</p>
                      <p className="text-sm text-green-600">Performance improved by 15% this month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">Rahul Patel (Vertical Jump)</p>
                      <p className="text-sm text-green-600">Consistent improvement over 3 months</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Underperforming Regions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium text-orange-800">Rajasthan - Vertical Jump</p>
                      <p className="text-sm text-orange-600">20% below national average</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium text-orange-800">Odisha - Athletics</p>
                      <p className="text-sm text-orange-600">Declining participation rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Sport-wise Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sit and Reach</span>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-24" />
                    <span className="text-sm font-medium">85%</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Verical Jump</span>
                  <div className="flex items-center gap-2">
                    <Progress value={78} className="w-24" />
                    <span className="text-sm font-medium">78%</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Broad Jump</span>
                  <div className="flex items-center gap-2">
                    <Progress value={72} className="w-24" />
                    <span className="text-sm font-medium">72%</span>
                    <Activity className="h-4 w-4 text-orange-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Shuttle Run</span>
                  <div className="flex items-center gap-2">
                    <Progress value={68} className="w-24" />
                    <span className="text-sm font-medium">68%</span>
                    <Activity className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Benchmark Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">National Average</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">International Benchmark</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Our Performance</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Drill Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Drill & Test Analytics</CardTitle>
            <CardDescription>Performance distribution across different tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">100m Sprint</h3>
                <div className="text-2xl font-bold text-accent mb-1">12.45s</div>
                <div className="text-sm text-muted-foreground">Average Time</div>
                <Progress value={72} className="mt-2" />
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Long Jump</h3>
                <div className="text-2xl font-bold text-accent mb-1">5.8m</div>
                <div className="text-sm text-muted-foreground">Average Distance</div>
                <Progress value={68} className="mt-2" />
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Endurance</h3>
                <div className="text-2xl font-bold text-accent mb-1">15:30</div>
                <div className="text-sm text-muted-foreground">5K Average</div>
                <Progress value={75} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Events Management Component
function EventsManagement() {
  const [selectedView, setSelectedView] = useState("calendar")

  const events = [
    {
      id: 1,
      name: "National Athletics Trials",
      date: "2024-02-15",
      location: "New Delhi",
      sport: "Sit and Reach",
      level: "National",
      registered: 245,
      capacity: 300,
      status: "Open",
    },
    {
      id: 2,
      name: "State shuttle run Championship",
      date: "2024-02-20",
      location: "Mumbai",
      sport: "shuttle run",
      level: "State",
      registered: 180,
      capacity: 200,
      status: "Almost Full",
    },
    {
      id: 3,
      name: "Regional Vertical Jumping Trials",
      date: "2024-02-25",
      location: "Bangalore",
      sport: "Vertical Jumping",
      level: "Regional",
      registered: 95,
      capacity: 150,
      status: "Open",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events & Trials Management</h1>
          <p className="text-muted-foreground">Manage trials, events, and athlete shortlisting</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-8">
        <Button
          variant={selectedView === "calendar" ? "default" : "outline"}
          onClick={() => setSelectedView("calendar")}
          className="flex items-center gap-2"
        >
          <Calendar className="h-4 w-4" />
          Calendar View
        </Button>
        <Button
          variant={selectedView === "shortlist" ? "default" : "outline"}
          onClick={() => setSelectedView("shortlist")}
          className="flex items-center gap-2"
        >
          <UserSearch className="h-4 w-4" />
          Athlete Shortlisting
        </Button>
        <Button
          variant={selectedView === "attendance" ? "default" : "outline"}
          onClick={() => setSelectedView("attendance")}
          className="flex items-center gap-2"
        >
          <Users className="h-4 w-4" />
          Attendance Tracking
        </Button>
      </div>

      {/* Calendar View */}
      {selectedView === "calendar" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.location} • {new Date(event.date).toLocaleDateString()}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{event.sport}</Badge>
                          <Badge variant="outline">{event.level}</Badge>
                        </div>
                      </div>
                      <Badge
                        className={
                          event.status === "Open" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="font-medium">{event.registered}</span>
                          <span className="text-muted-foreground">/{event.capacity} registered</span>
                        </div>
                        <Progress value={(event.registered / event.capacity) * 100} className="w-24" />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Manage</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Event Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-sm text-muted-foreground">Active Events</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-accent">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Registrations</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-accent">89%</div>
                  <div className="text-sm text-muted-foreground">Attendance Rate</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Shortlisting View */}
      {selectedView === "shortlist" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Athlete Shortlisting Tool</CardTitle>
              <CardDescription>Auto-suggest and manually review athletes for events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Auto-Suggested Athletes</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/female-athlete.png" />
                          <AvatarFallback>PS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-green-800">Priya Sharma</p>
                          <p className="text-sm text-green-600">Sit and Reach • Score: 92</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Approve
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/Vertical-Jump-2.webp" />
                          <AvatarFallback>RP</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-green-800">Rahul Patel</p>
                          <p className="text-sm text-green-600">Vertical Jump • Score: 88</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Manual Review Queue</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 border border-orange-200">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/female-badminton.jpg" />
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-orange-800">Anita Singh</p>
                          <p className="text-sm text-orange-600">Badminton • Score: 85</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          Reject
                        </Button>
                        <Button size="sm">Approve</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
