import { FiMail, FiLock } from "react-icons/fi"; // Change to FiMail for email
import { useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputField from "@/Components/Elements/InputField";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "", 
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout title="Login">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold text-white">
                    Log In
                </h2>

                {/* Input Email */}
                <InputField
                    id="email"
                    type="email" 
                    placeholder="Email" 
                    value={data.email} 
                    onChange={(e) => setData("email", e.target.value)} 
                    error={errors.email} 
                    icon={FiMail} 
                />

                {/* Input Password */}
                <InputField
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                    icon={FiLock}
                />
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-full bg-white py-2 text-purple-500 shadow-lg hover:bg-gray-200 focus:outline-none"
                        disabled={processing}
                    >
                        {processing ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
