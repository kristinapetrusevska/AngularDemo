import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  
  constructor(public _dataService: DataService){}
  appShow:boolean=this._dataService.currentShow.getValue();
  ngOnInit() {
    if(this._dataService.currentShow.getValue()==false){
      this.appShow=false;
    }else{
      this.appShow=true;
    }
    console.log('appShow: '+this.appShow);
  }
}
