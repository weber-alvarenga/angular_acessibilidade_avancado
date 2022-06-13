import { ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('userData') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';

  public firstName = 'Weber';
  public modalRef: ModalRef;
  public form: FormGroup; // ReactiveForm


  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder /*ReactiveForm*/){}

  // ReactiveForm
  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Weber', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required],
      subscribe: [false]
    });

  }

  public show(): void {
    this.modalRef = this.modalService.open({
                      templateRef: this.modalTemplateRef,
                      title: 'Detalhes do Usuário'
                    });
  }

  public submit(): void {

    if (!this.form.invalid) {
      console.log(this.form.value);
      this.modalRef.close();
    }
  }
}
