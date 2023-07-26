import {useEffect, useState} from "react";

export function useDelay (data) {
    const [delayedData, setDelayedData] = useState(null);

    useEffect(()=>{
        const delay = setTimeout(()=>{
            setDelayedData([...data])
            clearTimeout(delay)
        }, Math.floor(Math.random() * (3000 - 750) + 750))
    }, []);

    return delayedData
}