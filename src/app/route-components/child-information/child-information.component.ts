import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "src/app/utils-components/base/base.component";
import { FoiRequest } from "src/app/models/FoiRequest";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
// import { Observable } from "rxjs";

@Component({
  templateUrl: "./child-information.component.html",
  styleUrls: ["./child-information.component.scss"]
})
export class ChildInformationComponent implements OnInit {
  @ViewChild(BaseComponent) base: BaseComponent;
  foiForm: FormGroup;

  foiRequest: FoiRequest;
  targetKey: string = "childInformation";

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.foiForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      middleName: [null, [Validators.maxLength(255)]],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      alsoKnownAs: [null, [Validators.maxLength(255)]],
      dateOfBirth: [null, this.base.noFutureValidator],
      proofOfGuardianship: [null, [Validators.required]]
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

  newFileSelected(newFile: File) {
    if (newFile){
      this.dataService.setChildFileAttachment(newFile).subscribe(value =>{
      });
    } else {
      this.dataService.removeChildFileAttachment();
    }
  }
}
