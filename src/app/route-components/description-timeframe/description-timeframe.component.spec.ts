import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTimeframeComponent } from './description-timeframe.component';
import { FoiValidComponent } from 'src/app/utils-components/foi-valid/foi-valid.component';
import { BaseComponent } from 'src/app/utils-components/base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MockDataService, MockRouter } from '../../MockClasses';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertInfoComponent } from 'src/app/utils-components/alert-info/alert-info.component';

describe('DescriptionTimeframeComponent', () => {
  let component: DescriptionTimeframeComponent;
  let fixture: ComponentFixture<DescriptionTimeframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionTimeframeComponent, BaseComponent, FoiValidComponent, AlertInfoComponent ],
      imports:[ReactiveFormsModule, FontAwesomeModule],
      providers: [
        {provide: DataService, useClass: MockDataService},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTimeframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
