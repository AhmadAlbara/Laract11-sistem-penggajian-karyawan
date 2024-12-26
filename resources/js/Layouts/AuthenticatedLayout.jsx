import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Dropdown from "@/Components/Elements/Dropdown";
import ApplicationLogo from "@/Components/Elements/ApplicationLogo";

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to determine if the link is active
    const isActiveLink = (routeName) => {
        return route().current(routeName)
            ? "bg-primary text-white"
            : "text-gray-700 hover:bg-gray-200";
    };

    return (
        <div className="">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-10 w-64  px-4 h-screen pt-20 bg-white border-r border-gray-200 transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
                <ul className="space-y-2 font-medium">
                    <Link
                        href={route("dashboard")}
                        className={`block px-4 py-2 rounded ${isActiveLink(
                            "dashboard"
                        )}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route("employees.index")}
                        className={`block px-4 py-2 rounded ${isActiveLink(
                            "employees.*"
                        )}`}
                    >
                        Karyawan
                    </Link>
                    <Link
                        href={route("attendances.index")}
                        className={`block px-4 py-2 rounded ${isActiveLink(
                            "attendances.*"
                        )}`}
                    >
                        Absensi
                    </Link>
                    <Link
                        href={route("payrolls.index")} // Tambahkan link untuk Payroll
                        className={`block px-4 py-2 rounded ${isActiveLink(
                            "payrolls.*"
                        )}`}
                    >
                        Daftar gaji
                    </Link>
                    {/* Add more links as needed */}
                </ul>
            </aside>

            {/* Navbar */}
            <nav className="fixed top-0 z-20 w-full border-b border-gray-200 bg-white">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                onClick={toggleSidebar}
                            >
                                <HiOutlineMenuAlt2 className="text-2xl" />
                            </button>
                            <ApplicationLogo />
                        </div>
                        <div className="flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}
                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="p-4 sm:ml-64 mt-14 min-h-screen bg-gray-200">
                {children}
                <footer>
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-500">
                            © 2024 CV Verus Consultant Engineering. All rights
                            reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
