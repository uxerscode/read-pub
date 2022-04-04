import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DragdropService } from '../../services/drag-drop/drag-drop.service';
import { DragDropFile } from 'src/app/models/dragdropfile';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  @Input() prompt: string = '';
  @Input() progress: number = 0;
  // progress: number = 0;
  @Input() msg: string = '';
  // msg: string = '';
  @Output() onFileLoaded = new EventEmitter<Array<DragDropFile>>();
  fileArr = new Array<DragDropFile>();
  // fileObj = [];
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    // private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.form = this.fb.group({
      avatar: [null]
    })
  }
  ngOnInit() { }
  upload(e: any) {
    const fileListAsArray = Array.from(e);
    fileListAsArray.forEach((item, i) => {
      const file = (e as HTMLInputElement) as any;
      const url = URL.createObjectURL(file[i]);
      this.fileArr.push(new DragDropFile({ item: item, url: url }));
    });
    this.onFileLoaded.emit(this.fileArr);
  }
}