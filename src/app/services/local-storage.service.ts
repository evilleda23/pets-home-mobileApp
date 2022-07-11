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
  saveParticipant(user: any) {
    this.storage.set('Participant', user);
  }
}
