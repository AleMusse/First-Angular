import { Component } from '@angular/core';
import { Stanza } from './IStanza/IStanze';
import { stanze } from './Object/stanze';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  stanze: Stanza[] = stanze;
  add: Stanza[] = [];
  tot: number = 0;
  //per questa variabile ho usato gemini perche non riuscivo a far funzionare gli id...
  btnDis: { [id: number]: boolean } = {};


  clicco(stanza: Stanza): void {
    const addStanza = { ...stanza };
    this.add.push(addStanza);
    stanza.disponibile == !stanza.disponibile;
    this.tot += stanza.prezzo;
    this.btnDis[stanza.id] = true;    
  }

  cliccaRimuovi(stanza: Stanza): void {
    const index = this.add.indexOf(stanza);
    this.add.splice(index, 1);
    this.tot -= stanza.prezzo;
    this.btnDis[stanza.id] = false;
  }
 
}
