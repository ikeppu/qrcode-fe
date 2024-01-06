import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-qr-code-generation',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr-code-generation.component.html',
  styleUrl: './qr-code-generation.component.scss',
})
export class QrCodeGenerationComponent implements OnInit {
  externalLink = 'https://www.example.com';
  someData = `
  Title: Some title,
  \n
  Details: some details for super project
  \n
  CertificateNumber: some certificate number
  \n
  link: https://www.example.com
`;

  public qrCodeDownloadLink: SafeUrl;

  constructor(
    private readonly _modalConfig: DynamicDialogConfig,
    private readonly _modalRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.externalLink = this.externalLink + '/' + this._modalConfig?.data?.id;
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  close() {
    this._modalRef.close();
  }
}
