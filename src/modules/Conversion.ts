type ToOptionalType = 'jp' | 'ad';

export class Conversion {
	public static toJP(data: string[][], targetColumn: string, to: string): string[][] {
		const result: string[][] = [];

		const targetColumnIndex = data[0].findIndex((column) => column === targetColumn);
		if (targetColumnIndex === -1) {
			throw new Error('指定されたカラムが見つかりませんでした');
		}

		data.forEach((line, index) => {
			if (index === 0) {
				result.push(line);
				return;
			}

			const converted = Conversion.convert(line[targetColumnIndex], to as ToOptionalType);
			line[targetColumnIndex] = converted;
			result.push(line);
		});
		return result;
	}

	private static convert(data: string, to: ToOptionalType): string {
		switch (to) {
		case 'jp':
			// xxxx/xx/xx -> xxxx-xx-xx
			// Intlを使う
			return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'long', year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(data));
			// return data;
		case 'ad':
			return data;
		default:
			const _: never = to;
			throw new Error('指定された変換先が不正です');
		}
	}
}
