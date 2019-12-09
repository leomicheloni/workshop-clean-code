import {Paint} from "paint.js";

describe('Paint', () => {
    describe('rendering a report', () => {
        beforeEach(()=>{
            localStorage.removeItem("paint");
        });
    
        it('returns an HTML table', () =>{
            const paint = new Paint();
            paint.getPaintLeft("blue", 1);
            paint.getPaintLeft("red", 2);
            paint.getPaintLeft("green", 3);
            const expect =
                '<table><thead>'+
                    '<tr><th>Color</th><th>Remaining</th></tr></thead><tbody>' +
                    '<tr><td>blue</td><td>7</td></tr>' +
                    '<tr><td>read</td><td>6</td></tr>' +
                    '<tr><td>green</td><td>5</td></tr>' +
                '</tbody></table>'
            expect(paint.generateReport()).toEqual(expected);
        });
    });
});