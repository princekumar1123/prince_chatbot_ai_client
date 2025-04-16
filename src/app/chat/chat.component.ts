// // //   chatHistory: { type: 'user' | 'bot', text: string }[] = [{ type: 'bot', text:   "Okay, let's break down the key differences between ReactJS and Angular.\n\n**ReactJS**\n\n*   **Nature:** A JavaScript library for building user interfaces (UIs).\n*   **Architecture:** Primarily focused on the view layer.  It's unopinionated about other parts of your application (like routing, state management, and data fetching).  You typically bring in other libraries to handle those aspects.\n*   **Learning Curve:** Steeper initial learning curve for basic concepts like JSX and component structure.  However, mastering the ecosystem (state management, routing, etc.) can take more time due to the many options.\n*   **Flexibility:**  Highly flexible.  You have complete control over the tools and libraries you use.  This is both a strength and a weakness.\n*   **State Management:** Requires third-party libraries (Redux, Zustand, Context API, Recoil, etc.) for managing complex application state. React itself provides limited state management through `useState` and `useReducer` hooks, but these are often insufficient for larger applications.\n*   **Data Binding:** One-way data binding (data flows from parent to child components).\n*   **Templating:** Uses JSX (JavaScript XML), which allows you to write HTML-like structures within JavaScript code.\n*   **DOM Manipulation:** Uses a Virtual DOM, which optimizes updates to the real DOM, leading to better performance.\n*   **Community & Ecosystem:** Large and active community.  Extensive ecosystem of libraries and tools available.\n*   **Size:** Generally smaller bundle size (core library is small).\n*   **TypeScript:** Can be used with TypeScript, but it's optional.\n*   **Testing:** Requires selecting and configuring testing frameworks (Jest, Mocha, Enzyme, React Testing Library, etc.)\n*   **Use Cases:**\n    *   Single-page applications (SPAs)\n    *   Dynamic user interfaces\n    *   Large, complex web applications\n    *   Mobile applications (with React Native)\n    *   Progressive Web Apps (PWAs)\n    *   When you need fine-grained control over your technology stack.\n\n**Angular**\n\n*   **Nature:** A comprehensive, full-fledged JavaScript framework for building client-side applications.\n*   **Architecture:** Follows a component-based architecture and enforces a specific project structure. It uses TypeScript by default and encourages the use of RxJS for asynchronous programming.\n*   **Learning Curve:** Steeper overall learning curve due to its complexity and the many concepts to grasp (modules, components, directives, services, dependency injection, RxJS, etc.).\n*   **Flexibility:** Less flexible than React. It provides a specific way of doing things, which can be both beneficial and restrictive.\n*   **State Management:** Opinionated. Often uses RxJS and patterns like NgRx (based on Redux) for state management, although other approaches are also possible.\n*   **Data Binding:** Two-way data binding (changes in the UI update the model, and vice versa, and vice versa).  This can simplify some UI development tasks but can also make debugging more difficult.\n*   **Templating:** Uses HTML templates with Angular-specific syntax (directives, interpolation, etc.).\n*   **DOM Manipulation:** Also uses a Virtual DOM.\n*   **Community & Ecosystem:** Large and mature community.  Google-backed.  A comprehensive ecosystem of libraries and tools.\n*   **Size:** Generally larger bundle size compared to React.\n*   **TypeScript:** Uses TypeScript as its primary language. TypeScript helps with code organization, maintainability, and error detection.\n*   **Testing:** Provides built-in testing tools and guidance.\n*   **Use Cases:**\n    *   Large-scale enterprise applications\n    *   Complex web applications\n    *   Applications where maintainability and scalability are critical\n    *   When you prefer a structured and opinionated framework\n    *   Progressive Web Apps (PWAs)\n    *   Mobile Applications (with Ionic or NativeScript).\n\n**Key Differences Summarized in a Table:**\n\n| Feature           | ReactJS                                     | Angular                                       |\n|--------------------|---------------------------------------------|----------------------------------------------|\n| **Nature**        | Library                                     | Framework                                       |\n| **Architecture**  | Unopinionated (View Layer)                  | Opinionated (Full-Featured)                   |\n| **Language**      | JavaScript (JSX)                            | TypeScript                                      |\n| **Data Binding**   | One-way                                     | Two-way                                        |\n| **DOM**            | Virtual DOM                                 | Virtual DOM                                   |\n| **State Management**| Requires external libraries                | Often uses RxJS, NgRx, or other patterns      |\n| **Learning Curve** | Steeper initial, ongoing learning for ecosystem| Steeper overall                              |\n| **Flexibility**   | High                                        | Lower                                         |\n| **Size**          | Smaller                                     | Larger                                         |\n| **Community**       | Large, Active                               | Large, Mature, Google-backed                  |\n| **Testing**      | Requires setup of testing framework         | Provides built-in testing tools               |\n| **Opinionated**   | Not Opinionated                           | Opinionated                                  |\n\n**When to Choose Which:**\n\n*   **Choose ReactJS when:**\n    *   You want more control over your technology stack.\n    *   You prefer a more flexible and lightweight solution.\n    *   You are comfortable choosing and integrating different libraries for routing, state management, etc.\n    *   You need a smaller bundle size.\n    *   You are already familiar with JavaScript and JSX.\n*   **Choose Angular when:**\n    *   You prefer a structured and opinionated framework.\n    *   You want a full-fledged solution with built-in features.\n    *   You need to build a large-scale enterprise application.\n    *   You are comfortable with TypeScript and RxJS.\n    *   You value maintainability and scalability.\n    *   You want a framework backed by Google.\n\n**In short:**\n\n*   **React:**  Think \"Lego bricks.\" You get the core building block and choose how to assemble them.\n*   **Angular:** Think \"Pre-built Lego set.\" You get all the pieces and instructions to build a specific model.\n\nUltimately, the best choice depends on your specific project requirements, team skills, and personal preferences.  Both are excellent technologies, and there's no universally \"better\" option.\n"
// // //  }];

