import React, { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Button from "@/Components/Elements/Button"; // Import the Button component

const Index = ({ employees }) => {
    const [openDropdown, setOpenDropdown] = useState(null); // State for managing the open dropdown
    const dropdownRef = useRef(null); // Ref for dropdown

    const deleteEmployee = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus karyawan ini?")) {
            router.delete(`/employees/${id}`);
        }
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id); // Toggle dropdown
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Karyawan
                </h2>
            }
        >
            <Head title="Karyawan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/employees/create">
                            <Button variant="primary">Tambah Karyawan</Button>
                        </Link>
                    </div>
                    <div className="border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nama
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Posisi
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Gaji
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                                    >
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {employee.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {employee.position}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {employee.salary}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                            <div
                                                className="relative inline-block text-left"
                                                ref={dropdownRef}
                                            >
                                                <div>
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleDropdown(
                                                                employee.id
                                                            )
                                                        }
                                                        variant="secondary"
                                                    >
                                                        <svg
                                                            className="h-5 w-5"
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
                                                    </Button>
                                                </div>

                                                {/* Dropdown Menu */}
                                                {openDropdown ===
                                                    employee.id && (
                                                    <div
                                                        className="absolute right-0 top-10 z-10 mt-2 w-56  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
                                                        role="menu"
                                                        aria-orientation="vertical"
                                                        aria-labelledby="options-menu"
                                                    >
                                                        <div
                                                            className="py-1"
                                                            role="none"
                                                        >
                                                            <Link
                                                                href={`/employees/${employee.id}`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Detail
                                                            </Link>
                                                            <Link
                                                                href={`/employees/${employee.id}/edit`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    deleteEmployee(
                                                                        employee.id
                                                                    )
                                                                }
                                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
