import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";


const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        position: "",
        salary: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/employees");
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Karyawan
                </h2>
            }
        >
            <Head title="Karyawan" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.name ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.name && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="position"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Posisi
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    value={data.position}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.position ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.position && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.position}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="salary"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Gaji
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={data.salary}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                                        errors.salary ? "border-red-500" : ""
                                    }`}
                                    required
                                />
                                {errors.salary && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.salary}
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
                                <Link href="/employees">
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
