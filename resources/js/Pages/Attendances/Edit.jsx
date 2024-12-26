import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const Edit = ({ attendance, employees }) => {
    const { data, setData, put, processing, errors } = useForm({
        employee_id: attendance.employee_id,
        date: attendance.date,
        status: attendance.status,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/attendances/${attendance.id}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Catatan Kehadiran
                </h2>
            }
        >
            <Head title="Edit Kehadiran" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="employee_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Karyawan
                                </label>
                                <select
                                    name="employee_id"
                                    value={data.employee_id}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.employee_id
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    required
                                >
                                    {employees.map((employee) => (
                                        <option
                                            key={employee.id}
                                            value={employee.id}
                                        >
                                            {employee.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.employee_id && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.employee_id}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={data.date}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.date ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.date && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.date}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={data.status}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.status ? "border-red-500" : ""
                                    }`}
                                    required
                                >
                                    <option value="present">Hadir</option>
                                    <option value="absent">Tidak Hadir</option>
                                </select>
                                {errors.status && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.status}
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={processing}
                                >
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </Button>
                                <Link href="/attendances">
                                    <Button variant="secondary">Kembali</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
