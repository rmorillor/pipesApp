import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Roy';
  public gender: 'male'|'famale' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'famale': 'invitarla'
  }
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'famale';
  }

  // i18n Plural y Slice
  public clients: string[] = ['Maria','Pedro','Fernando','Roy','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 esperando',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue
  public person = {
    name: 'Roy',
    age: 46,
    address: 'Sto. Dgo., R.D.'
  }

  //Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otto vampirito';
    }, 3500);
  });

}
