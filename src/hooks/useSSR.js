import { useEffect, useState } from "react";
export const useSSR = () => {
    const [isRendering, setIsRendering] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsRendering(true);
        } else {
            setIsRendering(false);
        }
    }, []);
    return { isRendering };
};
