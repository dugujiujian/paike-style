import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutDefaultComponent } from './default.component';

describe('LayoutDefaultComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LayoutDefaultComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LayoutDefaultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paike-style'`, () => {
   // const fixture = TestBed.createComponent(DefaultComponent);
    //const app = fixture.componentInstance;
    //expect(app.title).toEqual('paike-style');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LayoutDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('paike-style app is running!');
  });
});
