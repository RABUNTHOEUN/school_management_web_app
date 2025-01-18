import { BarChartComponent } from "@/components/admin/charts/bar-charts";
import { RecentTable } from "@/components/admin/tables/recent-table";
import { Input } from "@/components/ui/input";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export default function AdminDashboard() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <div className="flex-grow max-w-md ml-4">
                    <Input type="text" placeholder="Search..." className="w-full" />
                </div>
            </div>
            <hr />
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                <div className="w-full rounded-xl border p-4 bg-muted/50" >
                    <div className="justify-between items-start">
                        <div className="flex items-center justify-between mb-2">
                            <p>Total Revenue</p>
                            <DollarSign color="gray" />
                        </div>
                        <h2 className="text-3xl font-semibold">$45,231.89</h2>
                        <p className="text-sm text-gray-500">+20.1% from last month</p>
                    </div>
                </div>
                <div className="w-full rounded-xl border p-4 bg-muted/50" >
                    <div className="justify-between items-start">
                        <div className="flex items-center justify-between mb-2">
                            <p>Subscriptions</p>
                            <Users color="gray" />
                        </div>
                        <h2 className="text-3xl font-semibold">+2350</h2>
                        <p className="text-sm text-gray-500">+180.1% from last month</p>
                    </div>
                </div>
                <div className="w-full rounded-xl border p-4 bg-muted/50" >
                    <div className="justify-between items-start">
                        <div className="flex items-center justify-between mb-2">
                            <p>Sales</p>
                            <CreditCard color="gray" />
                        </div>
                        <h2 className="text-3xl font-semibold">+12,234</h2>
                        <p className="text-sm text-gray-500">+19% from last month</p>
                    </div>
                </div>
                <div className="w-full rounded-xl border p-4 bg-muted/50" >
                    <div className="justify-between items-start">
                        <div className="flex items-center justify-between mb-2">
                            <p>Active Now</p>
                            <Activity color="gray" />
                        </div>
                        <h2 className="text-3xl font-semibold">+573</h2>
                        <p className="text-sm text-gray-500">+201 since last hour</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <div className="rounded-xl bg-muted/50 w-1/2" >
                    <BarChartComponent />
                </div>
                <div className="rounded-xl border bg-muted/50 w-1/2" >
                    <RecentTable />
                </div>

            </div>
        </div>
    )
}