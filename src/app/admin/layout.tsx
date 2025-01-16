// src/app/admin/layout.tsx

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-layout">
            <header>Admin Dashboard</header>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Products</li>
                </ul>
            </nav>

            <main>{children}</main>

        </div>
    );
}