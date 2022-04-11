import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbActionsModule, NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentComponent } from './components/home/current/current.component';
import { MessagesComponent } from './components/home/messages/messages.component';
import { MailsComponent } from './components/home/mails/mails.component';
import { FeedbackComponent } from './components/home/feedback/feedback.component';
import { DothiComponent } from './components/home/dothi/dothi.component';
import { TodoListComponent } from './components/home/todo-list/TodoListComponent';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CurrentComponent,
    MessagesComponent,
    MailsComponent,
    FeedbackComponent,
    DothiComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
