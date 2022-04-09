import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DragDropFile } from './models/dragdropfile';
import { PubDisplay } from './models/pub-display';
import { GetPubSettingsService } from './services/GetPubSettings/get-pub-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loaded: boolean = false;
  public data = new Array<PubDisplay>();

  constructor(
    private translate: TranslateService,
    private pub: GetPubSettingsService,
  ) {
    const parser = new DOMParser();
    this.translate.setDefaultLang('en');
    this.pub.loaded.subscribe((value) => {
      const pd = value.children[0];
      for(var i=0; i < pd.children.length; i++) {
        const entry = pd.children[i];
        const pubData = parser.parseFromString(entry.outerHTML, 'text/xml').children[0];
        this.data.push(new PubDisplay({
          title: pubData.getAttribute('profileName'),
          method: pubData.getAttribute('publishMethod'),
          publishurl: pubData.getAttribute('publishUrl'),
          username: pubData.getAttribute('userName'),
          userpwd: pubData.getAttribute('userPWD'),
        }));
      }
      this.loaded = true;
    });
  }

  onFileUpload(files: Array<DragDropFile>) {
    files.forEach((file: DragDropFile) => {
      this.pub.getPublishSettings(file.url);
    })
  }
}
