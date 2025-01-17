export default function AdminDashboard() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="border border-gray-300 aspect-video rounded-xl bg-muted/50" />
                <div className="border border-gray-300 aspect-video rounded-xl bg-muted/50" />
                <div className="border border-gray-300 aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="border border-gray-300 min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
    )
}