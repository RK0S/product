import { MutableRefObject, useEffect, useRef } from 'react';

interface useInfiniteScrollOptions {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (options: useInfiniteScrollOptions) => {
    const { callback, triggerRef, wrapperRef } = options;

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '20px 80px',
                threshold: 1.0
            };
    
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
    
            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
