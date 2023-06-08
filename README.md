# Read Art

Платформа, на которой пользователи могут читать, находить и оценивать статьи, загруженные с собственной БД. А также имеют возможность редактировать свой профиль, менять темы, языки и многое другое.

## Технологии

**Архитектура**: [*Feature-Sliced Design*](https://feature-sliced.design/ru/)

1. app (Глобальные стили, обёртки, ErrorBoundary и т.п.)
2. processes (Процессы, cложные многоуровневые сущности)
3. pages (Страницы)
4. widgets (Композиционной слой фичей и сущностей)
5. features (Действия пользователя)
6. entities (Бизнес-сущности)
7. shared (Переиспользуемые ресурсы)

**Ядро**: [*React*](https://react.dev/), [*Redux Toolkit*](https://redux-toolkit.js.org/), [*Typescript*](https://www.typescriptlang.org/)

**Сборщик**: [*Webpack*](https://webpack.js.org/) в связке с [*Babel*](https://babeljs.io/)

**Роутинг**: [*React-router-dom*](https://reactrouter.com/en/main)

**Линтинг**: [*ESLint*](https://eslint.org/), [*Stylelint*](https://stylelint.io/)

**Тестирование**:
- Unit: [*Jest*](https://jestjs.io/)
- Скриншотное: [*Loki*](https://loki.js.org/)
- Интеграционное: [*React-testing-library*](https://testing-library.com/docs/react-testing-library/intro/)
- E2E: [*Cypress*](https://www.cypress.io/)

**Витрина компонентов**: [*Storybook*](https://storybook.js.org)

**CI Pipeline**: [*GitHub Actions*](https://docs.github.com/en/actions)

**Pre commit хуки**: [*Husky*](https://github.com/typicode/husky)

**i18n**: [*i18next*](https://react.i18next.com/)

**Backend**: [*JSON Server*](https://github.com/typicode/json-server)