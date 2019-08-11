import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duplicate-string',
  templateUrl: './duplicate-string.component.html',
  styleUrls: ['./duplicate-string.component.css']
})
export class DuplicateStringComponent implements OnInit {
data:string;
arrayVal: string[] = new Array();
resultArray:string[]=[];
  constructor() { }

  ngOnInit() {
  }
  RemoveDuplicateString()
  {
    var commaSeparatedArray = this.data.split(",");
    var finalArr = [];
    commaSeparatedArray.forEach(x=> {
      finalArr.push(x.trim());
    });
    var uniqueArray = finalArr.filter(function(item, position) {
      return finalArr.indexOf(item) == position;
  })
  this.resultArray=uniqueArray;
  }
}
