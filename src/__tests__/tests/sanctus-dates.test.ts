import {describe, expect, it} from "vitest";
import Sanctus from "../../sanctus.ts";
import {SaintInfo} from "../../sanctus-interface.ts";

const locale = "en-CA"; // Use a consistent locale (YYYY-MM-DD format)

describe("Sanctus module dates", () => {
    it("should return date on create by default", () => {
        const sanctus = new Sanctus();
        const date = sanctus.getCurrentDate()
        assert(date !== undefined && date !== null);
        expect(date).toBeDefined()
        expect(date).not.toBeNull()
    });

    it("should return date passed on constructor", () => {
        const sanctus = new Sanctus(new Date(2025, 1, 17));
        const date = sanctus.getCurrentDate();

        assert(date !== undefined && date !== null);

        // Format both expected and actual date to a locale-specific string
        const expectedDate = new Date(2025, 1, 17).toLocaleDateString(locale);
        const actualDate = date.toLocaleDateString(locale);
        expect(actualDate).to.equal(expectedDate);
    });

    it("should return date on setDate", () => {
        const sanctus = new Sanctus();
        sanctus.setDate(new Date(2025, 2, 15));
        const date = sanctus.getCurrentDate();

        assert(date !== undefined && date !== null);

        // Format both expected and actual date to a locale-specific string
        const expectedDate = new Date(2025, 2, 15).toLocaleDateString(locale);
        const actualDate = date.toLocaleDateString(locale);
        expect(actualDate).to.equal(expectedDate);
    });

    it("should return previous date on getSaintsOfDay(undefined)", () => {
        const sanctus = new Sanctus();
        sanctus.setDate(new Date(2025, 2, 15));
        sanctus.getSaintsOfDay(undefined);
        const date = sanctus.getCurrentDate();

        assert(date !== undefined && date !== null);

        // Format both expected and actual date to a locale-specific string
        const expectedDate = new Date(2025, 2, 15).toLocaleDateString(locale);
        const actualDate = date.toLocaleDateString(locale);
        expect(actualDate).to.equal(expectedDate);
    });
    it("should return previous date on getSaintsOfDay(new Date())", () => {
        const sanctus = new Sanctus();
        sanctus.setDate(new Date(2025, 2, 15));
        const response: SaintInfo[] = sanctus.getSaintsOfDay(new Date(2025, 2, 16));
        const date = sanctus.getCurrentDate();

        const expectedDate = new Date(2025, 2, 15).toLocaleDateString(locale);
        const actualDate = date.toLocaleDateString(locale);
        expect(actualDate).to.equal(expectedDate); // date not modified
        expect(response.length).be.greaterThan(1)
    });

});
