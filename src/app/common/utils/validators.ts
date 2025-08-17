import { AbstractControl, ValidationErrors } from '@angular/forms';

export function advancedEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    // Regex: at least one char before @, at least one after @, dot, at least two chars after dot
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value) ? null : { advancedEmail: true };
}