import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { join } from 'node:path';

@Module({
  providers: [EnvConfigService, ConfigService],
  exports: [ConfigService]
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options?: ConfigModuleOptions): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath: [
        join(...__dirname, `../../../../.env.${process.env.NODE_ENV}`)
      ]
    })
  }
}
