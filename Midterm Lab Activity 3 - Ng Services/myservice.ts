import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  ShowTodayDate(): any {
    let ndate = new Date();
    return ndate;
  }
  serviceproperty = 'My Service Component';
}
