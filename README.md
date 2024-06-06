# Clinet application


## Описание
Приложение состоит из модулей, каждый из которых расположен в отдельной папке в папке `src/modules` и содержит главный файл модуля `moduleName.module.ts`, в котором определены все провайдеры, контроллеры, зависимости модуля, а также экспортировать то, что этот модуль будет предоставлять другим модулям, когда они будут использовать его как зависимость.
Папка `pages` содержит компоненты страниц, которые используются в модуле роутинга. Выделены отдельно, чтобы было понимание из каких страниц состоит приложение, и какие компоненты используются на этих страницах. Просто отображают другие компоненты. Не содежрит бизнес логики, либо содержит минимальную логику отображения.

## Установка

```bash
$ yarn install
```

## Запуск приложения

```bash
# development http://localhost:4200/
$ yarn start

# зroduction build
$ yarn build
```


## Запуст тестов
```bash
# unit tests
$ ng test

# e2e tests
$ ng e2e
```