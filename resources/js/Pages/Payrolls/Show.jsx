import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const Show = ({ payroll }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail daftar gaji
                </h2>
            }
        >
            <Head title="Detail Payroll" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Karyawan: {payroll.employee.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Bulan: {payroll.month}
                            </p>
                            <p className="text-sm text-gray-500">
                                Tahun: {payroll.year}
                            </p>
                            <p className="text-sm text-gray-500">
                                Jumlah: {payroll.amount}
                            </p>
                            {payroll.image && (
                                <img
                                    src={`/storage/${payroll.image}`}
                                    alt="Payroll Image"
                                    className="mt-4"
                                />
                            )}
                        </div>
                        <div className="flex justify-between">
                            <Link href={`/payrolls/${payroll.id}/edit`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                            <Link href="/payrolls">
                                <Button variant="secondary">Kembali</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
