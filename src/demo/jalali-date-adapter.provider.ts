import {DateAdapter} from 'angular-calendar';
import moment from 'moment-jalaali';

export class JalaliAdapter implements DateAdapter {

  addDays(date: Date | string | number, amount: number) {
    return moment(date)
      .add(amount, 'days')
      .toDate();
  }

  addHours(date: Date | string | number, amount: number) {
    return moment(date)
      .add(amount, 'hours')
      .toDate();
  }

  addMinutes(date: Date | string | number, amount: number) {
    return moment(date)
      .add(amount, 'minutes')
      .toDate();
  }

  addSeconds(date: Date | string | number, amount: number): Date {
    return moment(date)
      .add(amount, 'seconds')
      .toDate();
  }

  differenceInDays(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft).diff(moment(dateRight), 'days');
  }

  differenceInMinutes(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft).diff(moment(dateRight), 'minutes');
  }

  differenceInSeconds(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft).diff(moment(dateRight), 'seconds');
  }

  endOfDay(date: Date | string | number): Date {
    return moment(date)
      .endOf('day')
      .toDate();
  }

  endOfMonth(date: Date | string | number): Date {
    return moment(date)
      .endOf('jMonth')
      .toDate();
  }

  endOfWeek(date: Date | string | number): Date {
    return moment(date)
      .endOf('week')
      .toDate();
  }

  getDay(date: Date | string | number): number {
    return moment(date).day();
  }

  getMonth(date: Date | string | number): number {
    return moment(date).jMonth();
  }

  isSameDay(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    return moment(dateLeft).isSame(moment(dateRight), 'day');
  }

  isSameMonth(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    return moment(dateLeft).isSame(moment(dateRight), 'jMonth');
  }

  isSameSecond(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    return moment(dateLeft).isSame(moment(dateRight), 'second');
  }

  max(...dates: Array<Date | string | number>): Date {
    return moment.max(dates.map(date => moment(date))).toDate();
  }

  setHours(date: Date | string | number, hours: number): Date {
    return moment(date)
      .hours(hours)
      .toDate();
  }

  setMinutes(date: Date | string | number, minutes: number): Date {
    return moment(date)
      .minutes(minutes)
      .toDate();
  }

  startOfDay(date: Date | string | number): Date {
    return moment(date)
      .startOf('day')
      .toDate();
  }

  startOfMinute(date: Date | string | number): Date {
    return moment(date)
      .startOf('minute')
      .toDate();
  }

  startOfMonth(date: Date | string | number): Date {
    return moment(date)
      .startOf('jMonth')
      .toDate();
  }

  startOfWeek(date: Date | string | number): Date {
    return moment(date)
      .startOf('week')
      .toDate();
  }

  getHours(date: Date | string | number): number {
    return moment(date).hours();
  }

  getMinutes(date: Date | string | number): number {
    return moment(date).minutes();
  }

  addWeeks(date: Date | string | number, amount: number): Date {
      return moment(date)
        .add(amount, 'week')
        .toDate();
    }

    addMonths(date: Date | string | number, amount: number): Date {
      return moment(date)
        .add(amount, 'jMonth')
        .toDate();
    }

    subDays(date: Date | string | number, amount: number): Date {
      return moment(date)
        .subtract(amount, 'days')
        .toDate();
    }

    subWeeks(date: Date | string | number, amount: number): Date {
      return moment(date)
        .subtract(amount, 'week')
        .toDate();
    }

    subMonths(date: Date | string | number, amount: number): Date {
      return moment(date)
        .subtract(amount, 'jMonth')
        .toDate();
    }

    getISOWeek(date: Date | string | number): number {
      return moment(date).isoWeek();
    }

    setDate(date: Date | string | number, dayOfMonth: number): Date {
      return moment(date)
        .jDate(dayOfMonth)
        .toDate();
    }

    setMonth(date: Date | string | number, month: number): Date {
      return moment(date)
        .jMonth(month)
        .toDate();
    }

    setYear(date: Date | string | number, year: number): Date {
      return moment(date)
        .jYear(year)
        .toDate();
    }

    getDate(date: Date | string | number): number {
      return moment(date).date();
    }

    getYear(date: Date | string | number): number {
      return moment(date).year();
    }

}