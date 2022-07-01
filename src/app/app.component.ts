import { Component, SimpleChanges } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserAvailable:boolean = false;;
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.isUserAvailable = this.apiService.loadUserData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
}

  title = 'ui-app';
}
