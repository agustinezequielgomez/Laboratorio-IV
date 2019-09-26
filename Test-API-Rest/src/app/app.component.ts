import { Component, OnInit } from '@angular/core';
import { ApiTestService } from './Services/api-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test-API-Rest';
  constructor(private apiTest: ApiTestService) {}
  
    ngOnInit(): void {
      this.apiTest.login().subscribe((res) => {
        console.log(res);
      })
    }
}
