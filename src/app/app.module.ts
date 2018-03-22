import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { LikeComponent } from './like/like.component';
import { ApiService } from './app.service';
import { DisLikeComponent } from './dis-like/dis-like.component';
import { CommentComponent } from './comment/comment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    LikeComponent,
    DisLikeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
