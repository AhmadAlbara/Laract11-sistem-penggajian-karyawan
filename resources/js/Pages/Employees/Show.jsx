import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Elements/Button"; // Import the Button component

const Show = ({ employee }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Karyawan
                </h2>
            }
        >
            <Head title="Karyawan" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700">
                                <strong>Nama:</strong> {employee.name}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700">
                                <strong>Posisi:</strong> {employee.position}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700">
                                <strong>Gaji:</strong> {employee.salary}
                            </p>
                        </div>
                        <div className="flex justify-between mt-6">
                            <Link href="/employees">
                                <Button variant="secondary">Kembali</Button>
                            </Link>
                            <Link href={`/employees/${employee.id}/edit`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
