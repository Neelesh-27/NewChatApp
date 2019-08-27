import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { SelectComponent } from './select/select.component';
const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'group',      component: GroupComponent },
  { path: 'chat',      component: ChatComponent },
  { path: 'select',      component: SelectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    ChatComponent,
    SelectComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
