import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor() {
  }

  public readFileInput(file: File) {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    return fileReader;
  }
}
