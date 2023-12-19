import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [MainComponent],
})
export class AppModule {}
