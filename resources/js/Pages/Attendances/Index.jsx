import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const AttendanceIndex = ({ attendances }) => {
    const [openDropdown, setOpenDropdown] = useState(null); 


    const deleteAttendance = (id) => {
        if (
            confirm("Apakah Anda yakin ingin menghapus catatan kehadiran ini?")
        ) {
            router.delete(`/attendances/${id}`);
        }
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id); 
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Kehadiran
                </h2>
            }
        >
            <Head title="Absensi" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/attendances/create">
                            <Button variant="primary"> Tambah Kehadiran</Button>
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
                                        Karyawan
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tanggal
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {attendances.map((attendance) => (
                                    <tr key={attendance.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {attendance.employee.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {attendance.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {attendance.status}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div
                                                className="relative inline-block text-left"
                                                ref={dropdownRef}
                                            >
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleDropdown(
                                                                attendance.id
                                                            )
                                                        }
                                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
                                                    </button>
                                                </div>

                                                {/* Dropdown Menu */}
                                                {openDropdown ===
                                                    attendance.id && (
                                                    <div
                                                        className="absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
                                                        role="menu"
                                                        aria-orientation="vertical"
                                                        aria-labelledby="options-menu"
                                                    >
                                                        <div
                                                            className="py-1"
                                                            role="none"
                                                        >
                                                            <Link
                                                                href={`/attendances/${attendance.id}`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Detail
                                                            </Link>
                                                            <Link
                                                                href={`/attendances/${attendance.id}/edit`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    deleteAttendance(
                                                                        attendance.id
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

export default AttendanceIndex;
