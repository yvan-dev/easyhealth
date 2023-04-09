import { useEffect, useState } from 'react';
import { Storage } from '@ionic/storage';

export function useStorage(KEY:string) {
    const [store, setStore] = useState<Storage>();
    const [data, setData] = useState();

	useEffect(() => {
		const initStorage = async () => {
			const newStore = new Storage({
				name: 'appDB',
			});
			const store = await newStore.create();
            setStore(store);

            const storedData = await store.get(KEY);
            setData(storedData);
		};
		initStorage();
    }, []);

    // add item in the store
    const setItem = async (key: string, value: any) => {
            await store?.set(key, value);
            setData(value);
    }

    return {
        data,
        setItem
    }

}
