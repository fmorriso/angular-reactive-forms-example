import { Component, VERSION as ngVersion } from '@angular/core';
//
import {VERSION as matVersion} from '@angular/material/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  public get AngularVersion(): string { return ngVersion.full;}
  public get MaterialVersion(): string {return matVersion.full;}
  
}
