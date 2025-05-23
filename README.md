### 1. Клонування репозиторію

Створи папку в Visual Studio Code, перейди в неї через термінал і виконай команду:

```bash
git clone https://github.com/Kerchiano/assignment-submission-portal.git
```
### 2. Запуск проєкту.

У корені проекту відкрий термінал і перейди до папки проекту assignment-submission-portal:

```bash
cd assignment-submission-portal
```
Потім зроби команду щоб інсталювати залежності:
```bash
yarn install
```

Потім у корені проекту створи файл .env і встав в нього:
```env
API_BASE_URL='https://tools.qa.ale.ai/api/tools/candidates'
```

Виконай коанду вона запустить сервер:
```bash
yarn dev
```
