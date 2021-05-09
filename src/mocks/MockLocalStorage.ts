export default class LocalStorageMock {
  private store: {
    [key: string]: string;
  };

  public length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
    this.length += 1;
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  key(index: number): string | null {
    if (this.store[index]) {
      return this.store[index];
    }
    return null;
  }
}
