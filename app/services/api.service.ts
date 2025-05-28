import { API_CONFIG } from '../config/api.config';

class ApiService {
    private static async fetchWithConfig(endpoint: string, options: RequestInit = {}) {
        const url = `${API_CONFIG.baseUrl}${endpoint}`;
        const headers = {
            ...API_CONFIG.headers,
            ...options.headers,
        };

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json();
    }

    static async get(endpoint: string, options: RequestInit = {}) {
        return this.fetchWithConfig(endpoint, {
            ...options,
            method: 'GET',
        });
    }

    static async post(endpoint: string, data: any, options: RequestInit = {}) {
        return this.fetchWithConfig(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    static async put(endpoint: string, data: any, options: RequestInit = {}) {
        return this.fetchWithConfig(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    static async delete(endpoint: string, options: RequestInit = {}) {
        return this.fetchWithConfig(endpoint, {
            ...options,
            method: 'DELETE',
        });
    }
}

export default ApiService; 