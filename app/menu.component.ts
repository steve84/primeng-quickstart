import {Component} from 'angular2/core';
import {Menubar, Dialog} from 'primeng/primeng';

@Component({
  selector: 'main-menubar',
  directives: [Menubar, Dialog],
  template: `
  <p-menubar [autoDisplay]="false">
       <ul>
         <li><a><span>Bearbeitung</span></a>
           <ul>
              <li><a><span>Referenzdaten</span></a>
                <ul>
                  <li><a><span>Länder</span></a></li>
                  <li><a><span>Postleitzahltyp</span></a></li>
                  <li><a><span>Sprachen</span></a></li>
                </ul>
              </li>
              <li><a (click)="showDialog()"><span>Suche nach Gaia-Id</span></a></li>
           </ul>
         </li>
         <li><a><span>Hilfe</span></a>
           <ul>
              <li><a><span>Referenzdaten</span></a></li>
           </ul>
         </li>
       </ul>
  </p-menubar>
  <p-dialog header="Title" [(visible)]="visibleGaiaIdDlg">
    Content
  </p-dialog>
  `
})

export class MenuComponent {

  private visibleGaiaIdDlg: boolean;
  constructor() {
    this.visibleGaiaIdDlg = false;
  }

  ngOnInit() {
  }

  showDialog(){
    this.visibleGaiaIdDlg = true;
  }
}
