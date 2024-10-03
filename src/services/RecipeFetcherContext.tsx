import {createContext, useContext} from "react";

export interface RecipeFetcher {
    fetchText(name: string): Promise<string>;

    fetchJson(name: string): Promise<string>;
}

const defaultRecipeFetcher = (): RecipeFetcher => {
    const publicUrl = process.env.PUBLIC_URL;
    const recipes = `${publicUrl}/recipes`;
    return {
        async fetchJson(name: string): Promise<string> {
            const res = await fetch(`${recipes}/${name}.json`);
            return await res.json();
        },
        async fetchText(name: string): Promise<string> {
            const res = await fetch(`${recipes}/${name}.txt`);
            return await res.text();
        }
    }
}

export const RecipeFetcherContext = createContext<RecipeFetcher>(defaultRecipeFetcher())

export const useRecipeFetcher = () => useContext(RecipeFetcherContext)



