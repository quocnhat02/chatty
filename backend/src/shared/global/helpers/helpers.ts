export class Helpers {
  static firstLetterUppercase(str: string): string {
    const valueString = str.toLowerCase();
    return valueString
      .split(' ')
      .map((value: string) => {
        return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
      })
      .join(' ');
  }

  static lowerCase(str: string): string {
    return str.toLowerCase();
  }

  static generateRandomIntegers(integerLength: number): number {
    const charaters = '0123456789';
    let result = '';
    const charactersLength = charaters.length;

    for (let i = 0; i < integerLength; i++) {
      result += charaters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return parseInt(result, 10);
  }
}
