import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const Show = ({ attendance }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Catatan Kehadiran
                </h2>
            }
        >
            <Head title="Detail Kehadiran" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Karyawan: {attendance.employee.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Tanggal: {attendance.date}
                            </p>
                            <p className="text-sm text-gray-500">
                                Status:{" "}
                                {attendance.status === "present"
                                    ? "Hadir"
                                    : "Tidak Hadir"}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <Link href={`/attendances/${attendance.id}/edit`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                            <Link href="/attendances">
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
