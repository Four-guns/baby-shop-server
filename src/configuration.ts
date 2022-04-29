import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';

@Configuration({
    imports: [egg, orm, swagger],
    importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
    @App()
    app: Application;

    async onReady() {}
}
