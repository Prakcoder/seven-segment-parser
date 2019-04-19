import { SEVEN_SEGMENT_PATTERNS } from '../constants/seven-segment.constants';


const ROWS_IN_A_PATTERN = 4;
const COLUMNS_IN_A_NUMBER = 3;
const NUMBERS_IN_A_PATTERN = 9;
const NEW_LINE_CHAR_IN_FILE = String.fromCharCode(10);

export function parseInputIntoNumbers(inputData: string) {
    let outputString = '';
    const lines = inputData.split(NEW_LINE_CHAR_IN_FILE);

    for (let i = 0; i < lines.length - 1; i += ROWS_IN_A_PATTERN) {
        // lines.length -1 because last line is an empty line in file
        const singleInvoicePatterns = getPatternsForSingeInvoice(lines, i);
        const parsedNumber = parsePattern(singleInvoicePatterns);
        outputString += parsedNumber;
    }
    return outputString;
}

function createArrayWithEmptyString(length: number) {
    return Array(length).join('.').split('.');
}

function parsePattern(singleInvoicePatterns: string[]) {
    let parsedNumber = '';
    singleInvoicePatterns.forEach(a => {
        const parsedVal = SEVEN_SEGMENT_PATTERNS[a];
        if (parsedVal === undefined || parsedVal === null) {
            parsedNumber += '?';
        } else {
            parsedNumber += parsedVal;
        }
    });
    return parsedNumber + NEW_LINE_CHAR_IN_FILE;
}

function getPatternsForSingeInvoice(lines: string[], i: number) {
    const singleInvoicePatterns = createArrayWithEmptyString(9);
    const singleInvoice = lines.slice(i, i + ROWS_IN_A_PATTERN);
    singleInvoice.forEach(row => {
        for (let j = 0; j < NUMBERS_IN_A_PATTERN; ++j) {
            singleInvoicePatterns[j] += row.substr(j * COLUMNS_IN_A_NUMBER, COLUMNS_IN_A_NUMBER);
        }
    });
    return singleInvoicePatterns;
}
