import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { MaterialExampleModule, UiModule } from '@was-it/ui';
import { UserResolver } from './people/user.resolver';
import { UserComponent } from './people/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PeopleComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ProductsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    UiModule,
  ],
  providers: [PeopleService, UserResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
