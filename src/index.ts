import yargs from 'yargs/yargs';

import { CSV } from '@/modules/CSV.js';
import { Conversion } from './modules/Conversion.js';

// CLI引数を受け取る
const argv = yargs(process.argv.slice(2)).options({
	p: { type: 'string', alias: 'path', demandOption: true , description: 'CSVファイルへのパス' },
	c: { type: 'string', alias: 'column', demandOption: true, description: '変換対象のヘッダ名' },
	t: { type: 'string', alias: 'to', demandOption: true, description: '変換先の形式' },
	e: { type: 'string', alias: 'encoding', demandOption: false, description: 'ファイルのエンコーディング' },
}).parseSync();

const csv = new CSV(argv.p);

const result = Conversion.toJP(csv.getData(), argv.c, argv.t);

console.log(result);

const fileName = argv.p.split('\\').pop()?.slice(0, -4) ?? 'output';

console.log(fileName);

CSV.createCSV(result, argv.p, argv.e);
