import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  addInfoForm: FormGroup;
  isLoading: boolean = false;
  constructor(
    private readonly _modalConfig: DynamicDialogConfig,
    private readonly _modalRef: DynamicDialogRef,
    private readonly _fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addInfoForm = this._fb.group({
      title: [''],
      subtitle: [''],
      details: [''],
    });
  }

  add() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.addInfoForm.reset();
    }, 2000);
  }

  close() {
    this._modalRef.close();
  }
}
