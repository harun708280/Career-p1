import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessEmailSent = () => {
    const navigate=useNavigate()
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-green-600 mb-4">Email Sent Successfully!</h1>
                <p className="text-gray-700 mb-4">
                    We have sent a password reset link to your email. Please check your inbox and follow the instructions to reset your password.
                </p>
                <p className="text-gray-500 mb-4">
                    Didn't receive the email? Check your spam folder or try again later.
                </p>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-primary hover:bg-primary text-white px-4 py-2 rounded"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default SuccessEmailSent;
