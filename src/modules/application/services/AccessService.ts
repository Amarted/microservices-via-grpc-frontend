import { Injectable } from '@angular/core';

interface AccessData {
  token: string;
}

@Injectable()
export class AccessService {
  private localStorageAccessDataKey = 'acessData';
  private accessData: AccessData | null = null;

  public initialize(): void {
    this.accessData = this.restore();
  }

  public authorize(token: string): void {
    let accessData = this.restore();
    if (accessData) {
      accessData.token = token;
    } else {
      accessData = { token };
    }

    this.store(accessData);
  }

  public unauthorize(): void {
    this.accessData = null;
    localStorage.removeItem(this.localStorageAccessDataKey);
  }

  public isAuthorized(): boolean {
    return this.accessData?.token !== undefined;
  }

  private store(accessData: AccessData): void {
    localStorage.setItem(this.localStorageAccessDataKey, JSON.stringify(accessData));
  }

  private restore(): AccessData | null {
    let accessData: AccessData | null = null;

    const accessDataSerialized = localStorage.getItem(this.localStorageAccessDataKey);
    if (accessDataSerialized) {
      accessData = JSON.parse(accessDataSerialized) as AccessData;
    }

    return accessData;
  }

}
