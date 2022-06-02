"# Angular-Project-ZTM" 


This is a new project from Zero To Mastery Course

## Some Commands to use CLI

- ng version : To View the version of the angular

- ng help : To view the list of commands 

- ng new --help : To see if the commands are being presented correctly

- ng serve or npm start : To start the server

- ctrl + c : To turn off the server

- npm install typescript --save-dev to install typescript

- npx tsc <filename.ts> to convert typescript to js

- npx tsc --config for getting tsconfig.json for configuring decorators
 by adding "experimentalDecorators:true"

- ng generate component <folder name> : To generate component



## Angular notes/summmary

### Type Assertions
Reference: https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.eventtarget.html

### Passing data from parent to child component 
>> App is a parent component and post is a child component


In this example, the Image URL is being passed from App component to Post Component to render an image on the browser

   - Import @Input decorator
   - Include the @Input decorator beside the property as a function
      Example: @Input() postImg = '';
   - At the post template file, call the html image tag while the src property to be called with property binding
      Example: <img [src]="postImg">
   - Take note of the selector name in the post component
   - Call the post tag in the app component template
      Example: <app-post></app-post>
   - Pass the data from app component to post compenent 
      Example: <app-post [postImg]="imageURL"></app-post>

### Input Aliases
Reference: https://angular.io/guide/styleguide#avoid-aliasing-inputs-and-outputs
   - Input can be aliased by using any name of the choice in the @Input() 's parameter. Example: @Input('img')
   - Make sure to use the aliased name when the data is being passed down from parent to child
     <app-post [img]="imageURL"></app-post>

### Passing data from child to parent component
>> App is a parent component and post is a child component


In this example, the click event have been captured from child which is then being passed down to parent component
   - Import @Output decorator and EventEmitter
   - Create a property by creating EventEmitter object
     Example: imgSelected = new EventEmitter<string>();
   - Output the event by adding the @Output decorator infront of the property created
     Example: @Output() imgSelected = new EventEmitter<string>();
   - At the post component template pass the click event data through "imgSelected.emit(postImg)" property
   - At the App component, pick the property from post component and pass the data to another function which handles the event.
      Example: <app-post [img]="imageURL" (imgSelected)="logImg($event)">
   
</app-post>
   - Then create the event function at the app component
      Example: logImg(event: string){
          console.log(event)
      }


### Content projection

The content from parent component can be projected to child component by the behaviour shown below.

Example: <app-post> some-content </app-post>

Then use the content in post component by using <ng-content></ng-content>


### Lifecycle hooks
Reference: https://angular.io/guide/lifecycle-hooks
Note: Hooks that run more than once can impact the performance of the server

#### Constructor()
Constructor will be revoked whenever the component is being initialised
It occurs before the data binding

#### ngOnInit()
It occurs after all the data binding occurs and it is only revoked once like Constructor

#### ngOnChange()
It can be revoked multiple times
It runs whenever there are changes being made
It is used to perform updates. 

#### ngDoCheck()
It can be revoked multiple times.
It runs after the change detection has occured.
It can be used when the angular doesnt want to do the update.

#### ngAfterContentInit()

#### ngAfterViewChecked()

#### ngAfterViewInit()

#### ngAfterContentChecked()

#### ngOnDestroy()


### Global CSS vs Scoped CSS
#### Global CSS 
 Styles added to the file, style.css affects the global CSS.

#### Scoped CSS
 Styles which are placed in the component only affects the styles of that template.


### Pipes
Reference: https://angular.io/api?type=pipe
Pipes are functions for transforming values for the template
Reference for date formating: https://angular.io/api/common/DatePipe#custom-format-options
Reference for currency formating: https://en.wikipedia.org/wiki/ISO_4217
Reference for JSON pipe: https://angular.io/api/common/JsonPipe

### Directives
Reference: https://angular.io/api?type=directive
For transforming contents --> Browsers have attributes which can affect what can affect on the elements. 
So, angular provides directive to make some custom changes without creating any new components
#### Attrubute Directives
Focuses on changing the appearance or behaviour of an element
ng-Class and ngStyle are attribute directives
#### Structural Directives
Focuses on changing the layout of the DOM
ng-Template, ngIf and ngFor are structural directives
Reference for short hands for using ng-Template: https://angular.io/guide/structural-directives#shorthand-examples

## Tailwind
Reference for tailwind: https://tailwindcss.com/
Reference for purgeCSS: https://purgecss.com/
### Installing Tailwind:
npm install -D tailwindcss@latest
npx tailwind init

Reference for configuration: https://tailwindcss.com/docs/configuration

## Common Module
Reference: https://angular.io/api/common/CommonModule

## Services
An object for managing the data.
To share the data across the components.

Idea of MVC to split the files into separate the data, HTML and typeScript class.

Services are not always necessary.

Why we need services?
We need them when it comes to share the data across multiple components.

image.png

The above image shows how the data is being passed between components. It will become exhaustive when we it use it across multiple component. So the services may help in this matter.


## Miscellaneous notes or references

 - Type Annotations are a way to describe the data in our application
 - Link to update the angular versions: https://update.angular.io/

 - Configuration of browsers can be done in .browserslistrc file
 - Configuration of editor can be done in .editorConfig file
 - .gitignore files which will ignore the files which need not to be committed
 - Dev tools: https://angular.io/guide/devtools
