import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link
            href={route("dashboard")}
            className="inline-flex items-center px-3 py-2 text-xl font-extrabold text-primary"
        >
            CV Verus Consultant Engineering
        </Link>
    );
}
