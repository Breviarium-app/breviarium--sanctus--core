<h1 align="center">
  <a href="https://github.com/breviarium-app/breviarium--santus--core">
    Sanctus 🙏🏼
  </a>
</h1>

<p align="center">
  Open source saints martyrology!<br><br>
  Generates saints info of the Roman Catholic Church.<br>
  Supports Node v18+, Modern Browsers (desktop and mobile).
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?color=blue&style=flat"></a>
  <a href="https://www.npmjs.com/package/sanctus/v/latest" target="_blank" rel="noopener noreferrer">
<img alt="latest" src="https://img.shields.io/npm/v/sanctus/latest?style=flat&logo=npm&color=35d401"></a>

</p>

## Quickstart setup

> TODO

## Test

To run the test suite (with [vitest](https://vitest.dev/)), execute:

To run the app:

```shell
# linux and mac users:
make test
# for windows users:
npm run test
```

# SanctusInterface Documentation

The `SanctusInterface` provides methods to retrieve information about saints based on dates or direct month/day lookups.

## Interface Definition

```ts
export interface SanctusInterface {
    getSaint: (date?: Date) => SaintInfo | undefined;
    getSaintFromMonthDay: (month: number, day: number) => SaintInfo | undefined;
    getSaintsOfDay: (date?: Date) => SaintInfo[];
    getAllSaints: () => SaintInfo[];
    getCurrentDate: () => Date;
    setDate: (date: Date) => void;
}
```

## Function Documentation

| Method                  | Description                                             | Parameters             | Return Type  | Example Call |
|-------------------------|---------------------------------------------------------|------------------------|--------------|--------------|
| `getSaint`             | Retrieves a single saint for the given date.            | `date?: Date`          | `SaintInfo \| undefined` | `sanctus.getSaint(new Date(2025, 1, 17));` |
| `getSaintFromMonthDay` | Retrieves a single saint for a specific month and day.  | `month: number, day: number` | `SaintInfo \| undefined` | `sanctus.getSaintFromMonthDay(2, 17);` |
| `getSaintsOfDay`       | Retrieves all saints for the given date.                | `date?: Date`          | `SaintInfo[]` | `sanctus.getSaintsOfDay();` |
| `getAllSaints`         | Returns an array of all saints in the database.         | `None`                 | `SaintInfo[]` | `sanctus.getAllSaints();` |
| `getCurrentDate`       | Returns the currently set date in the instance.         | `None`                 | `Date`        | `sanctus.getCurrentDate();` |
| `setDate`              | Sets a new date to be used for saint retrieval.         | `date: Date`           | `void`        | `sanctus.setDate(new Date(2025, 5, 1));` |

---

## SaintInfo Type Definition

```ts
export type SaintInfo = {
    month: number;
    day: number;
    category: number;
    name: string;
    birth?: string;
    dead?: string;
    meaning?: string;
    shortDescription?: string;
    description?: string;
};
```

### SaintInfo Properties

| Property           | Type     | Required | Description                                      |
|--------------------|---------|----------|--------------------------------------------------|
| `month`           | `number` | ✅ Yes   | Month of the saint's feast day (1-12).           |
| `day`             | `number` | ✅ Yes   | Day of the saint's feast day (1-31).             |
| `category`        | `number` | ✅ Yes   | Category or rank of the saint: principal or not. |
| `name`            | `string` | ✅ Yes   | Name of the saint.                               |
| `birth`           | `string` | ❌ No    | Birth year or approximate time.                  |
| `dead`            | `string` | ❌ No    | Death year or approximate time.                  |
| `meaning`         | `string` | ❌ No    | Meaning or significance of the saint's name.     |
| `shortDescription` | `string` | ❌ No    | Brief summary of the saint.                      |
| `description`     | `string` | ❌ No    | Detailed description of the saint's life.        |

---

## **Usage Example**

```ts
import { SanctusInterface, SaintInfo, Sanctus } from "./sanctus";

const sanctus: SanctusInterface = new Sanctus();

// Get a single saint for February 17, 2025
const saint: SaintInfo | undefined = sanctus.getSaint(new Date(2025, 1, 17));
console.log(saint?.name);

// Get a saint using month and day
const saintByDate: SaintInfo | undefined = sanctus.getSaintFromMonthDay(2, 17);
console.log(saintByDate?.name);
```

```ts
// Get all saints of the current day
const sanctus: SanctusInterface = new Sanctus();
const saintsOfDay: SaintInfo[] = sanctus.getSaintsOfDay();
console.log(saintsOfDay);

// Set a new date
sanctus.setDate(new Date(2025, 5, 1));
const saintsNewDate: SaintInfo[] = sanctus.getSaintsOfDay();
console.log(saintsNewDate);
```