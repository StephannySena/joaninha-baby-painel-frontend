import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioEmailsComponent } from './envio-emails.component';

describe('EnvioEmailsComponent', () => {
  let component: EnvioEmailsComponent;
  let fixture: ComponentFixture<EnvioEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
