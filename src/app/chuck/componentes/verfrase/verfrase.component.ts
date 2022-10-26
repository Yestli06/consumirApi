import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Frase } from '../../modelos/frase';
@Component({
  selector: 'app-verfrase',
  templateUrl: './verfrase.component.html',
  styleUrls: ['./verfrase.component.css']
})
export class VerfraseComponent implements OnInit {
  public frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  constructor(private apiservice: ApiService) { }

  fraseRecibida(frase: Frase) {
    this.frase = frase;
  }

  ngOnInit() {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
  }

}