// // {
// //   type:'bot', text:"ve included explanations to help you understand the context and what the interviewer is likely looking for.\n\n**1.  What are the core building blocks of an Angular application?  Explain their roles.**\n\n*   **Why this question:** This checks fundamental understanding of Angular's architecture.\n*   **Expected Answer:** The interviewer is looking for you to mention:\n    *   **Components:** The basic building blocks of the UI, encapsulating HTML templates, CSS styles, and logic.\n    *   **Modules:** Containers that group related components, services, directives, and other modules.  `AppModule` is the root module.\n    *   **Services:**  Reusable logic and data providers, often used for data fetching, business logic, or shared functionality.  Singleton by default, injectable into components and other services.\n    *   **Templates:**  HTML with Angular-specific syntax for data binding, directives, and control flow.\n    *   **Metadata:**  Used to define Angular functionality like templates, styling, etc.\n    *   **Directives:**  Extend HTML's functionality.  (Components *are* directives, but the interviewer wants to see if you understand the broader concept).\n    *   **Dependency Injection (DI):** A design pattern where dependencies are provided to a class rather than the class creating them itself.  Angular uses DI extensively.\n*   **Good follow-up questions:**  \"How does Angular use dependency injection?\" \"What are the different types of directives?\"  \"When would you use a service vs. put logic directly into a component?\"\n\n**2.  Explain Angular's data binding concepts.  What are the different types of data binding and give an example of each.**\n\n*   **Why this question:**  Data binding is crucial for updating the view in response to changes in the model, and vice versa.\n*   **Expected Answer:**\n    *   **One-way data binding (component to view):**  Changes in the component are reflected in the view.\n        *   **Interpolation:**  `{{ myValue }}`  Displays the value of `myValue`.\n        *   **Property binding:**  `[property]=\"myValue\"`  Sets the value of the `property` attribute of an HTML element to `myValue`.\n    *   **One-way data binding (view to component):**  Changes in the view update the component's data.\n        *   **Event binding:**  `(click)=\"myFunction()\"`  Executes `myFunction()` when the element is clicked.\n    *   **Two-way data binding:**  Changes in either the component or the view update the other.\n        *   **`[(ngModel)]=\"myValue\"`:**  Commonly used with form elements.  Requires importing the `FormsModule` or `ReactiveFormsModule`.\n\n*   **Follow-up questions:** \"What are the pros and cons of two-way data binding?\"  \"How does Angular detect changes and trigger data binding updates?\"\n\n**3.  What are Angular pipes?  Give an example of a built-in pipe and explain how to create a custom pipe.**\n\n*   **Why this question:**  Pipes transform data for display in the template.\n*   **Expected Answer:**\n    *   **Definition:** Pipes transform data before displaying it in the template. They take an input value and return a transformed output value.\n    *   **Built-in Pipes:**  Examples include `uppercase`, `lowercase`, `date`, `currency`, `number`, `async`, `json`.\n    *   **Custom Pipe Creation:**\n        1.  Use the `ng generate pipe <pipe-name>` command.\n        2.  Implement the `PipeTransform` interface.\n        3.  Implement the `transform()` method, which takes the input value and any optional arguments and returns the transformed value.\n        4.  Decorate the class with the `@Pipe` decorator, specifying the pipe's name.\n        5.  Declare the pipe in a module.\n        ```typescript\n        import { Pipe, PipeTransform } from '@angular/core';\n\n        @Pipe({\n          name: 'myCustomPipe'\n        })\n        export class MyCustomPipe implements PipeTransform {\n          transform(value: string, arg1: string): string {\n            return `Transformed: ${value} - ${arg1}`;\n          }\n        }\n        ```\n        ```html\n        <p>{{ myStringValue | myCustomPipe: 'Some Argument' }}</p>\n        ```\n\n*   **Follow-up questions:** \"When would you use a pipe instead of putting the transformation logic directly in the component?\"  \"How do you chain pipes together?\" \"How can you create a pure and impure pipe, what's the performance impact?\"\n\n**4.  Explain Angular's change detection mechanism. How does it work? What are some strategies to optimize change detection?**\n\n*   **Why this question:**  Understanding change detection is vital for building performant Angular applications.\n*   **Expected Answer:**\n    *   **How it works (Basic):** Angular uses a change detection tree that mirrors the component tree. By default, it checks every component for changes after every event (e.g., user input, HTTP response, timer).\n    *   **Default Change Detection:** Checks all component bindings on every change detection cycle.  This can become inefficient in large applications.\n    *   **Change Detection Strategies:**\n        *   **`ChangeDetectionStrategy.OnPush`:**  The component only updates when:\n            *   Its input properties change (using object identity – `===` comparison).\n            *   An event originates from the component or one of its children.\n            *   `detectChanges()` is explicitly called on the component.\n        *   **Detaching the Change Detector:** Using `ChangeDetectorRef.detach()` to completely disable change detection for a component and its subtree.  (Use with caution).\n    *   **Other Optimization Techniques:**\n        *   **Immutable Data:**  Using immutable data structures with `OnPush` makes change detection more efficient.\n        *   **`trackBy` in `*ngFor`:**  Improves performance when updating lists by only re-rendering items that have changed.\n        *   **`NgZone`:** Control code execution inside or outside of Angular's zone to prevent unnecessary change detection cycles.\n*   **Follow-up questions:** \"What are the limitations of `OnPush`?\" \"When would you use `detectChanges()`?\" \"How does `NgZone` work, and why is it important?\"\n\n**5.  What are Angular services, and why are they important?  How do you inject a service into a component?**\n\n*   **Why this question:** Tests knowledge of dependency injection and best practices.\n*   **Expected Answer:**\n    *   **Definition:** Services are classes that encapsulate reusable logic and data, providing a way to share functionality across components.  They promote separation of concerns and code reusability.\n    *   **Importance:**\n        *   **Code Reusability:** Avoids duplication of logic in multiple components.\n        *   **Separation of Concerns:** Components focus on presentation, while services handle business logic, data access, etc.\n        *   **Testability:**  Easier to unit test components when dependencies are injected.\n        *   **Maintainability:**  Changes to shared logic only need to be made in one place.\n    *   **Injection:**\n        1.  **`@Injectable()` Decorator:**  Mark the service class with the `@Injectable()` decorator.  This makes it eligible for dependency injection.  (It's technically optional in Angular 6+, but best practice to include it).\n        2.  **Constructor Injection:**  Declare the service as a parameter in the component's constructor, specifying the type.\n        3.  **Providers:** Make sure the service is provided in the correct scope.\n            *   **`providedIn: 'root'` (Recommended):**  The service is a singleton, available throughout the application.\n            *   **`providedIn: MyModule`:** The service is only available within `MyModule` and its components.\n            *   **In the `providers` array of a component (Not generally recommended):** The service is only available to that component and its children.\n\n    ```typescript\n    import { Injectable } from '@angular/core';\n\n    @Injectable({\n      providedIn: 'root' // Or 'any' in older versions\n    })\n    export class MyService {\n      getData(): string {\n        return 'Data from MyService';\n      }\n    }\n\n    import { Component } from '@angular/core';\n    import { MyService } from './my.service';\n\n    @Component({\n      selector: 'app-my-component',\n      template: `\n        <p>{{ data }}</p>\n      `\n    })\n    export class MyComponent {\n      data: string;\n\n      constructor(private myService: MyService) {\n        this.data = this.myService.getData();\n      }\n    }\n    ```\n\n*   **Follow-up questions:** \"What is the difference between providing a service in `root`, a module, and a component?\" \"What are some common use cases for services?\" \"What is a factory provider?\"\n\n**6.  Explain the differences between template-driven and reactive forms in Angular. When would you choose one over the other?**\n\n*   **Why this question:**  Forms are a fundamental part of many Angular applications, and understanding the different approaches is important.\n*   **Expected Answer:**\n\n    | Feature            | Template-Driven Forms                     | Reactive Forms                             |\n    | ------------------ | ----------------------------------------- | ------------------------------------------ |\n    | Form Definition    | Primarily in the template (HTML)           | Primarily in the component (TypeScript)    |\n    | Data Flow          | Two-way data binding (`ngModel`)           | Explicit data flow (Observable streams)     |\n    | Validation         | Using HTML5 attributes and directives     | Programmatic validation, more flexible       |\n    | Testability        | More difficult to unit test              | Easier to unit test                         |\n    | Complexity         | Simpler for basic forms                    | More complex initially, better for complex forms |\n    | Scalability        | Less scalable for large forms              | More scalable for large forms               |\n    |  Mutability | Mutable | Immutable |\n\n    *   **When to Choose:**\n        *   **Template-Driven:**  Suitable for simple forms with basic validation requirements.  Easier to get started with.\n        *   **Reactive Forms:**  Better for complex forms, forms with dynamic controls, and situations where you need precise control over validation and data flow. Also better for unit testing.\n\n*   **Follow-up questions:** \"How do you handle form validation in each approach?\" \"How do you dynamically add or remove form controls in reactive forms?\" \"What are the advantages of using Reactive Forms with immutable data structures?\"\n\n**7.  What are RxJS Observables, and how are they used in Angular? Give an example of a common RxJS operator.**\n\n*   **Why this question:** RxJS is essential for handling asynchronous operations and data streams in Angular.\n*   **Expected Answer:**\n    *   **Definition:** An Observable is a data stream that emits values over time.  It's a fundamental building block for handling asynchronous operations, events, and collections of data.\n    *   **Use in Angular:**\n        *   **HTTP Requests:**  `HttpClient` returns Observables.\n        *   **Event Handling:**  `EventEmitter` is based on Observables.\n        *   **Reactive Forms:**  Form value changes are emitted as Observables.\n        *   **State Management:**  Libraries like NgRx and Akita use Observables.\n    *   **RxJS Operators:**\n        *   **`map`:**  Transforms each value emitted by the Observable.\n        *   **`filter`:**  Emits only values that satisfy a condition.\n        *   **`subscribe`:**  Listens to the Observable and executes a callback for each emitted value, error, and completion.\n        *   **`pipe`:** Used to chain operators.\n        *   **`mergeMap` (flatMap):**  Maps each value to an Observable and merges the resulting Observables into a single Observable.  Useful for making multiple HTTP requests in sequence.\n        *   **`switchMap`:**  Similar to `mergeMap`, but cancels the previous inner Observable when a new value is emitted.  Useful for search-as-you-type scenarios.\n        *   **`debounceTime`:**  Delays emitting values until a certain amount of time has passed without any new values being emitted.  Useful for reducing the number of API calls in search-as-you-type scenarios.\n        *   **`take`:**  Takes a specified number of values from the Observable and then completes.\n\n    ```typescript\n    import { fromEvent, map, debounceTime } from 'rxjs';\n\n    // Example: Debounce a keyup event on an input\n    const searchInput = document.getElementById('search-input');\n    fromEvent(searchInput, 'keyup')\n      .pipe(\n        map((event: any) => event.target.value),\n        debounceTime(300) // Wait 300ms after the last keyup\n      )\n      .subscribe(searchTerm => {\n        // Make an API call with the search term\n        console.log('Searching for:', searchTerm);\n      });\n    ```\n\n*   **Follow-up questions:** \"What is the difference between `subscribe()` and `pipe()`?\" \"What is the difference between `mergeMap` and `switchMap`? When would you use each?\" \"What is the difference between a Subject, BehaviorSubject, and ReplaySubject?\" \"What is the purpose of `unsubscribe()`?\"\n\n**8.  Explain Angular modules (NgModules). What is the purpose of the `declarations`, `imports`, `exports`, and `providers` arrays in a module?**\n\n*   **Why this question:**  Modules are fundamental to Angular's organization and dependency injection.\n*   **Expected Answer:**\n    *   **Definition:** Modules are containers that group related components, directives, pipes, and services.  They help organize an Angular application into cohesive blocks of functionality.\n    *   **`declarations`:**  Lists the components, directives, and pipes that belong to the module.  These elements can only be used within this module unless they are also exported.\n    *   **`imports`:**  Lists other modules that are needed by the components, directives, and pipes in this module.  This makes the components, directives, and pipes exported by the imported modules available to this module.\n    *   **`exports`:**  Lists the components, directives, and pipes that are available for use in *other* modules that import this module.\n    *   **`providers`:**  Registers services and other dependencies that are available within the module (or globally if `providedIn: 'root'` is used in the `@Injectable` decorator).\n\n    ```typescript\n    import { NgModule } from '@angular/core';\n    import { BrowserModule } from '@angular/platform-browser';\n    import { MyComponent } from './my.component';\n    import { MyDirective } from './my.directive';\n    import { MyPipe } from './my.pipe';\n    import { MyService } from './my.service';\n\n    @NgModule({\n      declarations: [\n        MyComponent,\n        MyDirective,\n        MyPipe\n      ],\n      imports: [\n        BrowserModule // Imports other Angular modules\n      ],\n      exports: [\n        MyComponent // Makes MyComponent available to other modules\n      ],\n      providers: [\n        MyService // Registers MyService with the dependency injection system\n      ],\n      bootstrap: [MyComponent] // Only in AppModule, specifies the root component\n    })\n    export class MyModule { }\n    ```\n\n*   **Follow-up questions:** \"What is the purpose of the `bootstrap` array in the `AppModule`?\" \"What are feature modules? When would you create them?\" \"What is the difference between `forRoot()` and `forChild()` when importing a module like `RouterModule`?\" \"What is lazy loading and how does it relate to modules?\"\n\n**9. What is Angular CLI and what are some benefits of using it?**\n\n*   **Why this question:** To verify they've used the standard tooling and are familiar with its advantages.\n*   **Expected Answer:**\n    *   **Definition:** The Angular CLI (Command Line Interface) is a command-line tool that helps you to initialize, develop, scaffold, maintain, and deploy Angular applications.\n    *   **Benefits:**\n        *   **Project Setup:** Simplifies project creation with pre-configured settings.\n        *   **Code Generation:** Generates components, services, modules, pipes, etc., with consistent code style.\n        *   **Build and Optimization:**  Builds optimized bundles for production.\n        *   **Testing:** Runs unit and end-to-end tests.\n        *   **Serving:** Starts a development server with live reloading.\n        *   **Linting:**  Enforces code style and catches errors.\n        *   **E2E Testing:** Supports end-to-end testing using Protractor or other tools.\n        *   **Deployment:**  Can be used to deploy the application to various environments.\n\n    *   **Common Commands:**  `ng new`, `ng generate`, `ng serve`, `ng build`, `ng test`, `ng lint`, `ng add`, `ng update`.\n\n*   **Follow-up questions:**  \"Have you customized the Angular CLI's build process?\" \"Have you created custom schematics?\" \"What are some best practices for using the Angular CLI?\"\n\n**10. Explain the concept of lazy loading in Angular. Why is it important, and how do you implement it?**\n\n*   **Why this question:**  Lazy loading is essential for optimizing application performance.\n*   **Expected Answer:**\n    *   **Definition:** Lazy loading is a technique where modules or components are loaded only when they are needed, rather than all at once during the initial application load.\n    *   **Importance:**\n        *   **Improved Initial Load Time:**  Reduces the amount of code that needs to be downloaded and parsed during the initial application load, leading to faster startup.\n        *   **Reduced Bundle Size:**  Splits the application into smaller bundles, which are loaded on demand.\n        *   **Better User Experience:**  Users can start interacting with the application sooner.\n    *   **Implementation:**\n        1.  **Create Feature Modules:**  Organize your application into feature modules, each representing a distinct section or functionality.\n        2.  **Routing Configuration:**  Configure the Angular router to load these feature modules lazily.\n        3.  **`loadChildren`:** Use the `loadChildren` property in the route configuration to specify the module to load when the route is activated.  This uses dynamic imports.\n            ```typescript\n            import { NgModule } from '@angular/core';\n            import { RouterModule, Routes } from '@angular/router';\n\n            const routes: Routes = [\n              {\n                path: 'lazy',\n                loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)\n              }\n            ];\n\n            @NgModule({\n              imports: [RouterModule.forRoot(routes)],\n              exports: [RouterModule]\n            })\n            export class AppRoutingModule { }\n            ```\n        4. **Remove Eager Imports:**  Ensure that the lazy-loaded module is *not* imported in the `AppModule` or any other eagerly loaded module.\n\n*   **Follow-up questions:** \"What are preloading strategies?\" \"How do you handle shared modules when using lazy loading?\" \"How do you debug lazy loading issues?\"\n\nRemember to adapt these questions to the specific role and experience level you're interviewing for. Good luck!\n"  },

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.scss']
// })
// export class ChatComponent implements OnInit {

