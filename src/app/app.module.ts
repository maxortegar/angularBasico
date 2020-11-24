import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PostComponent } from './components/post/post.component';
import { PeruComponent } from './components/pais/peru/peru.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    PostComponent,
    PeruComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
