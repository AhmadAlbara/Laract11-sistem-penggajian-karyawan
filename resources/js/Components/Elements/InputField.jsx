import { forwardRef } from "react";

const InputField = forwardRef(
    (
        {
            label,
            id,
            type = "text",
            placeholder,
            value,
            onChange,
            error,
            icon: Icon,
            className = "",
            ...props // Allow additional props
        },
        ref
    ) => {
        return (
            <div className={`mb-4 ${className}`}>
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                )}
                <div className="relative  border-b">
                    {Icon && (
                        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                    )}
                    <input
                        ref={ref}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className={`w-full pl-10 pr-3 py-2 text-white placeholder:text-white bg-transparent border-none focus:ring-transparent focus:outline-none ${
                            error ? "border-red-400" : ""
                        }`}
                        {...props}
                    />
                </div>
                {error && (
                    <span className="text-sm text-red-400 mt-1">{error}</span>
                )}
            </div>
        );
    }
);

export default InputField;
