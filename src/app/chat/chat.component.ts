import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  ngOnInit(): void {
  }


  userInput = '';
//   chatHistory: { type: 'user' | 'bot', text: string }[] = [{ type: 'bot', text:   "Okay, let's break down the key differences between ReactJS and Angular.\n\n**ReactJS**\n\n*   **Nature:** A JavaScript library for building user interfaces (UIs).\n*   **Architecture:** Primarily focused on the view layer.  It's unopinionated about other parts of your application (like routing, state management, and data fetching).  You typically bring in other libraries to handle those aspects.\n*   **Learning Curve:** Steeper initial learning curve for basic concepts like JSX and component structure.  However, mastering the ecosystem (state management, routing, etc.) can take more time due to the many options.\n*   **Flexibility:**  Highly flexible.  You have complete control over the tools and libraries you use.  This is both a strength and a weakness.\n*   **State Management:** Requires third-party libraries (Redux, Zustand, Context API, Recoil, etc.) for managing complex application state. React itself provides limited state management through `useState` and `useReducer` hooks, but these are often insufficient for larger applications.\n*   **Data Binding:** One-way data binding (data flows from parent to child components).\n*   **Templating:** Uses JSX (JavaScript XML), which allows you to write HTML-like structures within JavaScript code.\n*   **DOM Manipulation:** Uses a Virtual DOM, which optimizes updates to the real DOM, leading to better performance.\n*   **Community & Ecosystem:** Large and active community.  Extensive ecosystem of libraries and tools available.\n*   **Size:** Generally smaller bundle size (core library is small).\n*   **TypeScript:** Can be used with TypeScript, but it's optional.\n*   **Testing:** Requires selecting and configuring testing frameworks (Jest, Mocha, Enzyme, React Testing Library, etc.)\n*   **Use Cases:**\n    *   Single-page applications (SPAs)\n    *   Dynamic user interfaces\n    *   Large, complex web applications\n    *   Mobile applications (with React Native)\n    *   Progressive Web Apps (PWAs)\n    *   When you need fine-grained control over your technology stack.\n\n**Angular**\n\n*   **Nature:** A comprehensive, full-fledged JavaScript framework for building client-side applications.\n*   **Architecture:** Follows a component-based architecture and enforces a specific project structure. It uses TypeScript by default and encourages the use of RxJS for asynchronous programming.\n*   **Learning Curve:** Steeper overall learning curve due to its complexity and the many concepts to grasp (modules, components, directives, services, dependency injection, RxJS, etc.).\n*   **Flexibility:** Less flexible than React. It provides a specific way of doing things, which can be both beneficial and restrictive.\n*   **State Management:** Opinionated. Often uses RxJS and patterns like NgRx (based on Redux) for state management, although other approaches are also possible.\n*   **Data Binding:** Two-way data binding (changes in the UI update the model, and vice versa, and vice versa).  This can simplify some UI development tasks but can also make debugging more difficult.\n*   **Templating:** Uses HTML templates with Angular-specific syntax (directives, interpolation, etc.).\n*   **DOM Manipulation:** Also uses a Virtual DOM.\n*   **Community & Ecosystem:** Large and mature community.  Google-backed.  A comprehensive ecosystem of libraries and tools.\n*   **Size:** Generally larger bundle size compared to React.\n*   **TypeScript:** Uses TypeScript as its primary language. TypeScript helps with code organization, maintainability, and error detection.\n*   **Testing:** Provides built-in testing tools and guidance.\n*   **Use Cases:**\n    *   Large-scale enterprise applications\n    *   Complex web applications\n    *   Applications where maintainability and scalability are critical\n    *   When you prefer a structured and opinionated framework\n    *   Progressive Web Apps (PWAs)\n    *   Mobile Applications (with Ionic or NativeScript).\n\n**Key Differences Summarized in a Table:**\n\n| Feature           | ReactJS                                     | Angular                                       |\n|--------------------|---------------------------------------------|----------------------------------------------|\n| **Nature**        | Library                                     | Framework                                       |\n| **Architecture**  | Unopinionated (View Layer)                  | Opinionated (Full-Featured)                   |\n| **Language**      | JavaScript (JSX)                            | TypeScript                                      |\n| **Data Binding**   | One-way                                     | Two-way                                        |\n| **DOM**            | Virtual DOM                                 | Virtual DOM                                   |\n| **State Management**| Requires external libraries                | Often uses RxJS, NgRx, or other patterns      |\n| **Learning Curve** | Steeper initial, ongoing learning for ecosystem| Steeper overall                              |\n| **Flexibility**   | High                                        | Lower                                         |\n| **Size**          | Smaller                                     | Larger                                         |\n| **Community**       | Large, Active                               | Large, Mature, Google-backed                  |\n| **Testing**      | Requires setup of testing framework         | Provides built-in testing tools               |\n| **Opinionated**   | Not Opinionated                           | Opinionated                                  |\n\n**When to Choose Which:**\n\n*   **Choose ReactJS when:**\n    *   You want more control over your technology stack.\n    *   You prefer a more flexible and lightweight solution.\n    *   You are comfortable choosing and integrating different libraries for routing, state management, etc.\n    *   You need a smaller bundle size.\n    *   You are already familiar with JavaScript and JSX.\n*   **Choose Angular when:**\n    *   You prefer a structured and opinionated framework.\n    *   You want a full-fledged solution with built-in features.\n    *   You need to build a large-scale enterprise application.\n    *   You are comfortable with TypeScript and RxJS.\n    *   You value maintainability and scalability.\n    *   You want a framework backed by Google.\n\n**In short:**\n\n*   **React:**  Think \"Lego bricks.\" You get the core building block and choose how to assemble them.\n*   **Angular:** Think \"Pre-built Lego set.\" You get all the pieces and instructions to build a specific model.\n\nUltimately, the best choice depends on your specific project requirements, team skills, and personal preferences.  Both are excellent technologies, and there's no universally \"better\" option.\n"
//  }];

  chatHistory: { type: 'user' | 'bot', text: string }[] = [];

  constructor(private http: HttpClient) { }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const message = this.userInput;
    this.chatHistory.push({ type: 'user', text: message });
    this.userInput = '';

    // this.http.post<{ reply: string }>('http://localhost:3000/chat', { prompt: message })
    this.http.post<{ reply: string }>('https://prince-chatbot-ai.onrender.com/chat', { prompt: message })

      .subscribe(
        res => {
          this.chatHistory.push({ type: 'bot', text: res.reply });
        },
        err => {
          this.chatHistory.push({ type: 'bot', text: '⚠️ Something went wrong. Try again later.' });
        }
      );
  }

}
