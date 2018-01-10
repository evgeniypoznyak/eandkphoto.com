import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class PortfolioService {

  portfolio = false;
  category = false;

  isSmall = new Subject();
  constructor() { }

}
