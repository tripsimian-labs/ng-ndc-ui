import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './app.config';
 
export function initializeApp(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [
       AppConfigService,
       { provide: APP_INITIALIZER,
         useFactory: initializeApp,
         deps: [AppConfigService], multi: true 
		}
    ],
  bootstrap: [AppComponent]
})

export class AppModule { } 


