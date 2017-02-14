import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddTodoComponent } from './todo-add.component';
import { SharedModule } from '../../../shared/shared.module';

describe('Todo Component', () => {
    let comp: AddTodoComponent;
    let fixture: ComponentFixture<AddTodoComponent>;
    let btAddTodo: HTMLButtonElement;
    let tbNewTodo: HTMLInputElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [AddTodoComponent], // declare the test component
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AddTodoComponent);
            comp = fixture.componentInstance;

            btAddTodo = fixture.debugElement.query(By.css('#btAddTodo')).nativeElement;
            tbNewTodo = fixture.debugElement.query(By.css('#tbNewTodo')).nativeElement;
        });
    }));

    it('objects should be injected', () => {
        expect(comp).toBeDefined();
        expect(btAddTodo).toBeDefined();
        expect(tbNewTodo).toBeDefined();
    });
});
