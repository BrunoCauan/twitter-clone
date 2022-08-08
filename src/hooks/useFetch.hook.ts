import useSWR from 'swr';

const BASE_API = 'http://localhost:3333';

export function useFetch<Data = any, Error = any>(endpoint: string, prefetchedData?: any) {
    const { data, error } = useSWR<Data, Error>(`${BASE_API}/${endpoint}`, async url => {
        const response = await fetch(url);

        return response.json();
    }, { fallbackData: prefetchedData });

    return { data, error };
}