import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
        this.items = [
          {
              label: 'Input',
              icon: 'pi pi-pw pi-file',
              items: [{
                      label: 'Input Group',
                     // icon: 'pi pi-fw pi-plus',
                      icon: 'pi pi-fw pi-filter',
                      routerLink: 'input',
                      routerLinkActiveOptions: '{exact:true}'
                  },
                  {
                    label: 'AutoComplete',
                    routerLink: 'autocomplete',
                    routerLinkActiveOptions: '{exact:true}',
                    icon: 'pi pi-fw pi-external-link'
                  },
                  {
                    label: 'Dropdown',
                    routerLink: 'dropdown',
                    routerLinkActiveOptions: '{exact:true}',
                    icon: 'pi pi-fw pi-external-link'
                  },
                  {
                    label: 'Calendar',
                    routerLink: 'calendar',
                    routerLinkActiveOptions: '{exact:true}',
                    icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
            label: 'Charts',
            icon: 'pi pi-pw pi-chart-bar',
            items: [{
                    label: 'HiCharts',
                   // icon: 'pi pi-fw pi-plus',
                    icon: 'pi pi-fw pi-filter',
                    routerLink: 'chart',
                    routerLinkActiveOptions: '{exact:true}'
                }
            ]
        },
        {
          label: 'Galleria',
          icon: 'pi pi-pw pi-images',
          items: [{
                  label: 'Galleria',
                 // icon: 'pi pi-fw pi-plus',
                  icon: 'pi pi-fw pi-filter',
                  routerLink: 'galleria',
                  routerLinkActiveOptions: '{exact:true}'
              }
          ]
      },
      {
          label: 'Drag and Drop',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'Drag and Drop',
                // icon: 'pi pi-fw pi-plus',
                  icon: 'pi pi-fw pi-filter',
                  routerLink: 'draganddrop',
                  routerLinkActiveOptions: '{exact:true}'
              }
          ]
      },
      {
          label: 'Forms',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'Reactive Form',
                // icon: 'pi pi-fw pi-plus',
                  icon: 'pi pi-fw pi-filter',
                  routerLink: 'reactive-form',
                  routerLinkActiveOptions: '{exact:true}'
              }
          ]
      },
      ];
  }
}
