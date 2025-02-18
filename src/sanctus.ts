// src/db.ts
import {SaintInfo, SanctusInterface} from "./sanctus-interface.ts";
import all_saints from './db/all_saints.json'

export class Sanctus implements SanctusInterface {

    #selectedDate: Date;

    constructor(selectedDate?: Date) {
        if (selectedDate !== undefined && selectedDate !== null)
            this.#selectedDate = selectedDate;
        else
            this.#selectedDate = new Date();
    }

    getSaint(date?: Date): SaintInfo | undefined {
        let list: SaintInfo[] = this.getSaintsOfDay(date);
        return list.at(0);
    }

    getSaintFromMonthDay(month: number, day: number): SaintInfo | undefined {
        return this.getSaintsFromMonthAndDay(month, day).at(0);
    }

    getSaintsOfDay(date?: Date): SaintInfo[] {
        const {day, month} = this.getMonthAndDayFromDate(date);
        return this.getSaintsFromMonthAndDay(month, day);
    };


    getAllSaints(): SaintInfo[] {
        return all_saints;
    };

    setDate(date: Date): void {
        this.#selectedDate = date;
    }

    getCurrentDate(): Date {
        return this.#selectedDate;
    }

    private getMonthAndDayFromDate(date?: Date): { month: number; day: number } {
        if (date !== undefined && date !== null)
            return {month: date.getMonth(), day: date.getDate()}
        else
            return {month: this.#selectedDate.getMonth(), day: this.#selectedDate.getDate()}
    }

    /**
     *
     * Get saints of a day, shortened by category
     *
     * @param month
     * @param day
     * @private
     */
    private getSaintsFromMonthAndDay(month: number, day: number): SaintInfo[] {
        return all_saints.filter(
            (s) => s.month === month && s.day === day
        ).sort((a, b) => a.category - b.category);
    }


}
