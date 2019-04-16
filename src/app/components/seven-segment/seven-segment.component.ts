import { Component, OnInit } from '@angular/core';

import { parseInputIntoNumbers } from '../../functions/seven-segment.utils';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-seven-segment',
    templateUrl: './seven-segment.component.html',
    styleUrls: ['./seven-segment.component.scss']
})
export class SevenSegmentComponent implements OnInit {

    public fileData: string;
    public output: string;
    public file: File;
    public outputFile: File;
    private correctOutput: string;
    public testResult: string;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
    }

    private reset() {
        this.output = undefined;
        this.outputFile = undefined;
        this.testResult = undefined;
    }

    readInputFile(event) {
        this.reset();
        this.file = event.target.files[0];
        const reader = this.dataService.readFileInput(this.file);
        reader.onload = (e) => {
            this.fileData = reader.result as string;
        };
    }

    parseInput() {
        this.output = parseInputIntoNumbers(this.fileData);
    }

    readTestFile(event) {
        this.outputFile = event.target.files[0];
        const reader = this.dataService.readFileInput(this.outputFile);
        reader.onload = (e) => {
            this.correctOutput = reader.result as string;
        };
    }

    testOutput() {
        this.testResult = this.output === this.correctOutput ? 'PASS' : 'Fail';
    }

}
