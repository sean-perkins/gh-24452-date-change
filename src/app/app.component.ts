import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  dateValue = new Date().toISOString();

  form = new FormGroup({
    date: new FormControl(new Date().toISOString())
  });

  onNgModelDateChange(ev) {
    console.log('[ionChange -- ngModel]', ev);
  }

  onFormControlDateChange(ev) {
    console.log('[ionChange -- formControl]', ev);
  }
}
