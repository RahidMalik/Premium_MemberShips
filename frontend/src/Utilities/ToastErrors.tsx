import { Toaster } from 'react-hot-toast';

const ToastErrors = () => {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                className: 'font-medium text-sm px-4 py-2 shadow-2xl',

                // Success - Transparent Green
                success: {
                    duration: 3000,
                    style: {
                        border: '1px solid rgba(16, 185, 129, 0.4)', // Light green border
                        padding: '16px',
                        color: '#065F46',
                        background: 'rgba(236, 253, 245, 0.7)', // 70% transparent
                        backdropFilter: 'blur(10px)', // Piche ka content blur hoga
                    },
                },

                // Error - Transparent Red
                error: {
                    duration: 4000,
                    style: {
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        padding: '16px',
                        color: '#991B1B',
                        background: 'rgba(254, 242, 242, 0.7)', // 70% transparent
                        backdropFilter: 'blur(10px)',
                    },
                },

                // Loading - Transparent Yellow
                loading: {
                    style: {
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        padding: '16px',
                        color: '#92400E',
                        background: 'rgba(255, 251, 235, 0.7)', // 70% transparent
                        backdropFilter: 'blur(10px)',
                    },
                },
            }}
        />
    );
};

export default ToastErrors;