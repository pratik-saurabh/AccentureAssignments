import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent implements OnInit {
  data: string;
  text: string;
  result:string;
  Resultarray: string[];
  charValue:any;
  count:number=0;
  constructor() { }

  ngOnInit() {
  }
  ReverseStringUsingSplit() {
    var result = [];
    var temp = this.data.split(" ");
    for (var index = temp.length-1; index >=0 ; index--) {
      var storeVal = temp[index].split("");
      var reversedVal = storeVal.reverse();
      var stringVal = reversedVal.join("");
      result.push(stringVal.toString());
    }
    this.text = result.join(" ");
  }

  reversingAString()
  {
    var charArray = Object.assign([], this.charValue);
    //this.findIndividualStrings(this.data);
    var originalArr = [];
    // var stringLength = text.length;
    
    for(var i=charArray.length-1;i>=0;i--)
    {
      originalArr.push(charArray.pop());
    }
    
    this.result=originalArr.join("");
  }

  
}
