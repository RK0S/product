/* eslint-disable @typescript-eslint/no-non-null-assertion */

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config!.resolve!.modules!.push(path.relative(__dirname, '../../src'), 'node_modules');
    config!.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) =>
        /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
    );

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('')
        })
    );

    return config;
};
