import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule,    
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatCommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule
  
  } from '@angular/material';


  @NgModule({

    imports:[
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatCheckboxModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatCommonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSidenavModule,
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatExpansionModule,
        MatFormFieldModule 
    ],

    exports:[
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatCommonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatExpansionModule,
        MatFormFieldModule,
        HeaderComponent,
        SideNavComponent
    ],

    declarations: [
        HeaderComponent,
        SideNavComponent
    ]
  })

  export class SharedModule{

  }