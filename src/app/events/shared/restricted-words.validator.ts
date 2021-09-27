import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms'


//

export function restrictedWords(words: String[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (!words) return null;

    var invalidWords = words
    .map(w => control.value.includes(w) ? w : null)
    .filter(w => w != null)

    return invalidWords && invalidWords.length > 0
    ? {'restrictedWords': invalidWords.join(', ')}
    : null


  };
}