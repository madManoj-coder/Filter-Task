import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Iplayers[], search: string, selectValue: string): Iplayers[] {
    let filterArr: Iplayers[] = value;
    if (!value) {
      return value;
    }
    if (!search) {
      return value;
    }
    if (selectValue === `name`) {
      filterArr = value.filter(player => {
        return player.name.toLowerCase().includes(search.trim().toLowerCase())
      })
    } else if (selectValue === `team`) {
      filterArr = value.filter(player => {
        return player.team.toLowerCase().includes(search.trim().toLowerCase())
      })
    } else if (selectValue === `odiRuns`) {
      let minNum = Math.floor(+search / 1000) * 1000;
      let maxNum = minNum + 1000;

      filterArr = value.filter(player => {
        return player.odiRuns >= minNum && player.odiRuns <= maxNum;
      })
    } else if (selectValue === `testRuns`) {
      let minNum = Math.floor(+search / 1000) * 1000;
      let maxNum = minNum + 1000;

      filterArr = value.filter(player => {
        return player.testRuns >= minNum && player.testRuns <= maxNum;
      })
    } else if (selectValue === `yearDebut`) {
      let minNum = Math.floor(+search / 10) * 10;
      let maxNum = minNum + 10;

      filterArr = value.filter(player => {
        return player.yearDebut >= minNum && player.yearDebut <= maxNum;
      })
    }

    return filterArr;

  }

}
