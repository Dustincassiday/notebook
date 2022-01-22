import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormComponent } from './page-form.component';

describe('PageFormComponent', () => {
  let component: PageFormComponent;
  let fixture: ComponentFixture<PageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should set form property', () => {
      component.ngOnChanges();
      expect(component.form).toBeDefined();
    });

    it('should set entry form control value to entry property value', () => {
      const testValue = 'test';
      component.entry = testValue;
      component.ngOnChanges();
      expect(component.form?.value?.entry).toBe(testValue);
    });
  });
});
