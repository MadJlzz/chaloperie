export class Layout {

  public static extraSmall = new Layout('(max-width: 480px)', 'max-width: 480px');

  public static small = new Layout('(max-width: 960px)', 'max-width: 960px');

  public static medium = new Layout('(max-width: 1280px)', 'max-width: 1280px');

  public static large = new Layout('(max-width: 1600px)', 'max-width: 1600px');

  public static extraLarge = new Layout('(max-width: 9999px)', 'max-width: 1980px');

  private constructor(private mediaQuery: string, private style: string) {
  }

  public get MediaQuery(): string {
    return this.mediaQuery;
  }

  public get Style(): string {
    return this.style;
  }

  public static from(mediaQuery: string): Layout {
    return Layout.values().find(layout => layout.mediaQuery === mediaQuery);
  }

  public static values(): Layout[] {
    return [this.extraSmall, this.small, this.medium, this.large, this.extraLarge];
  }

}
