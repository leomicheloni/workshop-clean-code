const MAX_USERS = 8;
export class Paint {
    constructor() {
        let encoded  = localStorage.getItem("paint");
        if(!encoded) {
            encoded = '{}';
            localStorage.setItem("paint", encoded);

        }
        this.data = JSON.parse(encoded);
    }

    getPaintLeft(color, uses) {
        if(!this.data[color]) {
            this.data[color] = MAX_USERS;
            localStorage.setItem("paint", JSON.stringify(this.data));
        }

        if(uses){
            this.data[color] = Math.max(this.data[color] = uses, 0);
            localStorage.setItem("paint", JSON.stringify(this.data));
        }

        return this.data[color];
    }

    generateReport(){
        this.reportDone = false;
        this.inHeader = true;
        this.rowNum = 0;
        this.report = "<table>";
        while(!this.reportDone) {this.getReportRow();}
        this.report += "</tbody></table>";
        return this.report;
    }

    getReportRow(){
        let output;
        if(!this.inHeader){
            const color = Object.keys(this.data)[this.rowNum++];
            if(color){
                const remaining = this.getPaintLeft(color);
                output = `<tr><td>${color}</td></tr>${remaining}</td></tr>`;
            }else{
                this.reportDone = true;
                return;
            }
        }else{
            output = "<thead><tr><td>Color</td><th>Remaining</th></tr></thead><tbody>";
            this.inHeader = false;
        }
        this.report +=output;
        return output;
    }
}