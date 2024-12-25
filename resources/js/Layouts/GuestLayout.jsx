import { Head } from "@inertiajs/react";

export default function GuestLayout({ title, children }) {
    return (
        <div
            className="flex min-h-screen items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/img/background-buildings.jpg')",
            }}
        >
            <Head title={title} />

            {/* Background Opacity */}
            <div className="absolute inset-0 bg-white opacity-80 backdrop-blur-md"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-md rounded-lg bg-gradient-to-b from-purple-500 to-indigo-500 p-8 shadow-lg">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                        <span className="text-xl font-bold text-purple-500">
                            LOGO
                        </span>
                    </div>
                </div>

                {/* Content (Children) */}
                <div>{children}</div>
            </div>
        </div>
    );
}
