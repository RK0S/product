import { memo } from 'react';

export type SortOrder = 'asc' | 'desc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typedMemo: <Component extends React.FC<any>>(
    component: Component,
    compare?: (
        prevProps: React.ComponentPropsWithoutRef<Component>,
        newProps: React.ComponentPropsWithoutRef<Component>
    ) => boolean
) => Component = memo;

// или
// const typedMemo: <T>(c: T) => T = memo;
