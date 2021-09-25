import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private _config: ConfigModel = {
    id: "1",
    email: 'eee@aa.com',
    login: "Sunny",
  };

  setConfig(config: Partial<ConfigModel>): void {
    this._config = { ...this._config, ...config };
  }

  getConfig(): ConfigModel {
    return this._config;
  }
}
