import { InjectionToken } from "@angular/core";

export const ConstantsServiceToken = new InjectionToken<string>('ConstantsService');
export const ConstantsServiceValue: Record<string, unknown> = {
    App: "Shop",
    Ver: "1.0",
    API_URL: "https://hhharm.github.io/angular2021/"
};

export const constantsProvider = { provide: ConstantsServiceToken, useValue: ConstantsServiceValue };