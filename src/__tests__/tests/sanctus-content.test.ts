import {describe, expect, it} from "vitest";
import {Sanctus} from "../../sanctus.ts";
import {SaintInfo} from "../../sanctus-interface.ts";

describe("Sanctus module content verify", () => {

    it("should return content for 01/01", () => {
        const sanctus = new Sanctus(new Date(2025, 0, 1));
        const item: SaintInfo | undefined = sanctus.getSaint();

        expect(item?.name).to.equal("Santa María, Madre de Dios, virgen");
    });

    it("should return list for getSaintsOfDay", () => {
        const sanctus = new Sanctus(new Date(2025, 7, 25));
        const items: SaintInfo[] | undefined = sanctus.getSaintsOfDay();

        expect(items.length).to.be.greaterThan(2);
    });

    it("should return list for getSaintFromMonthDay", () => {
        const sanctus = new Sanctus();
        const item: SaintInfo | undefined = sanctus.getSaintFromMonthDay(7, 25);

        expect(item).not.toBeNull();
    });

    it("should return content for 09/29", () => {
        const sanctus = new Sanctus(new Date(2025, 8, 29));
        const item: SaintInfo | undefined = sanctus.getSaint();

        expect(item?.name).to.equal("Santos Arcángeles Miguel, Gabriel y Rafael"); // src: https://liturgiapapal.org/attachments/article/1093/PROPIO%20DE%20LOS%20SANTOS.pdf#page=9
    });
    it("should return content for 17/03", () => {
        const sanctus = new Sanctus(new Date(2025, 2, 17));
        const item: SaintInfo | undefined = sanctus.getSaint();

        expect(item?.name).to.equal("San Patricio");
    });

    it("should return content for 07/26", () => {
        const sanctus = new Sanctus(new Date(2025, 6, 26));
        const item: SaintInfo | undefined = sanctus.getSaint();

        expect(item?.name).to.equal("San Joaquín y santa Ana, padres de la bienaventurada Virgen María");
    });

    it("should return list for getAllSaints", () => {
        const sanctus = new Sanctus(new Date(2025, 7, 26));
        const list: SaintInfo[] = sanctus.getAllSaints();

        expect(list.length).greaterThan(100);
    });

    it("should return saint for today by default", () => {
        const sanctus = new Sanctus();
        const item: SaintInfo | undefined = sanctus.getSaint();

        expect(item).not.toBeNull();
    });

});
