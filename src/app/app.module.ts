import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSlickJsModule } from 'ngx-slickjs';
import { StarSliderComponent } from './star-slider/star-slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxTruncateTextModule } from 'ngx-truncate-text';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    NgxTruncateTextModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
        slickJs:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        slickCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        slickThemeCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
      },
    }),
  ],
  declarations: [
    AppComponent,
    StarSliderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
