
import { useCallback } from 'react';

function useLocalStorage() {

    const set = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    }, []);

    const get = useCallback((key: string) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }, []);

    const remove = useCallback((key: string) => {
        localStorage.removeItem(key);
    }, []);

    return {
        set,
        get,
        remove
    }

}

export { useLocalStorage }
