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
    var uniqueArray = commaSeparatedArray.filter(function(item, position) {
      return commaSeparatedArray.indexOf(item.trim()) == position;
  })
  this.resultArray=uniqueArray;
  }
}
