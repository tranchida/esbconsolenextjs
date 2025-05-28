export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
    endpoints: {
        // Ajoutez vos endpoints ici
        example: '/api/example',
    },
    headers: {
        'Content-Type': 'application/json',
    },
}; 