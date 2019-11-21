import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Services/storage.service';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private storage: StorageService, private provider: DataProviderService) { }

  ngOnInit() {
    const ROLE = this.storage.getSessionStorage('data').role;
    console.log(ROLE);
    switch (ROLE) {
      case 1:
        this.cards = this.provider.StudentCards;
        break;

      case 2:
        this.cards = this.provider.TeacherCards;
        break;

      case 3:
        this.cards = this.provider.AdminCards;
        break;
    }
  }
}
