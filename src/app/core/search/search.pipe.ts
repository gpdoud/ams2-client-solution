import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(objArr: any[], searchfor: string): any {
    if(searchfor === "")
      return objArr;
    console.log('search pipe - search for: '+searchfor);
    let searchedObjArr = [];
    objArr.forEach(obj => {
      for(let key in obj) {
        let match = false;
        if (typeof(obj[key]) === "string" && key !== "DateCreated") {
          if (obj[key].toUpperCase().includes(searchfor.toUpperCase())) {
            match = true;
            searchedObjArr.push(obj);
          }
        }
        if (match === true) break;
      }
    });
    return searchedObjArr;
  }

}
