import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputField from "@/Components/Elements/InputField"; // Import the InputField component

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout title="Register">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold text-white">
                    Register
                </h2>

                {/* Input Name */}
                <InputField
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    error={errors.name}
                    icon={FiUser}
                />

                {/* Input Email */}
                <InputField
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                    icon={FiMail}
                />

                {/* Input Password */}
                <InputField
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                    icon={FiLock}
                />

                {/* Input Confirm Password */}
                <InputField
                    id="password_confirmation"
                    type="password"
                    placeholder="Confirm your password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    error={errors.password_confirmation}
                    icon={FiLock}
                />

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-full bg-white py-2 text-purple-500 shadow-lg hover:bg-gray-100 focus:outline-none"
                        disabled={processing}
                    >
                        {processing ? "Registering..." : "Register"}
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
