import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="juan";
  apellido= "diaz";
  edad=18;
  //empresa="pildoras informaticas";


  //getEdad(){
  // return this.edad;
  //}
  habilitacionCuadro=false;

  usuRegsitrados=false;

  getRegistroUsuario(){
    this.usuRegsitrados=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
