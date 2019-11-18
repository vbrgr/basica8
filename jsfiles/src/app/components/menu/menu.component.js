"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let MenuComponent = class MenuComponent {
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
};
MenuComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFTbEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUV4QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYO2dCQUNJLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEtBQUssRUFBRSxDQUFDO3dCQUNBLEtBQUssRUFBRSxhQUFhO3dCQUNyQiw0QkFBNEI7d0JBQzNCLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLFVBQVUsRUFBRSxPQUFPO3dCQUNuQix1QkFBdUIsRUFBRSxjQUFjO3FCQUMxQztvQkFDRDt3QkFDRSxLQUFLLEVBQUUsY0FBYzt3QkFDckIsVUFBVSxFQUFFLGNBQWM7d0JBQzFCLHVCQUF1QixFQUFFLGNBQWM7d0JBQ3ZDLElBQUksRUFBRSwyQkFBMkI7cUJBQ2xDO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixVQUFVLEVBQUUsVUFBVTt3QkFDdEIsdUJBQXVCLEVBQUUsY0FBYzt3QkFDdkMsSUFBSSxFQUFFLDJCQUEyQjtxQkFDbEM7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLFVBQVUsRUFBRSxVQUFVO3dCQUN0Qix1QkFBdUIsRUFBRSxjQUFjO3dCQUN2QyxJQUFJLEVBQUUsMkJBQTJCO3FCQUNsQztpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsS0FBSyxFQUFFLENBQUM7d0JBQ0EsS0FBSyxFQUFFLFVBQVU7d0JBQ2xCLDRCQUE0Qjt3QkFDM0IsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsVUFBVSxFQUFFLE9BQU87d0JBQ25CLHVCQUF1QixFQUFFLGNBQWM7cUJBQzFDO2lCQUNKO2FBQ0o7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ0EsS0FBSyxFQUFFLFVBQVU7d0JBQ2xCLDRCQUE0Qjt3QkFDM0IsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLHVCQUF1QixFQUFFLGNBQWM7cUJBQzFDO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsS0FBSyxFQUFFLENBQUM7d0JBQ0EsS0FBSyxFQUFFLGVBQWU7d0JBQ3hCLDRCQUE0Qjt3QkFDMUIsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsVUFBVSxFQUFFLGFBQWE7d0JBQ3pCLHVCQUF1QixFQUFFLGNBQWM7cUJBQzFDO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixLQUFLLEVBQUUsQ0FBQzt3QkFDQSxLQUFLLEVBQUUsZUFBZTt3QkFDeEIsNEJBQTRCO3dCQUMxQixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixVQUFVLEVBQUUsZUFBZTt3QkFDM0IsdUJBQXVCLEVBQUUsY0FBYztxQkFDMUM7aUJBQ0o7YUFDSjtTQUNBLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQTtBQXRGWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7R0FDVyxhQUFhLENBc0Z6QjtBQXRGWSxzQ0FBYSJ9