import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const Edit = ({ payroll, employees }) => {
    const { data, setData, post, processing, errors } = useForm({
        employee_id: payroll.employee_id,
        month: payroll.month,
        year: payroll.year,
        amount: payroll.amount,
        image: "" ,
        _method: "PUT",
    });
const handleSubmit = (e) => {
    e.preventDefault();

    post(`/payrolls/${payroll.id}`);
};

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit daftar gaji
                </h2>
            }
        >
            <Head title="Edit Payroll" />
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
                                    onChange={(e) =>
                                        setData("employee_id", e.target.value)
                                    }
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.employee_id
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    required
                                >
                                    <option value="">Pilih Karyawan</option>
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
                                    htmlFor="month"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Bulan
                                </label>
                                <input
                                    type="text"
                                    name="month"
                                    value={data.month}
                                    onChange={(e) =>
                                        setData("month", e.target.value)
                                    }
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.month ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.month && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.month}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="year"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tahun
                                </label>
                                <input
                                    type="number"
                                    name="year"
                                    value={data.year}
                                    onChange={(e) =>
                                        setData("year", e.target.value)
                                    }
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.year ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.year && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.year}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Jumlah
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.amount ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.amount && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.amount}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Gambar
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.image ? "border-red-500" : ""
                                    }`}
                                />
                                {errors.image && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.image}
                                    </div>
                                )}
                                {/* Tampilkan gambar lama jika ada */}
                                {payroll.image && (
                                    <div className="mt-2">
                                        <img
                                            src={`/storage/${payroll.image}`}
                                            alt="Gambar Payroll"
                                            className="w-32 h-32 object-cover"
                                        />
                                        <p className="text-sm text-gray-500">
                                            Gambar saat ini
                                        </p>
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
                                <Link href="/payrolls">
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
 