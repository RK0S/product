import { Theme } from 'app/providers/ThemeProvider';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageError } from 'shared/UI/PageError/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <div className={classNames('app', {}, [Theme.LIGHT])}>
                    <Suspense fallback=''>
                        <PageError />
                    </Suspense>
                </div>
            );
        }

        return children;
    }
}