// //   recognition: any;
// //   ngOnInit() {
// //     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
// //     if (SpeechRecognition) {
// //       this.recognition = new SpeechRecognition();
// //       this.recognition.lang = 'en-US';
// //       this.recognition.interimResults = false;
// //       this.recognition.maxAlternatives = 1;

// //       this.recognition.onresult = (event: any) => {
// //         const transcript = event.results[0][0].transcript;
// //         this.userInput = transcript;
// //         this.sendMessage();
// //       };

// //       this.recognition.onerror = (event: any) => {
// //         console.error('Speech recognition error', event);
// //       };
// //     } else {
// //       alert('Sorry, your browser does not support speech recognition.');
// //     }
// //   }

// //   startVoice() {
// //     if (this.recognition) {
// //       this.recognition.start();
// //     }
// //   }


// //   userInput = '';


// //   chatHistory: { type: 'user' | 'bot', text: string }[] = [{
// //     type:'bot', text:'Welcome to Prince ChatbotAI.. What can I help with?'
// //   },
// // {
// //     type:'user',text:'hi team'
// //   }];

// //   constructor(private http: HttpClient) { }


// //   sendMessage() {
// //     if (!this.userInput.trim()) return;

// //     const message = this.userInput;
// //     this.chatHistory.push({ type: 'user', text: message });
// //     this.userInput = '';

