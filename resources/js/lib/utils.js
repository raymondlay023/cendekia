import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const FINEPAYMENTSTATUS = {
    PENDING: 'Tertunda',
    SUCCESS: 'Sukses',
    FAILED: 'Gagal',
};

export default function flashMessage(params) {
    return params.props.flash_message;
}

export const formatToRupiah = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });

    return formatter.format(amount);
};

export const messages = {
    503: {
        title: 'Service Unavailable',
        description: 'Sorry, we are doing some maintenance. Please check back soon.',
        status: 503,
    },
    500: {
        title: 'Server Error',
        description: 'Oops, something went wrong on our servers. Plase try again later.',
        status: 500,
    },
    404: {
        title: 'Not Found',
        description: 'Sorry, the page you are looking for could not be found.',
        status: 404,
    },
    403: {
        title: 'Forbidden',
        description: 'This page is forbidden. You do not have permission to access this page.',
        status: 403,
    },
    401: {
        title: 'Unauthorized',
        description: 'Sorry, you are not authorized to access this page.',
        status: 401,
    },
    429: {
        title: 'Too many requests',
        description: 'Too many requests. Please try again later.',
        status: 429,
    },
};
