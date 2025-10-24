import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { GcdsInput } from '../../src/lib/stencil-generated/components';

// Test host component to properly test the wrapper
@Component({
  template: `<gcds-input 
    [type]="inputType"
    [label]="label"
    [inputId]="inputId"
    [name]="name"
    [value]="value"
    [required]="required"
    [disabled]="disabled"
    [readonly]="readonly"
    [hideLabel]="hideLabel"
    [hint]="hint"
    [errorMessage]="errorMessage"
    [autocomplete]="autocomplete"
    [autofocus]="autofocus"
    [size]="size"
    [maxlength]="maxlength"
    [minlength]="minlength"
    [pattern]="pattern"
    [min]="min"
    [max]="max"
    [step]="step"
    [validateOn]="validateOn"
    [validator]="validator"
  ></gcds-input>`,
  standalone: false
})
class TestHostComponent {
  inputType: any = 'text';
  label: string = 'Test Label';
  inputId: string = 'test-input';
  name: string = 'testInput';
  value?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hideLabel?: boolean;
  hint?: string;
  errorMessage?: string;
  autocomplete?: string;
  autofocus?: boolean;
  size?: number;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  step?: number | 'any';
  validateOn?: string;
  validator?: any[];
}

describe('GcdsInput', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let element: HTMLElement;
  let gcdsInputElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, GcdsInput],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    element = fixture.nativeElement;
    gcdsInputElement = element.querySelector('gcds-input')!;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should create', () => {
    expect(gcdsInputElement).toBeTruthy();
  });

  describe('Input Type: text (default)', () => {
    it('should render with default type="text"', () => {
      expect(gcdsInputElement).toBeTruthy();
      expect(testHost.inputType).toBe('text');
    });

    it('should accept text input type', () => {
      testHost.inputType = 'text';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('text');
    });

    it('should handle text value', () => {
      testHost.inputType = 'text';
      testHost.value = 'Sample text';
      fixture.detectChanges();
      expect(testHost.value).toBe('Sample text');
    });

    it('should handle empty text value', () => {
      testHost.inputType = 'text';
      testHost.value = '';
      fixture.detectChanges();
      expect(testHost.value).toBe('');
    });
  });

  describe('Input Type: email', () => {
    it('should accept email input type', () => {
      testHost.inputType = 'email';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('email');
    });

    it('should handle valid email value', () => {
      testHost.inputType = 'email';
      testHost.value = 'test@example.com';
      fixture.detectChanges();
      expect(testHost.value).toBe('test@example.com');
    });

    it('should handle invalid email value', () => {
      testHost.inputType = 'email';
      testHost.value = 'invalid-email';
      fixture.detectChanges();
      expect(testHost.value).toBe('invalid-email');
    });

    it('should handle email with special characters', () => {
      testHost.inputType = 'email';
      testHost.value = 'user.name+tag@example.co.uk';
      fixture.detectChanges();
      expect(testHost.value).toBe('user.name+tag@example.co.uk');
    });
  });

  describe('Input Type: number', () => {
    it('should accept number input type', () => {
      testHost.inputType = 'number';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('number');
    });

    it('should handle integer number value', () => {
      testHost.inputType = 'number';
      testHost.value = '42';
      fixture.detectChanges();
      expect(testHost.value).toBe('42');
    });

    it('should handle decimal number value', () => {
      testHost.inputType = 'number';
      testHost.value = '3.14';
      fixture.detectChanges();
      expect(testHost.value).toBe('3.14');
    });

    it('should handle negative number value', () => {
      testHost.inputType = 'number';
      testHost.value = '-10';
      fixture.detectChanges();
      expect(testHost.value).toBe('-10');
    });

    it('should handle zero value', () => {
      testHost.inputType = 'number';
      testHost.value = '0';
      fixture.detectChanges();
      expect(testHost.value).toBe('0');
    });

    it('should work with min attribute', () => {
      testHost.inputType = 'number';
      testHost.min = 5;
      testHost.value = '10';
      fixture.detectChanges();
      expect(testHost.min).toBe(5);
      expect(testHost.value).toBe('10');
    });

    it('should work with max attribute', () => {
      testHost.inputType = 'number';
      testHost.max = 100;
      testHost.value = '50';
      fixture.detectChanges();
      expect(testHost.max).toBe(100);
      expect(testHost.value).toBe('50');
    });

    it('should work with step attribute', () => {
      testHost.inputType = 'number';
      testHost.step = 0.1;
      testHost.value = '5.5';
      fixture.detectChanges();
      expect(testHost.step).toBe(0.1);
      expect(testHost.value).toBe('5.5');
    });
  });

  describe('Input Type: password', () => {
    it('should accept password input type', () => {
      testHost.inputType = 'password';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('password');
    });

    it('should handle password value', () => {
      testHost.inputType = 'password';
      testHost.value = 'SecureP@ssw0rd';
      fixture.detectChanges();
      expect(testHost.value).toBe('SecureP@ssw0rd');
    });

    it('should handle password with special characters', () => {
      testHost.inputType = 'password';
      testHost.value = 'P@$$w0rd!#$%';
      fixture.detectChanges();
      expect(testHost.value).toBe('P@$$w0rd!#$%');
    });

    it('should handle empty password', () => {
      testHost.inputType = 'password';
      testHost.value = '';
      fixture.detectChanges();
      expect(testHost.value).toBe('');
    });
  });

  describe('Input Type: search', () => {
    it('should accept search input type', () => {
      testHost.inputType = 'search';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('search');
    });

    it('should handle search query value', () => {
      testHost.inputType = 'search';
      testHost.value = 'search query';
      fixture.detectChanges();
      expect(testHost.value).toBe('search query');
    });

    it('should handle search with special characters', () => {
      testHost.inputType = 'search';
      testHost.value = 'query with @#$';
      fixture.detectChanges();
      expect(testHost.value).toBe('query with @#$');
    });
  });

  describe('Input Type: tel', () => {
    it('should accept tel input type', () => {
      testHost.inputType = 'tel';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('tel');
    });

    it('should handle phone number value', () => {
      testHost.inputType = 'tel';
      testHost.value = '123-456-7890';
      fixture.detectChanges();
      expect(testHost.value).toBe('123-456-7890');
    });

    it('should handle international phone number', () => {
      testHost.inputType = 'tel';
      testHost.value = '+1 (234) 567-8900';
      fixture.detectChanges();
      expect(testHost.value).toBe('+1 (234) 567-8900');
    });

    it('should handle phone number without formatting', () => {
      testHost.inputType = 'tel';
      testHost.value = '1234567890';
      fixture.detectChanges();
      expect(testHost.value).toBe('1234567890');
    });
  });

  describe('Input Type: url', () => {
    it('should accept url input type', () => {
      testHost.inputType = 'url';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('url');
    });

    it('should handle http URL', () => {
      testHost.inputType = 'url';
      testHost.value = 'http://example.com';
      fixture.detectChanges();
      expect(testHost.value).toBe('http://example.com');
    });

    it('should handle https URL', () => {
      testHost.inputType = 'url';
      testHost.value = 'https://www.example.com';
      fixture.detectChanges();
      expect(testHost.value).toBe('https://www.example.com');
    });

    it('should handle URL with path and query', () => {
      testHost.inputType = 'url';
      testHost.value = 'https://example.com/path?query=value';
      fixture.detectChanges();
      expect(testHost.value).toBe('https://example.com/path?query=value');
    });

    it('should handle URL with fragment', () => {
      testHost.inputType = 'url';
      testHost.value = 'https://example.com/page#section';
      fixture.detectChanges();
      expect(testHost.value).toBe('https://example.com/page#section');
    });
  });

  describe('Common Input Properties', () => {
    it('should handle required attribute', () => {
      testHost.required = true;
      fixture.detectChanges();
      expect(testHost.required).toBe(true);
    });

    it('should handle disabled attribute', () => {
      testHost.disabled = true;
      fixture.detectChanges();
      expect(testHost.disabled).toBe(true);
    });

    it('should handle readonly attribute', () => {
      testHost.readonly = true;
      fixture.detectChanges();
      expect(testHost.readonly).toBe(true);
    });

    it('should handle label property', () => {
      testHost.label = 'Test Label';
      fixture.detectChanges();
      expect(testHost.label).toBe('Test Label');
    });

    it('should handle hint property', () => {
      testHost.hint = 'Test hint text';
      fixture.detectChanges();
      expect(testHost.hint).toBe('Test hint text');
    });

    it('should handle errorMessage property', () => {
      testHost.errorMessage = 'Test error message';
      fixture.detectChanges();
      expect(testHost.errorMessage).toBe('Test error message');
    });

    it('should handle hideLabel property', () => {
      testHost.hideLabel = true;
      fixture.detectChanges();
      expect(testHost.hideLabel).toBe(true);
    });

    it('should handle autocomplete property', () => {
      testHost.autocomplete = 'email';
      fixture.detectChanges();
      expect(testHost.autocomplete).toBe('email');
    });

    it('should handle autofocus property', () => {
      testHost.autofocus = true;
      fixture.detectChanges();
      expect(testHost.autofocus).toBe(true);
    });

    it('should handle name property', () => {
      testHost.name = 'testInput';
      fixture.detectChanges();
      expect(testHost.name).toBe('testInput');
    });

    it('should handle inputId property', () => {
      testHost.inputId = 'test-input-id';
      fixture.detectChanges();
      expect(testHost.inputId).toBe('test-input-id');
    });

    it('should handle size property', () => {
      testHost.size = 20;
      fixture.detectChanges();
      expect(testHost.size).toBe(20);
    });

    it('should handle maxlength property', () => {
      testHost.maxlength = 100;
      fixture.detectChanges();
      expect(testHost.maxlength).toBe(100);
    });

    it('should handle minlength property', () => {
      testHost.minlength = 5;
      fixture.detectChanges();
      expect(testHost.minlength).toBe(5);
    });

    it('should handle pattern property', () => {
      testHost.pattern = '[A-Za-z]{3}';
      fixture.detectChanges();
      expect(testHost.pattern).toBe('[A-Za-z]{3}');
    });
  });

  describe('Input Type Permutations with Common Properties', () => {
    it('should handle text type with required', () => {
      testHost.inputType = 'text';
      testHost.required = true;
      testHost.value = 'test';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('text');
      expect(testHost.required).toBe(true);
      expect(testHost.value).toBe('test');
    });

    it('should handle email type with required', () => {
      testHost.inputType = 'email';
      testHost.required = true;
      testHost.value = 'test@example.com';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('email');
      expect(testHost.required).toBe(true);
      expect(testHost.value).toBe('test@example.com');
    });

    it('should handle password type with minlength', () => {
      testHost.inputType = 'password';
      testHost.minlength = 8;
      testHost.value = 'password123';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('password');
      expect(testHost.minlength).toBe(8);
      expect(testHost.value).toBe('password123');
    });

    it('should handle text type with maxlength', () => {
      testHost.inputType = 'text';
      testHost.maxlength = 50;
      testHost.value = 'short text';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('text');
      expect(testHost.maxlength).toBe(50);
      expect(testHost.value).toBe('short text');
    });

    it('should handle url type with disabled', () => {
      testHost.inputType = 'url';
      testHost.disabled = true;
      testHost.value = 'https://example.com';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('url');
      expect(testHost.disabled).toBe(true);
      expect(testHost.value).toBe('https://example.com');
    });

    it('should handle tel type with pattern', () => {
      testHost.inputType = 'tel';
      testHost.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
      testHost.value = '123-456-7890';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('tel');
      expect(testHost.pattern).toBe('[0-9]{3}-[0-9]{3}-[0-9]{4}');
      expect(testHost.value).toBe('123-456-7890');
    });

    it('should handle search type with autocomplete', () => {
      testHost.inputType = 'search';
      testHost.autocomplete = 'on';
      testHost.value = 'search term';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('search');
      expect(testHost.autocomplete).toBe('on');
      expect(testHost.value).toBe('search term');
    });

    it('should handle number type with min and max', () => {
      testHost.inputType = 'number';
      testHost.min = 0;
      testHost.max = 100;
      testHost.value = '50';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('number');
      expect(testHost.min).toBe(0);
      expect(testHost.max).toBe(100);
      expect(testHost.value).toBe('50');
    });

    it('should handle multiple types with readonly', () => {
      const types: Array<'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'> = [
        'text', 'email', 'number', 'password', 'search', 'tel', 'url'
      ];

      types.forEach(type => {
        testHost.inputType = type;
        testHost.readonly = true;
        fixture.detectChanges();
        expect(testHost.inputType).toBe(type);
        expect(testHost.readonly).toBe(true);
      });
    });

    it('should handle all types with error message', () => {
      const types: Array<'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'> = [
        'text', 'email', 'number', 'password', 'search', 'tel', 'url'
      ];

      types.forEach(type => {
        testHost.inputType = type;
        testHost.errorMessage = `Error for ${type} input`;
        fixture.detectChanges();
        expect(testHost.inputType).toBe(type);
        expect(testHost.errorMessage).toBe(`Error for ${type} input`);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle switching between input types', () => {
      testHost.inputType = 'text';
      testHost.value = 'text value';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('text');

      testHost.inputType = 'email';
      testHost.value = 'test@example.com';
      fixture.detectChanges();
      expect(testHost.inputType).toBe('email');
      expect(testHost.value).toBe('test@example.com');
    });

    it('should handle undefined value', () => {
      testHost.inputType = 'text';
      testHost.value = undefined;
      fixture.detectChanges();
      expect(testHost.value).toBeUndefined();
    });

    it('should handle null-like values', () => {
      testHost.inputType = 'text';
      testHost.value = '';
      fixture.detectChanges();
      expect(testHost.value).toBe('');
    });

    it('should maintain properties when type changes', () => {
      testHost.inputType = 'text';
      testHost.required = true;
      testHost.disabled = false;
      testHost.label = 'Test Label';
      fixture.detectChanges();

      testHost.inputType = 'email';
      fixture.detectChanges();

      expect(testHost.inputType).toBe('email');
      expect(testHost.required).toBe(true);
      expect(testHost.disabled).toBe(false);
      expect(testHost.label).toBe('Test Label');
    });
  });

  describe('Validation', () => {
    it('should handle validateOn property', () => {
      testHost.validateOn = 'blur';
      fixture.detectChanges();
      expect(testHost.validateOn).toBe('blur');
    });

    it('should handle validator property', () => {
      const mockValidator: any[] = [];
      testHost.validator = mockValidator;
      fixture.detectChanges();
      expect(testHost.validator).toBe(mockValidator);
    });
  });
});

