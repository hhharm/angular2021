import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsServiceToken, ConstantsServiceValue } from './services/constants.service';
import { GeneratorFactory, generatedString } from './services/generator.factory';
import { GeneratorService } from './services/generator';
import { localStorageToken } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: []
} )
export class CoreModule { }
