import { NgModule } from '@angular/core';
import { CoreComponentModule } from './components/components.module';
import { ProvidersModule } from './providers/providers.module';


@NgModule({
  imports: [ProvidersModule],
  exports: [CoreComponentModule],
  declarations: [],
  providers: [],
})
export class CoreModule {
}
