import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage = new Storage();
  constructor() {
    this.init();
  }
  async init() {
    await this.storage.create();
  }

  async getCurrentParticipant() {
    const user = await this.storage.get('Participant');
    return user;
  }
  async saveParticipant(user: any) {
    await this.storage.set('Participant', user);
  }
  async saveToken(token: string) {
    await this.storage.set('Token', token);
  }
  async getToken() {
    return this.storage.get('Token');
  }
  async clear() {
    await this.storage.clear();
  }
}
