import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessengerService {

  message = new Subject();


  constructor() { }

}
