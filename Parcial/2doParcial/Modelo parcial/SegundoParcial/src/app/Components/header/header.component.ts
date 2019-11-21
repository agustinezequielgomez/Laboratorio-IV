import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public email = this.storage.getSessionStorage('data').email;
  constructor(public storage: StorageService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.storage.deleteLocalStorage('data');
    this.storage.deleteSessionStorage('data');
    this.router.navigate(['Access']);
  }
}
