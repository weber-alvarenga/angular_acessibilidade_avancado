import { Component, HostBinding, OnInit } from '@angular/core';
import { tgFade } from '../../animations/fade';
import { ModalConfig } from './interfaces/modal-config';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [tgFade]
})
export class ModalComponent implements OnInit {

  @HostBinding('@fade') fade = true;

  public config: ModalConfig;
  public modalRef: ModalRef;

  constructor() { }

  ngOnInit(): void {
  }



}
