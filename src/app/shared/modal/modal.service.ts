import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ModalService {

  open = new Subject();

  constructor() { }

}
