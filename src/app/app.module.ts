import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from './../redux/app.reducer';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
import {WorkerService} from './worker.service';
import { TodoEffects } from '../redux/todo/todo.effects';
import {WorkerEffects} from '../redux/worker/worker.effects';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: ':filter', component: TodoListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    FooterComponent,
    WorkerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([TodoEffects, WorkerEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers:[TodoService, WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
