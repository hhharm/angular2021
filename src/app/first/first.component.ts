import { Component, Inject, Optional } from '@angular/core';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { ConstantsServiceToken, ConstantsServiceValue } from '../core/services/constants.service';
import { GeneratorService } from '../core/services/generator';
import { generatedString, GeneratorFactory } from '../core/services/generator.factory';
import { localStorageToken } from '../core/services/local-storage.service';
import { ProductCategories, ProductId } from '../products/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = "Cool name";
  description: string = "Best description";
  price: number = 100;
  category: ProductCategories = ProductCategories.White;
  isAvailable: boolean = false;
  ids: ProductId[] = ['1', '2', '3'];

  constructor(
     @Optional() private config: ConfigOptionsService,
     @Optional() @Inject('ConstantsService') private constants: Record<string, unknown>,
     @Optional() @Inject('GenerateString') private alfanumGenerator: (n: number) => string,
     @Optional() private generator: GeneratorService,
     @Optional() @Inject('localStorage') private localStorage: Storage,
  ) {
  }
}
