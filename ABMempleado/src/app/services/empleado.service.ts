import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
listEmpleado: Empleado[] = [
{ nombreCompleto: 'Lucas Martinez',correo: 'lmartinez@gmail.com',telefono: 351321456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Soltero'
},
{ nombreCompleto: 'Lucia Mara',correo: 'lmara@gmail.com',telefono: 987321456,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Soltera'
},
{ nombreCompleto: 'Juan Antunez',correo: 'jantunez@gmail.com',telefono: 478921456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Casado'
},
{ nombreCompleto: 'Maria lucidez',correo: 'malucidez@gmail.com',telefono: 987147258,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Casada'
},
{ nombreCompleto: 'Pepe Martin',correo: 'pmartin@gmail.com',telefono: 478921456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Soltero'
},
{ nombreCompleto: 'Antonia Mara',correo: 'amara@gmail.com',telefono: 987321456,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Soltera'
},
{ nombreCompleto: 'Daniel Anet',correo: 'danet@gmail.com',telefono: 789421456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Casado'
},
{ nombreCompleto: 'Lucinda manzano',correo: 'lmanzano@gmail.com',telefono: 987144562,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Casada'
}];
  constructor() { }

  getEmpleados(){
   return  this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleado.splice(index, 1);
  }

}
