import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const Create = ({ employees }) => {
    const { data, setData, post, processing, errors } = useForm({
        employee_id: "",
        month: "",
        year: new Date().getFullYear(),
        amount: "", // Total amount
        allowance: "", // New allowance input
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setData(name, files[0]);
        } else {
            setData(name, value);

            // If the field is "allowance", parse it to a number since it's expected
            if (name === "allowance") {
                const allowanceValue = parseFloat(value) || 0;
                setData(name, allowanceValue.toString());
            }
        }
    };

    useEffect(() => {
        const employee = employees.find((emp) => emp.id === data.employee_id);
        if (employee) {
            const totalAmount =
                (parseFloat(employee.salary) || 0) +
                (parseFloat(data.allowance) || 0);
            setData("amount", totalAmount);
        }
    }, [data.allowance, data.employee_id, employees]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/payrolls");
    };

    // Currency formatting function
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah daftar gaji
                </h2>
            }
        >
            <Head title="Tambah Payroll" />
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
                                    onChange={handleChange}
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
                                    name="year"
                                    value={data.year}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.year ? "border-red-500" : ""
                                    }`}
                                    required
                                    readOnly
                                />
                                {errors.year && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.year}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="allowance"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tunjangan
                                </label>
                                <input
                                    type="number"
                                    name="allowance"
                                    value={data.allowance}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.allowance ? "border-red-500" : ""
                                    }`}
                                />
                                {errors.allowance && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.allowance}
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
                                    type="text" // Change to text to display formatted string
                                    name="amount"
                                    value={formatCurrency(data.amount)} // Format the currency
                                    readOnly // Keep this as read-only since it's calculated
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
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.image ? "border-red-500" : ""
                                    }`}
                                />
                                {errors.image && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.image}
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

export default Create;
