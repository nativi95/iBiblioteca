import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IbibliotecaPage } from './ibiblioteca.page';

describe('IbibliotecaPage', () => {
  let component: IbibliotecaPage;
  let fixture: ComponentFixture<IbibliotecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbibliotecaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IbibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
