
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { useState, useEffect } from 'react';

export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => setError(!error);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <AppButton onClick={onThrow}>throw error</AppButton>
    );
};