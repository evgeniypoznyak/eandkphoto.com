import { Injectable } from '@angular/core';
import { Upload } from '../shared/Upload';


@Injectable()
export class UploadService {
  private basePath: string = '/uploads';
  uploads: '';
  constructor() { }

  pushUpload(upload: Upload) {
   // upload.file.name
   // upload.file
    this.saveFileData(upload)
  }


  private saveFileData(upload: Upload) {

  }


}