// //     // this.http.post<{ reply: string }>('http://localhost:3000/chat', { prompt: message })
// //     this.http.post<{ reply: string }>('https://prince-chatbot-ai.onrender.com/chat', { prompt: message })

// //       .subscribe(
// //         res => {
// //           this.chatHistory.push({ type: 'bot', text: res.reply });
// //         },
// //         err => {
// //           this.chatHistory.push({ type: 'bot', text: '⚠️ Something went wrong. Try again later.' });
// //         }
// //       );
// //   }



// recognition: any;
//   isListening = false;
//   userInput = '';
//   chatHistory: { type: 'user' | 'bot', text: string }[] = [
//     { type: 'bot', text: 'Welcome to Prince ChatbotAI.. What can I help with?' },
//     { type: 'user', text: 'hi team' }
//   ];

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.lang = 'en-US';
//       this.recognition.interimResults = false;
//       this.recognition.maxAlternatives = 1;

//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript;
//         this.userInput = transcript;
//         this.sendMessage();
//       };

//       this.recognition.onerror = (event: any) => {
//         console.error('Speech recognition error', event);
//         this.isListening = false;
//       };

//       this.recognition.onend = () => {
//         this.isListening = false;
//       };
//     } else {
//       alert('Sorry, your browser does not support speech recognition.');
//     }
//   }

