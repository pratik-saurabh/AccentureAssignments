import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {

  fullname: string[] = new Array();
  resultantCharCountMapArray: string[] = new Array();


  constructor() { }

  ngOnInit() {
    //this.disp(this.fullname);
  }


  count: number = 0;

  GetCountOfCharacters() {
      this.resultantCharCountMapArray = this.GetStringArrayFromComma(this.fullname);
  }

 countLetters(stringInput, charValue) {
    var count = 0;
    var stringLength = stringInput.length;
    for (var index = 0; index < stringLength; index++) {
      if (stringInput.charAt(index) == charValue) {
        count++;
      }
    }

    return count;
  }

  GetStringArrayFromComma(text) {
    var commaSeparatedArray = text.split(",");
    var convertedCharArray = [];
    var finalArray = [];
    commaSeparatedArray.forEach(x => {
      var temp = x.split("");
      temp.forEach(x => convertedCharArray.push(x));
    });
    var uniqueCharArray = convertedCharArray.filter((item, index) => convertedCharArray.indexOf(item) === index);

    uniqueCharArray.forEach(x => {
      var count = 0;
      count += this.countLetters(text, x);
      var MapObject =
      {
        CharVal: x,
        CountVal: count
      };
      finalArray.push(MapObject);
    });

    return finalArray;
  }


}
