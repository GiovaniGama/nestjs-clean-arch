import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {

  constructor(private _configService: ConfigService) {}

  getAppPort(): number {
    return Number(this._configService.get<number>('PORT'));
  }

  getNodeEnv(): string {
    return this._configService.get<string>('NODE_ENV');
  }
}
