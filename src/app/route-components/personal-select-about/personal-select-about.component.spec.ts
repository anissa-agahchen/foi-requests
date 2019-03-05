import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSelectAboutComponent } from './personal-select-about.component';
import { BaseComponent } from 'src/app/utils-components/base/base.component';
import { FoiValidComponent } from 'src/app/utils-components/foi-valid/foi-valid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MockDataService, MockRouter } from '../../MockClasses';


describe('PersonalSelectAboutComponent', () => {
  let component: PersonalSelectAboutComponent;
  let fixture: ComponentFixture<PersonalSelectAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSelectAboutComponent, BaseComponent, FoiValidComponent ],
      imports:[ReactiveFormsModule],
      providers: [
        {provide: DataService, useClass: MockDataService},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSelectAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
