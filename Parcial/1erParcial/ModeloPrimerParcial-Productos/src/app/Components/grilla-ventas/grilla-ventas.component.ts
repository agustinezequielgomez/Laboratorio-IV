import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grilla-ventas',
  templateUrl: './grilla-ventas.component.html',
  styleUrls: ['./grilla-ventas.component.css']
})
export class GrillaVentasComponent implements OnInit {

  @Input() elementos: any[];
  public attributes: any[];
  constructor() { }

  ngOnInit() {
    timer(500).subscribe(() => {
      this.attributes = Object.keys(this.elementos[0]);
    });
  }

}
