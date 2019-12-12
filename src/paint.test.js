// import { Paint } from "paint.js";

describe('Paint', () => {
    describe('rendering a report', () => {
        beforeEach(() => {
            localStorage.removeItem("paint");
        });

        it('returns an HTML table', () => {
            const paint = new Paint();
            paint.getPaintLeft("blue", 1);
            paint.getPaintLeft("red", 2);
            paint.getPaintLeft("green", 3);
            const expected = '<table><thead><tr><td>Color</td><th>Remaining</th></tr></thead><tbody><tr><td>blue</td></tr>1</td></tr><tr><td>red</td></tr>2</td></tr><tr><td>green</td></tr>3</td></tr></tbody></table>';

            console.log(paint.generateReport());
            expect(paint.generateReport()).toEqual(expected);
        });
    });
});