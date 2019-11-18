"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const accordion_1 = require("primeng/accordion");
const inputtext_1 = require("primeng/inputtext");
const checkbox_1 = require("primeng/checkbox");
const radiobutton_1 = require("primeng/radiobutton");
const autocomplete_1 = require("primeng/autocomplete");
const chips_1 = require("primeng/chips");
const calendar_1 = require("primeng/calendar");
const colorpicker_1 = require("primeng/colorpicker");
const dropdown_1 = require("primeng/dropdown");
const editor_1 = require("primeng/editor");
const keyfilter_1 = require("primeng/keyfilter");
const inputswitch_1 = require("primeng/inputswitch");
const inputtextarea_1 = require("primeng/inputtextarea");
const listbox_1 = require("primeng/listbox");
const inputmask_1 = require("primeng/inputmask");
const multiselect_1 = require("primeng/multiselect");
const password_1 = require("primeng/password");
const rating_1 = require("primeng/rating");
const slider_1 = require("primeng/slider");
const spinner_1 = require("primeng/spinner");
const selectbutton_1 = require("primeng/selectbutton");
const togglebutton_1 = require("primeng/togglebutton");
const tristatecheckbox_1 = require("primeng/tristatecheckbox");
const button_1 = require("primeng/button");
const splitbutton_1 = require("primeng/splitbutton");
const carousel_1 = require("primeng/carousel");
const dataview_1 = require("primeng/dataview");
const fullcalendar_1 = require("primeng/fullcalendar");
const organizationchart_1 = require("primeng/organizationchart");
const orderlist_1 = require("primeng/orderlist");
const gmap_1 = require("primeng/gmap");
const paginator_1 = require("primeng/paginator");
const picklist_1 = require("primeng/picklist");
const table_1 = require("primeng/table");
const tree_1 = require("primeng/tree");
const treetable_1 = require("primeng/treetable");
const virtualscroller_1 = require("primeng/virtualscroller");
const card_1 = require("primeng/card");
const fieldset_1 = require("primeng/fieldset");
const panel_1 = require("primeng/panel");
const scrollpanel_1 = require("primeng/scrollpanel");
const tabview_1 = require("primeng/tabview");
const toolbar_1 = require("primeng/toolbar");
const confirmdialog_1 = require("primeng/confirmdialog");
const dialog_1 = require("primeng/dialog");
const dynamicdialog_1 = require("primeng/dynamicdialog");
const lightbox_1 = require("primeng/lightbox");
const sidebar_1 = require("primeng/sidebar");
const overlaypanel_1 = require("primeng/overlaypanel");
const tooltip_1 = require("primeng/tooltip");
const fileupload_1 = require("primeng/fileupload");
const menu_1 = require("primeng/menu");
const breadcrumb_1 = require("primeng/breadcrumb");
const contextmenu_1 = require("primeng/contextmenu");
const megamenu_1 = require("primeng/megamenu");
const menubar_1 = require("primeng/menubar");
const panelmenu_1 = require("primeng/panelmenu");
const slidemenu_1 = require("primeng/slidemenu");
const steps_1 = require("primeng/steps");
const tabmenu_1 = require("primeng/tabmenu");
const tieredmenu_1 = require("primeng/tieredmenu");
const angular_highcharts_1 = require("angular-highcharts");
const messages_1 = require("primeng/messages");
const message_1 = require("primeng/message");
const toast_1 = require("primeng/toast");
const galleria_1 = require("primeng/galleria");
const dragdrop_1 = require("primeng/dragdrop");
const focustrap_1 = require("primeng/focustrap");
const blockui_1 = require("primeng/blockui");
const captcha_1 = require("primeng/captcha");
const inplace_1 = require("primeng/inplace");
const progressbar_1 = require("primeng/progressbar");
const progressspinner_1 = require("primeng/progressspinner");
const terminal_1 = require("primeng/terminal");
const home_component_1 = require("./home/home.component");
const input_component_1 = require("./components/input/input.component");
const menu_component_1 = require("./components/menu/menu.component");
const topbar_component_1 = require("./components/topbar/topbar.component");
const autocomplete_component_1 = require("./components/autocomplete/autocomplete.component");
const http_1 = require("@angular/common/http");
const calendar_component_1 = require("./components/calendar/calendar.component");
const chart_component_1 = require("./components/chart/chart.component");
const galleria_component_1 = require("./components/galleria/galleria.component");
const draganddrop_component_1 = require("./components/draganddrop/draganddrop.component");
const dropdown_component_1 = require("./components/dropdown/dropdown.component");
const reactive_form_component_1 = require("./components/reactive-form/reactive-form.component");
const forms_1 = require("@angular/forms");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            input_component_1.InputComponent,
            menu_component_1.MenuComponent,
            topbar_component_1.TopbarComponent,
            autocomplete_component_1.AutocompleteComponent,
            calendar_component_1.CalendarComponent,
            chart_component_1.ChartComponent,
            galleria_component_1.GalleriaComponent,
            draganddrop_component_1.DraganddropComponent,
            dropdown_component_1.DropdownComponent,
            reactive_form_component_1.ReactiveFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule,
            inputtext_1.InputTextModule,
            checkbox_1.CheckboxModule,
            accordion_1.AccordionModule,
            radiobutton_1.RadioButtonModule,
            autocomplete_1.AutoCompleteModule,
            calendar_1.CalendarModule,
            chips_1.ChipsModule,
            colorpicker_1.ColorPickerModule,
            dropdown_1.DropdownModule,
            editor_1.EditorModule,
            keyfilter_1.KeyFilterModule,
            inputswitch_1.InputSwitchModule,
            inputtextarea_1.InputTextareaModule,
            listbox_1.ListboxModule,
            inputmask_1.InputMaskModule,
            multiselect_1.MultiSelectModule,
            password_1.PasswordModule,
            rating_1.RatingModule,
            slider_1.SliderModule,
            spinner_1.SpinnerModule,
            selectbutton_1.SelectButtonModule,
            togglebutton_1.ToggleButtonModule,
            tristatecheckbox_1.TriStateCheckboxModule,
            button_1.ButtonModule,
            splitbutton_1.SplitButtonModule,
            carousel_1.CarouselModule,
            dataview_1.DataViewModule,
            fullcalendar_1.FullCalendarModule,
            organizationchart_1.OrganizationChartModule,
            orderlist_1.OrderListModule,
            gmap_1.GMapModule,
            paginator_1.PaginatorModule,
            picklist_1.PickListModule,
            table_1.TableModule,
            tree_1.TreeModule,
            treetable_1.TreeTableModule,
            virtualscroller_1.VirtualScrollerModule,
            card_1.CardModule,
            fieldset_1.FieldsetModule,
            panel_1.PanelModule,
            scrollpanel_1.ScrollPanelModule,
            tabview_1.TabViewModule,
            toolbar_1.ToolbarModule,
            confirmdialog_1.ConfirmDialogModule,
            dialog_1.DialogModule,
            dynamicdialog_1.DynamicDialogModule,
            lightbox_1.LightboxModule,
            sidebar_1.SidebarModule,
            overlaypanel_1.OverlayPanelModule,
            tooltip_1.TooltipModule,
            fileupload_1.FileUploadModule,
            menu_1.MenuModule,
            breadcrumb_1.BreadcrumbModule,
            contextmenu_1.ContextMenuModule,
            megamenu_1.MegaMenuModule,
            menubar_1.MenubarModule,
            panelmenu_1.PanelMenuModule,
            slidemenu_1.SlideMenuModule,
            steps_1.StepsModule,
            tabmenu_1.TabMenuModule,
            tieredmenu_1.TieredMenuModule,
            angular_highcharts_1.ChartModule,
            messages_1.MessagesModule,
            message_1.MessageModule,
            toast_1.ToastModule,
            galleria_1.GalleriaModule,
            dragdrop_1.DragDropModule,
            focustrap_1.FocusTrapModule,
            blockui_1.BlockUIModule,
            captcha_1.CaptchaModule,
            inplace_1.InplaceModule,
            progressbar_1.ProgressBarModule,
            progressspinner_1.ProgressSpinnerModule,
            terminal_1.TerminalModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [menu_component_1.MenuComponent, topbar_component_1.TopbarComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBaUU7QUFDakUsZ0VBQTBEO0FBQzFELHFFQUE2RTtBQUM3RSw2REFBd0Q7QUFDeEQsbURBQStDO0FBQy9DLGlEQUFrRDtBQUNsRCxpREFBa0Q7QUFDbEQsK0NBQWdEO0FBQ2hELHFEQUFzRDtBQUN0RCx1REFBd0Q7QUFDeEQseUNBQTBDO0FBQzFDLCtDQUFnRDtBQUNoRCxxREFBc0Q7QUFDdEQsK0NBQWdEO0FBQ2hELDJDQUE0QztBQUM1QyxpREFBa0Q7QUFDbEQscURBQXNEO0FBQ3RELHlEQUEwRDtBQUMxRCw2Q0FBOEM7QUFDOUMsaURBQWtEO0FBQ2xELHFEQUFzRDtBQUN0RCwrQ0FBZ0Q7QUFDaEQsMkNBQTRDO0FBQzVDLDJDQUE0QztBQUM1Qyw2Q0FBOEM7QUFDOUMsdURBQXdEO0FBQ3hELHVEQUF3RDtBQUN4RCwrREFBZ0U7QUFDaEUsMkNBQTRDO0FBQzVDLHFEQUFzRDtBQUN0RCwrQ0FBZ0Q7QUFDaEQsK0NBQWdEO0FBQ2hELHVEQUF3RDtBQUN4RCxpRUFBa0U7QUFDbEUsaURBQWtEO0FBQ2xELHVDQUF3QztBQUN4QyxpREFBa0Q7QUFDbEQsK0NBQWdEO0FBQ2hELHlDQUEwQztBQUMxQyx1Q0FBd0M7QUFDeEMsaURBQWtEO0FBQ2xELDZEQUE4RDtBQUM5RCx1Q0FBd0M7QUFDeEMsK0NBQWdEO0FBQ2hELHlDQUEwQztBQUMxQyxxREFBc0Q7QUFDdEQsNkNBQThDO0FBQzlDLDZDQUE4QztBQUM5Qyx5REFBMEQ7QUFDMUQsMkNBQTRDO0FBQzVDLHlEQUEwRDtBQUMxRCwrQ0FBZ0Q7QUFDaEQsNkNBQThDO0FBQzlDLHVEQUF3RDtBQUN4RCw2Q0FBOEM7QUFDOUMsbURBQW9EO0FBQ3BELHVDQUF3QztBQUN4QyxtREFBb0Q7QUFDcEQscURBQXNEO0FBQ3RELCtDQUFn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