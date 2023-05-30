import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildCssLoader } from './../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve?.modules?.push(path.relative(__dirname, '../../src'), 'node_modules');
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module?.rules.map((rule: webpack.RuleSetRule | '...') => {
            if (rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push(buildSvgLoader());

    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: ''
        })
    );

    return config;
};
