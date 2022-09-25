import fs from 'fs';
import iconv from "iconv-lite";

export class CSV {
	#data: string[][];

	constructor(path: string) {
		const data = fs.readFileSync(path, { encoding: 'utf8' });
		this.#data = CSV.parse(data);
	}

	public static parse(data: string): string[][] {
		const lines = (() => {
			const splitted = data.split('\n');
			// if endWith \r, remove it
			splitted.forEach((line, index) => {
				if (line.endsWith('\r')) {
					splitted[index] = line.slice(0, -1);
				}
			});
			return splitted;
		})();
		return lines.map((line) => line.split(','));
	}

	public getData(): string[][] {
		return this.#data;
	}

	public static createCSV(data: string[][], fileName: string, encoding: string = "Shift_JIS"): void {
		// ${filename}-output.csv
		// filenameの末尾には.csvがあるので除去
		const outputFileName = fileName.slice(0, -4) + '-output.csv';
		const outputData = data.map((line) => line.join(',')).join('\r\n');
		if (encoding) {
			fs.writeFileSync(outputFileName, iconv.encode(outputData, encoding));
		}
	}
}
