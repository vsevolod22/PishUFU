
# PishUFU

## Описание

**PishUFU** — это веб-приложение, разработанное с использованием React, TypeScript и Vite. Приложение поддерживает взаимодействие с сервером для получения данных о событиях, новостях и образовательных программах через API.

## Основные возможности

- **React**: Создание компонентной архитектуры для удобства разработки.
- **TypeScript**: Использование статической типизации для обеспечения безопасности кода.
- **Vite**: Быстрый сервер разработки и сборка.
- **Axios**: Инструмент для работы с API-запросами.
- **SASS**: Препроцессор для стилизации.

## Структура проекта

```bash
PishUFU/
├── public/               # Статические файлы
├── src/                  # Исходный код приложения
│   ├── app/              # Главные компоненты и настройки приложения
│   ├── features/         # Логика работы с API и основными функциями
│   │   └── Api/          # Методы для работы с API
│   ├── pages/            # Страницы приложения
│   └── shared/           # Общие компоненты
├── .eslintrc.cjs         # Конфигурация ESLint
├── tsconfig.json         # Конфигурация TypeScript
├── vite.config.ts        # Конфигурация Vite
└── README.md             # Документация проекта
```

## Установка

Перед началом работы убедитесь, что у вас установлены [Node.js](https://nodejs.org/).

### 1. Клонирование репозитория

```bash
git clone https://github.com/ваш-логин/PishUFU.git
cd PishUFU
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск сервера разработки

```bash
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## Примеры работы с API

Для взаимодействия с API используются методы, описанные в файле `FetchUtils.tsx`. Все запросы выполняются с помощью библиотеки Axios.

### Методы работы с API

#### 1. Получение событий (`GetEvents`)

Метод `GetEvents` запрашивает список событий с сервера.

```ts
import axios from 'axios';
import { IGetEvents } from './types';

export class HttpApiMethods {
  APIURL = 'http://77.91.84.181:1337/api';
  API_KEY = localStorage.getItem('token');

  GetEvents = async (): Promise<IGetEvents | null> => {
    let innerUrl = this.APIURL + `/events`;

    try {
      const response = await axios.get(innerUrl);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
```

#### Пример использования:

```ts
import { HttpApiMethods } from './features/Api/FetchUtils';

const api = new HttpApiMethods();

const fetchEvents = async () => {
  const events = await api.GetEvents();
  console.log(events);
};
```

#### 2. Получение новостей (`GetNews`)

Метод `GetNews` запрашивает список новостей.

```ts
import axios from 'axios';
import { IGetNews } from './types';

export class HttpApiMethods {
  APIURL = 'http://77.91.84.181:1337/api';

  GetNews = async (): Promise<IGetNews | null> => {
    let innerUrl = this.APIURL + `/news`;

    try {
      const response = await axios.get(innerUrl);
      console.log(response.data);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
```

#### Пример использования:

```ts
const fetchNews = async () => {
  const news = await api.GetNews();
  console.log(news);
};
```

#### 3. Получение программ со специализациями (`GetPrograms`)

Метод `GetPrograms` запрашивает образовательные программы и включает связанные с ними специальности.

```ts
import axios from 'axios';
import { IGetPrograms } from './types';

export class HttpApiMethods {
  APIURL = 'http://77.91.84.181:1337/api';

  GetPrograms = async (): Promise<IGetPrograms | null> => {
    let innerUrl = this.APIURL + `/programs?populate[specialties]=*`;

    try {
      const response = await axios.get(innerUrl);
      console.log(response.data);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
```

#### Пример использования:

```ts
const fetchPrograms = async () => {
  const programs = await api.GetPrograms();
  console.log(programs);
};
```

## Линтинг и проверка кода

Для проверки качества кода в проекте используется **ESLint**. Чтобы запустить проверку, используйте команду:

```bash
npm run lint
```

Ошибки линтинга необходимо устранить перед слиянием изменений в основную ветку.

## Основные зависимости

```json
{
  "axios": "^1.7.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.2.1"
}
```

### Dev-зависимости

```json
{
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "typescript": "^5.5.3",
  "vite": "^5.3.1"
}
```

## Вклад в проект

Мы всегда рады вашим предложениям и улучшениям! Чтобы внести свой вклад:

1. Форкните репозиторий.
2. Создайте новую ветку:

   ```bash
   git checkout -b feature-branch
   ```

3. Внесите свои изменения и сделайте коммит:

   ```bash
   git commit -m 'Добавил новую фичу'
   ```

4. Запушьте изменения в свою ветку:

   ```bash
   git push origin feature-branch
   ```

5. Откройте Pull Request.

---

Теперь этот файл отформатирован в соответствии с Markdown, так что он будет красиво отображаться на GitHub и других платформах, поддерживающих Markdown. Если нужно внести дополнительные изменения, дайте знать!
