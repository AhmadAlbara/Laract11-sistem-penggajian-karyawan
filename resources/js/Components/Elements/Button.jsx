import React from "react";

const Button = ({
    type = "button",
    variant = "primary",
    children,
    className,
    ...props
}) => {
    // Define base styles for the button
    const baseStyles =
        "inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Define styles for different variants
    const variants = {
        primary:
            "bg-primary border-transparent text-white hover:bg-primary/80 focus:ring-indigo-500",
        secondary:
            "bg-secondary border-gray-300 text-white hover:bg-primary/90 focus:ring-gray-500",
        danger: "bg-red-600 border-transparent text-white hover:bg-red-700 focus:ring-red-500",
        // Add more variants as needed
    };

    // Combine base styles with variant styles and any additional classes
    const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <button type={type} className={buttonStyles} {...props}>
            {children}
        </button>
    );
};

export default Button;
