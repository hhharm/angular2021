import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserInfoService } from './core/services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef;

  constructor(public userInfo: UserInfoService) {}

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
}
