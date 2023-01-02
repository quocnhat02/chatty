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
}
