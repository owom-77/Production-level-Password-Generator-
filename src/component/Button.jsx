import React from 'react';

function Button({
    children,
    type = "submit",
    ...props
}) {
    return (
        <button
            type={type}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
            >
            {children}
        </button>
    );
}

export default Button;
