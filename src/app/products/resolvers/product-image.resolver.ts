import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

const image1 = (
  fill: string
) => `<svg xmlns="http://www.w3.org/2000/svg" width="119.863" height="164.821">
  <g transform="translate(-403.408 81.094)">
    <ellipse
      cx="463.339"
      cy="-51.946"
      rx="45.544"
      ry="14.759"
      fill="#f4eed7"
      stroke="#000"
      stroke-width="2.109"
      stroke-linecap="round"
    />
    <path
      d="M508.352-50.588c-2.678 8.1-24.864 13.437-49.858 12.57-19.732-.686-35.138-5.126-39.715-11.189L434.574 60.97c2.981 4.654 13.395 7.947 26.725 8.456 16.891.645 32.068-3.711 33.685-9.273z"
      fill="#fffff2"
      stroke="#000"
      stroke-width="1.809"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M431.389 47.349l-9.167-61.478c3.972 5.26 18.457 9.681 36.83 10.3 23.277.78 44.332-4.469 46.762-11.31l-6.68 61.65c-1.86 5.557-18.867 9.89-37.797 9.25-14.942-.506-26.609-3.785-29.949-8.412z"
      fill="${fill}"
      stroke="#000"
      stroke-width="1.809"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse
      ry="3.075"
      rx="3.229"
      cy="21.962"
      cx="448.791"
      transform="rotate(-.473)"
    />
    <ellipse
      cx="479.785"
      cy="21.962"
      rx="3.229"
      ry="3.075"
      transform="rotate(-.473)"
    />
    <path
      d="M471.847 23.319c-.56 6.338-13.906 6.695-14.759.122"
      fill="none"
      stroke="#000"
      stroke-width="1.291"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse
      ry="1.299"
      rx="2.535"
      cy="29.632"
      cx="444.617"
      transform="rotate(-.473)"
      fill="#ff94aa"
    />
    <ellipse
      cx="483.081"
      cy="29.615"
      rx="2.535"
      ry="1.299"
      transform="rotate(-.473)"
      fill="#ff94aa"
    />
  </g>
</svg>`;

interface Data {
  readonly image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductImageResolver implements Resolve<Data> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Data> {
    console.log(route.paramMap);
    switch (route.paramMap.get('productID')) {
      case '1':
        return of({ image: image1('#e9cbaf') });
      case '2':
        return of({ image: image1('#cccccc') });
      default:
        return of({ image: image1('green') });
    }
  }
}
