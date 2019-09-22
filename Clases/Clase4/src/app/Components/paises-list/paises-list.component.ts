import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../Services/paises.service';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  public paises: any[];
  public pais: string;
  public capital: string;
  constructor(private paisService: PaisesService, private http: HttpService) { }

  ngOnInit() {
    this.http.post().subscribe((res) =>
    {
      console.log(res);
    });
  }

  buscarPais(pais: string){
        this.paisService.getCountriesByName(pais).subscribe(response => this.paises = response);
  }

  buscarPaisPorCapital(capital: string)
  {
    this.paisService.getCountriesByCapital(capital).subscribe(response => this.paises = response);
  }

}
