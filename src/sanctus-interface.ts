export interface SanctusInterface {
    getSaint: (date?: Date) => SaintInfo | undefined;
    getSaintFromMonthDay: (month: number, day: number) => SaintInfo | undefined; // month 0-11
    getSaintsOfDay: (date?: Date) => SaintInfo[];
    getAllSaints: () => SaintInfo[];
    getCurrentDate: () => Date;
    setDate: (date: Date) => void;
}

export type SaintInfo= {
    month: number,
    day: number,
    category: number,
    name: string,
    birth?: string,
    dead?: string,
    meaning?: string
    shortDescription?: string,
    description?: string
}