import { useState, useEffect } from 'react';

export const useMount = ({ isOpened }: { isOpened: boolean}): boolean => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened && !isMounted) {
            setIsMounted(true);
        } else if (!isOpened && isMounted) {
            setTimeout(() => {
                setIsMounted(false);
            }, 300);
        }
    }, [isOpened, isMounted]);

    return isMounted;
};