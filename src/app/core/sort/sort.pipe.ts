import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  normalize(s: any): any {
    let nullValue = '';
    if(s === null) {
        return nullValue;
    }
    else if(typeof s === "string") {
        return s.toUpperCase();
    }
    return s;
  }

  transform(objArr: any[], property: string, order: string = 'asc'): any {
    console.log("Sort:", objArr, property, order);

    let sorted = objArr.sort((a,b): number => {
   
      //x & y are placeholders for a & b so they can later be restored after being changes to uppercase for sorting case insensitive
      let x = this.normalize(a[property]);
      let y = this.normalize(b[property]);

      if(x === y) return 0;
      if(order === 'desc') {
        return (x > y) ? -1 : 1;
      } else {
        return (x < y) ? -1 : 1;
      }

      // //changing strings to uppercase and leaving numbers alone so that numbers will sort correctly (i.e., 2 doesn't sort as greater than 10)
      // if(typeof a[property] == "number") { } 
      //   else if (a[property] == null) { //changing null values to empty string for sorting purposes
      //     a[property]="";
      //   }
      //   else if (typeof a[property] != "string") {
      //   a[property]=a[property].toString().toUpperCase();
      // }
      //   else {
      //   a[property]=a[property].toUpperCase();
      // }

      // if(typeof b[property] == "number") {}
      //    else if (b[property] == null) { //changing null values to empty string for sorting purposes
      //     b[property]="";
      //   }
      //   else if (typeof b[property] != "string") {
      //   b[property]=b[property].toString().toUpperCase();
      // }
      //   else {
      //   b[property]=b[property].toUpperCase();
      // }

      //evaluating the sort, returning a and b back to their original, nonuppercase form, and returning the appropriate sort equation
      // if(a[property] === b[property]) {
      //   a[property]=x;
      //   b[property]=y;
      //   return 0;
      // }

      // if(order === 'desc') {
      //   let z = +(a[property]<b[property]) 
      //   a[property]=x;
      //   b[property]=y;
      //   return z;
      //  }
      //  else { 
      //   let z = +(a[property] > b[property])
      //   a[property]=x;
      //   b[property]=y;
      //   return z;
      // }
    });
    console.log("Sorted: ",sorted);
    return sorted;
  }
}
