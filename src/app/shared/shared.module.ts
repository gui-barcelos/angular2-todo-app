import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [MaterialModule.forRoot()],
    exports: [CommonModule, FormsModule, MaterialModule],
    providers: []
})
export class SharedModule { }
