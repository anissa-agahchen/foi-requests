import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStarted3Component } from './getting-started3.component';
import { FoiValidComponent } from 'src/app/utils-components/foi-valid/foi-valid.component';
import { BaseComponent } from 'src/app/utils-components/base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MockDataService, MockRouter } from '../../MockClasses';

describe('GettingStarted3Component', () => {
  let component: GettingStarted3Component;
  let fixture: ComponentFixture<GettingStarted3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStarted3Component, BaseComponent, FoiValidComponent],
      imports:[ReactiveFormsModule],
      providers: [
        {provide: DataService, useClass: MockDataService},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStarted3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
