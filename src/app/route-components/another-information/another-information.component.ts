import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/utils-components/base/base.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FoiRequest } from 'src/app/models/FoiRequest';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: './another-information.component.html',
  styleUrls: ['./another-information.component.scss']
})
export class AnotherInformationComponent implements OnInit {

  @ViewChild(BaseComponent) base: BaseComponent;
  foiForm: FormGroup;

  foiRequest: FoiRequest;
  targetKey: string = "anotherInformation";

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.foiForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      middleName: [null, [Validators.maxLength(255)]],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      alsoKnownAs: [null, [Validators.maxLength(255)]],
      dateOfBirth: [null, this.base.noFutureValidator],
      proofOfAuthorization: [null, [Validators.required]]
    });
  
    // Load the current values & populate the FormGroup.
    this.foiRequest = this.dataService.getCurrentState(this.targetKey);
    const formInit = this.foiRequest.requestData[this.targetKey];
    this.foiForm.patchValue(formInit);
  }

  doContinue() {
    // Update save data & proceed.
    this.dataService.setCurrentState(this.foiRequest, this.targetKey, this.foiForm);
    this.base.goFoiForward();
  }

  doGoBack() {
    this.base.goFoiBack();
  }

  newFileSelected(newFile: File){
    if (newFile){
      this.dataService.setPersonFileAttachment(newFile).subscribe(value => {

      });
    } else {
      this.dataService.removePersonFileAttachment();
    }
  }
}
