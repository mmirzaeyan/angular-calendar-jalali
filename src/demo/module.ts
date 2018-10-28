import { registerLocaleData } from '@angular/common';
import localeFa from '@angular/common/locales/fa';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './component';
import {JalaliAdapter} from './jalali-date-adapter.provider';
import {CalendarJalaliDateFormatter} from './jalali-date-formatter.provider';

registerLocaleData(localeFa);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: function() {
        return new JalaliAdapter();
      }
    }, {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarJalaliDateFormatter
        }
      })
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DemoModule {}
