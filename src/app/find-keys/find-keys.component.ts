import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-find-keys',
  templateUrl: './find-keys.component.html',
  styleUrls: ['./find-keys.component.css']
})
export class FindKeysComponent implements OnInit {
  textValue: string='{"id":"1","name":"pratik"}';

  constructor() { }

  ngOnInit() {
    //var temp = this.FindKeys(this.myObject);
  }
  keys = [];
  
  GetKeys() {
    this.FindKeys(JSON.parse(this.textValue));
    this.textValue="";
  }
  FindKeys(anyObject) {

    var keys = [];
    for (var key in anyObject) {

      if (this.isObject(anyObject, key)) {
        this.keys.push(key);
        var tempObj = anyObject[key];
        this.FindKeys(tempObj);
      }
      else {
        this.keys.push(key);
      }
    }
  }
  isObject(obj, key) {

    if (typeof obj[key] === "object") {
      return true;
    }
    return false;
  }
}