//   startVoice() {
//     if (this.recognition) {
//       this.isListening = true;
//       this.recognition.start();
//     }
//   }

//   textToSpeech(text: string) {
//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = 'en-US';
//     speech.pitch = 1;
//     speech.rate = 1;
//     window.speechSynthesis.speak(speech);
//   }

//   sendMessage() {
//     if (!this.userInput.trim()) return;

//     const message = this.userInput;
//     this.chatHistory.push({ type: 'user', text: message });
//     this.userInput = '';

//     this.http.post<{ reply: string }>('https://prince-chatbot-ai.onrender.com/chat', { prompt: message })
//       .subscribe(
//         res => {
//           this.chatHistory.push({ type: 'bot', text: res.reply });
//           this.textToSpeech(res.reply);
//         },
//         err => {
//           const errorMsg = '⚠️ Something went wrong. Try again later.';
//           this.chatHistory.push({ type: 'bot', text: errorMsg });
//           this.textToSpeech('Something went wrong. Please try again.');
//         }
//       );
//   }

// }




import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  recognition: any;
  isListening = false;
  speakReplies = true;
  userInput = '';

  chatHistory: { type: 'user' | 'bot', text: string }[] = [
    { type: 'bot', text: 'Welcome to Prince ChatbotAI.. What can I help with?' },
    //     { type: 'bot', text:   "Okay, let's break down the key differences between ReactJS and Angular.\n\n**ReactJS**\n\n*   **Nature:** A JavaScript library for building user interfaces (UIs).\n*   **Architecture:** Primarily focused on the view layer.  It's unopinionated about other parts of your application (like routing, state management, and data fetching).  You typically bring in other libraries to handle those aspects.\n*   **Learning Curve:** Steeper initial learning curve for basic concepts like JSX and component structure.  However, mastering the ecosystem (state management, routing, etc.) can take more time due to the many options.\n*   **Flexibility:**  Highly flexible.  You have complete control over the tools and libraries you use.  This is both a strength and a weakness.\n*   **State Management:** Requires third-party libraries (Redux, Zustand, Context API, Recoil, etc.) for managing complex application state. React itself provides limited state management through `useState` and `useReducer` hooks, but these are often insufficient for larger applications.\n*   **Data Binding:** One-way data binding (data flows from parent to child components).\n*   **Templating:** Uses JSX (JavaScript XML), which allows you to write HTML-like structures within JavaScript code.\n*   **DOM Manipulation:** Uses a Virtual DOM, which optimizes updates to the real DOM, leading to better performance.\n*   **Community & Ecosystem:** Large and active community.  Extensive ecosystem of libraries and tools available.\n*   **Size:** Generally smaller bundle size (core library is small).\n*   **TypeScript:** Can be used with TypeScript, but it's optional.\n*   **Testing:** Requires selecting and configuring testing frameworks (Jest, Mocha, Enzyme, React Testing Library, etc.)\n*   **Use Cases:**\n    *   Single-page applications (SPAs)\n    *   Dynamic user interfaces\n    *   Large, complex web applications\n    *   Mobile applications (with React Native)\n    *   Progressive Web Apps (PWAs)\n    *   When you need fine-grained control over your technology stack.\n\n**Angular**\n\n*   **Nature:** A comprehensive, full-fledged JavaScript framework for building client-side applications.\n*   **Architecture:** Follows a component-based architecture and enforces a specific project structure. It uses TypeScript by default and encourages the use of RxJS for asynchronous programming.\n*   **Learning Curve:** Steeper overall learning curve due to its complexity and the many concepts to grasp (modules, components, directives, services, dependency injection, RxJS, etc.).\n*   **Flexibility:** Less flexible than React. It provides a specific way of doing things, which can be both beneficial and restrictive.\n*   **State Management:** Opinionated. Often uses RxJS and patterns like NgRx (based on Redux) for state management, although other approaches are also possible.\n*   **Data Binding:** Two-way data binding (changes in the UI update the model, and vice versa, and vice versa).  This can simplify some UI development tasks but can also make debugging more difficult.\n*   **Templating:** Uses HTML templates with Angular-specific syntax (directives, interpolation, etc.).\n*   **DOM Manipulation:** Also uses a Virtual DOM.\n*   **Community & Ecosystem:** Large and mature community.  Google-backed.  A comprehensive ecosystem of libraries and tools.\n*   **Size:** Generally larger bundle size compared to React.\n*   **TypeScript:** Uses TypeScript as its primary language. TypeScript helps with code organization, maintainability, and error detection.\n*   **Testing:** Provides built-in testing tools and guidance.\n*   **Use Cases:**\n    *   Large-scale enterprise applications\n    *   Complex web applications\n    *   Applications where maintainability and scalability are critical\n    *   When you prefer a structured and opinionated framework\n    *   Progressive Web Apps (PWAs)\n    *   Mobile Applications (with Ionic or NativeScript).\n\n**Key Differences Summarized in a Table:**\n\n| Feature           | ReactJS                                     | Angular                                       |\n|--------------------|---------------------------------------------|----------------------------------------------|\n| **Nature**        | Library                                     | Framework                                       |\n| **Architecture**  | Unopinionated (View Layer)                  | Opinionated (Full-Featured)                   |\n| **Language**      | JavaScript (JSX)                            | TypeScript                                      |\n| **Data Binding**   | One-way                                     | Two-way                                        |\n| **DOM**            | Virtual DOM                                 | Virtual DOM                                   |\n| **State Management**| Requires external libraries                | Often uses RxJS, NgRx, or other patterns      |\n| **Learning Curve** | Steeper initial, ongoing learning for ecosystem| Steeper overall                              |\n| **Flexibility**   | High                                        | Lower                                         |\n| **Size**          | Smaller                                     | Larger                                         |\n| **Community**       | Large, Active                               | Large, Mature, Google-backed                  |\n| **Testing**      | Requires setup of testing framework         | Provides built-in testing tools               |\n| **Opinionated**   | Not Opinionated                           | Opinionated                                  |\n\n**When to Choose Which:**\n\n*   **Choose ReactJS when:**\n    *   You want more control over your technology stack.\n    *   You prefer a more flexible and lightweight solution.\n    *   You are comfortable choosing and integrating different libraries for routing, state management, etc.\n    *   You need a smaller bundle size.\n    *   You are already familiar with JavaScript and JSX.\n*   **Choose Angular when:**\n    *   You prefer a structured and opinionated framework.\n    *   You want a full-fledged solution with built-in features.\n    *   You need to build a large-scale enterprise application.\n    *   You are comfortable with TypeScript and RxJS.\n    *   You value maintainability and scalability.\n    *   You want a framework backed by Google.\n\n**In short:**\n\n*   **React:**  Think \"Lego bricks.\" You get the core building block and choose how to assemble them.\n*   **Angular:** Think \"Pre-built Lego set.\" You get all the pieces and instructions to build a specific model.\n\nUltimately, the best choice depends on your specific project requirements, team skills, and personal preferences.  Both are excellent technologies, and there's no universally \"better\" option.\n"
    //  },
    //     { type: 'user', text: 'hi team' }
  ];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.userInput = transcript;
        this.chatHistory.push({ type: 'user', text: transcript });
        this.cdr.detectChanges();
        this.sendMessage(transcript);
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event);
        this.isListening = false;
        this.cdr.detectChanges();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.cdr.detectChanges();
      };
    } else {
      alert('Sorry, your browser does not support speech recognition.');
    }
  }

  startVoice() {
    if (this.recognition) {
      this.isListening = true;
      this.cdr.detectChanges();
      this.recognition.start();
    }
  }

  stopVoice() {
    if (this.recognition) {
      this.recognition.stop();
      this.isListening = false;
      this.cdr.detectChanges();
    }
  }


  // toggleSpeakReplies() {
  //   this.speakReplies = !this.speakReplies;
  //   this.cdr.detectChanges();
  // }

  // textToSpeech(text: string) {
  //   if (!this.speakReplies) return;
  //   window.speechSynthesis.cancel();

  //   const speech = new SpeechSynthesisUtterance(text);
  //   speech.lang = 'en-US';
  //   speech.pitch = 1;
  //   speech.rate = 1;
  //   window.speechSynthesis.speak(speech);
  // }

  sendMessage(messageToSend?: string) {
    const message = messageToSend ?? this.userInput.trim();
    if (!message) return;

    if (!messageToSend) {
      this.chatHistory.push({ type: 'user', text: message });
      this.cdr.detectChanges();
    }

    this.userInput = '';
    this.cdr.detectChanges();

    this.http.post<{ reply: string }>('https://prince-chatbot-ai.onrender.com/chat', { prompt: message })
      .subscribe(
        res => {
          this.chatHistory.push({ type: 'bot', text: res.reply });
          this.cdr.detectChanges();
          // this.textToSpeech(res.reply);
          // this.scrollToBottom()
        },
        err => {
          const errorMsg = '⚠️ Something went wrong. Try again later.';
          this.chatHistory.push({ type: 'bot', text: errorMsg });
          this.cdr.detectChanges();
          // this.textToSpeech(errorMsg);
        }
      );
  }

  // stopSpeaking() {
  //   window.speechSynthesis.cancel();
  //   console.log('Voice response stopped.');
  // }
  // scrollToBottom() {
  //   const element = document.querySelector('.messages');
  //   if (element) {
  //     setTimeout(() => {
  //       element.scrollTop = element.scrollHeight;
  //     }, 100);
  //   }
  // }
}
