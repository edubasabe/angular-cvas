# POC Angular Control Value Accessors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

Project based -->  [link :) ](https://indepth.dev/posts/1245/angular-nested-reactive-forms-using-controlvalueaccessors-cvas)

## ¿ Qué es Control Value Accessor ?
La interfaz Control Value Accessor (CVA) nos permite tener acceso a los distintos a los form controls, tales como inputs, selects, radio buttons, etc. Para utilizar esto CVA requiere en su nucleo de 3 metodos:
> **writeValue(value: any): void** : Toma un valor y escribe en el form control (model -> view)

> **writeValue(value: any): void :** Toma una función que debe ser llamada cuando un valor cambia dentro de un form control (view -> model)

> **registerOnTouched(fn: () => void):** Toma una función que debe ser llamada cuando un elemento ha sido clickeado.

> PROS: Altamente reutilizable, portable. Buena encapsulación (Los form controls (input, select, checkbox, etc) de los componentes no necesariamente necesitan ser visibiles al componente padre). Esta tecnica es usada cuando se tiene un numero grande de form controls y se necesita tener un mejor manejo de ellos.

> CONS: La necesidad de implementar la interface CVA resulta un codigo un tanto repetitivo.

Ahora si queremos incluir la validación de los campos, necesitamos implementar la interface **Validator**

Razon: Para una re-validación, los validadores necesitan estar en un nivel superior del formulario, no en los componentes hijos, si lo que se busca es que sea parte de la validación del formulario principal.
___
___
## What is Control Value Accessor ?

Here’s what the developers at Google - Angular have to say on this?

The ControlValueAccessor interface is actually what you use to build value accessors for radio buttons, selects, input elements etc in core. It just requires three methods:
> writeValue(value: any): void : takes a value and writes it to the form control element (model -> view)

> registerOnChange(fn: (value:any) => void): void: takes a function that should be called with the value if the value changes in the form control element itself (view -> model)

> registerOnTouched(fn: () => void): takes a function to be called when the form control has been touched (this one you can leave empty if you don’t care about the touched property)
___
PROS: Highly Reusable, Portable. Better Encapsulation(Internal Form Controls of the component doesn’t necessarily need to be visible to parent components). This is best used when you have more number of form modules which is typically a large project.

CONS: Need to implement CVA interface results in boilerplate code.
___

Now, if we want that integration to include validation, we need to implement the Validatorinterface as well and provide our custom control as a multi provider to built-in NG_VALIDATORtoken.

Reason:
For Re-validation, the validators will need to be on the top-level form, not at the child component, if you want it to be part of the parent form’s validation.
<a href="https://imgur.com/ne2Jdff"><img src="https://i.imgur.com/ne2Jdff.png" title="source: imgur.com" /></a>
