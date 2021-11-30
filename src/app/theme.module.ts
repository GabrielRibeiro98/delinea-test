import { NgModule } from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule
  ], exports: [
    AccordionModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule
  ],
})
export class ThemeModule { }
