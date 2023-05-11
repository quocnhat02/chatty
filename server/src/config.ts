import dotenv from 'dotenv';

dotenv.config({});

class Config {
  public MONGODB_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;

  private readonly DEFAULT_MONGODB_URL =
    'mongodb://localhost:27017/chattyapp-backend';

  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL || this.DEFAULT_MONGODB_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || '1234567';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
  }

  public validateConfig(): void {
    for (let [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
