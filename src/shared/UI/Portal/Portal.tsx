import { ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode;
}

export const Portal: React.FC<PortalProps> = (props) => {
    const { children } = props;

    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.querySelector('.app')?.appendChild(container);
        return () => {
            document.querySelector('.app')?.removeChild(container);
        };
    }, [container]);

    return ReactDOM.createPortal(children, container);
};