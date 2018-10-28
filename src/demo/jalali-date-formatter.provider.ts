import {Injectable} from '@angular/core';
import {CalendarDateFormatterInterface, DateAdapter, DateFormatterParams} from 'angular-calendar';
import moment from 'moment-jalaali';
import { formatDate } from '@angular/common';

@Injectable()
export class CalendarJalaliDateFormatter
  implements CalendarDateFormatterInterface {
  constructor(
    protected dateAdapter: DateAdapter
  ) {
    moment.loadPersian()
  }

  /**
   * The month view header week day labels
   */
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
   return formatDate(date, 'EEEE', locale);
  }

  /**
   * The month view cell day number
   */
  public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
    return moment(date)
      .locale(locale)
      .format('jD');
  }

  /**
   * The month view title
   */
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    return moment(date).locale(locale).format('jMMMM') + moment(date).format('jYYYY');
  }

  /**
   * The week view header week day labels
   */
  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'EEEE', locale);
  }

  /**
   * The week view sub header day and month labels
   */
  public weekViewColumnSubHeader({
    date,
    locale
  }: DateFormatterParams): string {
    return moment(date).locale(locale).format('jMMMM') + moment(date)
      .format('jD');
  }

  /**
   * The week view title
   */
  public weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }: DateFormatterParams): string {

    return formatDate(date, 'EEEE', locale) +  moment(date)
      .format('jD') + ' ' +  moment(date).locale(locale).format('jMMMM') + ' '  + moment(date).format('jYYYY');
  }

  /**
   * The time formatting down the left hand side of the week view
   */
  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'h a', locale);
  }

  /**
   * The time formatting down the left hand side of the day view
   */
  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'h a', locale);
  }

  /**
   * The day view title
   */
  public dayViewTitle({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'EEEE', locale) +  moment(date)
      .format('jD') + ' ' +  moment(date).locale(locale).format('jMMMM') + ' '  + moment(date).format('jYYYY');
  }
}