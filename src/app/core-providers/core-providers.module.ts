import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: 'API_WRITE_BASE_URL', useValue: environment.apiWriteBaseURL
    },
    {
      provide: 'API_READ_BASE_URL', useValue: environment.apiReadBaseURL
    }
  ]
})
export class CoreProvidersModule {
}
