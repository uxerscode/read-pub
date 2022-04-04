import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPubSettingsService {
  public loaded = new EventEmitter();

  constructor() { }

  readFile(url:any) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const parser = new DOMParser();
        const data = parser.parseFromString(request.response, 'text/xml');
        this.loaded.emit(data);
        return data;
      }
      return null;
    }
  }

  getPublishSettings(url:any) {
    this.readFile(url);
  }
}
