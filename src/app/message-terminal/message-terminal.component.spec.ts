import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTerminalComponent } from './message-terminal.component';

describe('MessageTerminalComponent', () => {
  let component: MessageTerminalComponent;
  let fixture: ComponentFixture<MessageTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
