import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, OnDestroy, AfterViewInit {
  product?: ProductModel;

  @Output() add = new EventEmitter<ProductModel>();
  @ViewChild('imageDiv') dataContainer!: ElementRef;

  private sub?: Subscription;
  private sub1?: Subscription;

  constructor(public products: ProductsService, public route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.sub1 = this.route.data.subscribe((data) => {
      if (this) this.dataContainer.nativeElement.innerHTML = data[0].image;

      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap
      .pipe(
        switchMap((params) => params.getAll('productID')),
        filter((id) => id !== undefined),
        switchMap((id: string) => this.products.getProduct(id))
      )
      .subscribe((product) => {
        this.product = product;
      });
  }

  onAddToCart(): void {
    this.add.emit(this.product);
  }
}
