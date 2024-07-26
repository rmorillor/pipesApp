import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'roy';
  public nameUpper: string = 'ROY';
  public fullName: string = 'RoY';
  public customDate: Date = new Date();

}
