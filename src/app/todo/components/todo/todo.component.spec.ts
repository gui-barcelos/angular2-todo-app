// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { TodoComponent } from './todo.component';
// import { SharedModule } from '../../../shared/shared.module';
// import { TodoService } from '../../services/todo.service';

// describe('Todo Component', () => {
//   let comp: TodoComponent;
//   let fixture: ComponentFixture<TodoComponent>;
//   let btAddTodo: HTMLButtonElement;

//   beforeEach(async(() => {
//     const todoServiceStub = {};

//     TestBed.configureTestingModule({
//       imports: [SharedModule],
//       declarations: [TodoComponent], // declare the test component
//       providers: [
//         { provide: TodoService, useValue: todoServiceStub }
//       ]
//     }).compileComponents().then(() => {
//       fixture = TestBed.createComponent(TodoComponent);
//       comp = fixture.componentInstance;

//       btAddTodo = fixture.debugElement.query(By.css('#btAddTodo')).nativeElement;
//     });
//   }));

//   it('should be injected', () => {
//     expect(comp).toBeDefined();
//     expect(btAddTodo).toBeDefined();
//   });
// });
