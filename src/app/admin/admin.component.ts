import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PRODUCT_MOCK } from '../core/mocks';
import { AddComponent } from '../shared/components/modals/add/add.component';
import { QrCodeGenerationComponent } from '../shared/components/modals/qr-code-generation/qr-code-generation.component';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TableModule, DynamicDialogModule],
  providers: [DialogService],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit, OnDestroy {
  products = PRODUCT_MOCK;
  ref: DynamicDialogRef | undefined;
  defaultModalOptions = {
    width: '50vw',
    modal: true,
    maximizable: true,
    breakpoints: {
      '960px': '75vw',
      '640px': '90vw',
    },
  };
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}

  add() {
    this.ref = this.dialogService.open(AddComponent, {
      ...this.defaultModalOptions,
      header: 'Add new information',
      data: {
        id: 1,
      },
    });
  }

  generateQrCode() {
    this.ref = this.dialogService.open(QrCodeGenerationComponent, {
      ...this.defaultModalOptions,
      header: 'Qr code for download',
      data: {
        id: 1,
      },
    });
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
