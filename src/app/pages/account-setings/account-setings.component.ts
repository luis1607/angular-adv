import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { element } from 'protractor';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-setings',
  templateUrl: './account-setings.component.html',
  styles: [
  ]
})
export class AccountSetingsComponent implements OnInit {
  
  
  constructor( private settingService:SettingsService) { }

  ngOnInit(): void {
    
    this.settingService.checkCurrentTheme();
    
  }

  changeTheme(theme:String){
    
    this.settingService.changeTheme(theme);

    
    

  }

 

}
