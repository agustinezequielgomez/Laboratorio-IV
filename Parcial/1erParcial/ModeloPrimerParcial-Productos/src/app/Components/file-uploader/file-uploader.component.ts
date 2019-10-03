import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost/API/Productos/fileUpload',
    method: 'POST',
    disableMultipart: false,
    itemAlias: 'foto'});
  constructor() { }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
  }

  uploadFile() {
    console.log('subo el archivo');
    this.uploader.uploadAll();
  }
}
