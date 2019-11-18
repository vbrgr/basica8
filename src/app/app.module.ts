import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ChipsModule} from 'primeng/chips';
import {CalendarModule} from 'primeng/calendar';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {InputMaskModule} from 'primeng/inputmask';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {SpinnerModule} from 'primeng/spinner';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OrderListModule} from 'primeng/orderlist';
import {GMapModule} from 'primeng/gmap';
import {PaginatorModule} from 'primeng/paginator';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {LightboxModule} from 'primeng/lightbox';
import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ChartModule, HIGHCHARTS_MODULES  } from 'angular-highcharts';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {GalleriaModule} from 'primeng/galleria';
import {DragDropModule} from 'primeng/dragdrop';
import {FocusTrapModule} from 'primeng/focustrap';
import {BlockUIModule} from 'primeng/blockui';
import {CaptchaModule} from 'primeng/captcha';
import {InplaceModule} from 'primeng/inplace';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TerminalModule} from 'primeng/terminal';

import { HomeComponent } from './home/home.component';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { DraganddropComponent } from './components/draganddrop/draganddrop.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    MenuComponent,
    TopbarComponent,
    AutocompleteComponent,
    CalendarComponent,
    ChartComponent,
    GalleriaComponent,
    DraganddropComponent,
    DropdownComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    AccordionModule,
    RadioButtonModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextareaModule,
    ListboxModule,
    InputMaskModule,
    MultiSelectModule,
    PasswordModule,
    RatingModule,
    SliderModule,
    SpinnerModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    ButtonModule,
    SplitButtonModule,
    CarouselModule,
    DataViewModule,
    FullCalendarModule,
    OrganizationChartModule,
    OrderListModule,
    GMapModule,
    PaginatorModule,
    PickListModule,
    TableModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    LightboxModule,
    SidebarModule,
    OverlayPanelModule,
    TooltipModule,
    FileUploadModule,
    MenuModule,
    BreadcrumbModule,
    ContextMenuModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    SlideMenuModule,
    StepsModule,
    TabMenuModule,
    TieredMenuModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    GalleriaModule,
    DragDropModule,
    FocusTrapModule,
    BlockUIModule,
    CaptchaModule,
    InplaceModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TerminalModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MenuComponent, TopbarComponent]
})
export class AppModule { }
