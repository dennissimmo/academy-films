import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'ukrainianDate'
})
export class UkrainianDatePipe implements PipeTransform {
  transform(date: Date | undefined): string {
    if (date === undefined) {
      return '';
    }

    return date.toLocaleString('uk-UA');
  }
}
