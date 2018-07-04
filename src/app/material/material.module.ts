import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
    MatIconModule,
    MatButtonModule

 } from '@angular/material';

 const modules = [
    MatIconModule,
    MatButtonModule
 ];

@NgModule({
    imports: modules,
    exports: modules
})


export class MaterialModule {}