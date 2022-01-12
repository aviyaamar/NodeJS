//? express:
// back end web application framework for Node.js
// It is designed for building web applications and APIs.
//*pros:
// Almost the standard for Node.js web middleware.
// Simple, minimalistic, flexible and scalable.
// Fast app development.
// Fully customizable.
// Low learning curve.
// Easy integration of third-party services and middleware.
// Majorly focused on browsers, making templating and rendering an almost out of the box feature.

//*cons:
// rganization needs to be very clear to avoid problems when maintaining the code.
// As your codebase size increases, refactoring becomes very challenging.
// A lot of manual labor is required, since you need to create all endpoints.

//! Koa:
// Koa is a more lightweight version of Express. It's a middleware framework 
// without all of the extra modules (for routing and templating) found with Express.

//* pros:
// Koa improves interoperability, robustness, and makes writing middleware much more enjoyable.
// Has a large number of helpful methods but maintains a small footprint, as no middleware are bundled.
// Koa is very lightweight, with just 550 lines of code.
// Has a very good user experience.
// Better error handling through try/catch.
// Generated-based control flow.
// No more callbacks, facilitating an upstream and downstream flow of control.
// Cleaner, more readable async code.

//* cons:
//The open source community around Koa is relatively small.
// Not compatible with Express-style middleware.
// Koa uses generators which are not compatible with any other type of Node.js framework middleware.
//no routing, templating sending files


//!Fastify:
//  provides full encapsulation for plug-ins, 
// automatically parses JSON with relatively faster rendering, 
// and provides quick routing. Among other benefits,
// Fastify also has a cleaner syntax for writing async code in controllers.
// Express, however, has a stronger user base with plenty of documentation available.
//  Express is so popular that it is ubiquitously associated with Node.js and part of the MEAN and MERN stack.
// In summary, Fastify promises faster performance with low overhead,
//  but Express is a familiar framework that many developers may be more 
//  comfortable working with.

//!Hapi:
//*pros:
// 1 Robust Plugins: Offers rapid feature development and quicker identification
//  of bug to fix through customized modules 
// 2 Ease of Coding: Helps developers to write manageable,
//  controllable, and distributable code
//  3 Secure Framework: Blocks error messages which may
//   leak data or echo back unsecured loopholes
// Caching Advantage: Improves the web application performance through continuous caching
// .4  5 Microservice Support:  Chairo plugin allows integration of Seneca
//  functionality which is a microservice toolkit for organizing an application’s business logic. 
// 6 Integrated Authorization: Accessibility to pre-built authentication and authorization APIs6 

//*cons:
// 1 Code Configuration: Developers have to figure the code structure without community support
// 2 Compatibility Issues: Some of the Hapi-specific modules and
//  plugins such as catbox, joi, boom, etc. are not compatible with Express/Connect.
// 3 Manual Testing: Creation of endpoints and testing is manual, due to lack of automation.


//!next
//!express vs. next.js
//ExpressJS and Next.js are both open source tools. 

//"Simple" is the primary reason why developers consider ExpressJS over the competitors,
// whereas "Automatic server rendering and code splitting" was stated as the key factor in picking Next.js.


// Express.js is a backend framework for building APIs whereas Next.js is
// a full stack framework that builds upon React
// to improve the SEO, development experience, and performance of your project. 
//One of these features IS a built-in API routing system that could replace Express.js.


//!Sails.js
// it shares many similarities with Express;
// It’s a project generator, middleware and templating engine that is built on top of Express
// plus some higher level functionalities to speed up development.
// Sails.js adopts Model-View-Controller design pattern
// Model represents data model that reflects database table/collection schema,
// View is HTML view with filled in data,
// Controller is where you put all server-side business logic in and acts as a glue between data and view.
// RT communcation:
// Sails.js uses Socket.io which
// establishes a bidirectional event-based communication between client and server
// Database ORM (object relational mapping):
// Between backend logic and actual database manipulation, there is a middle ORM layer called Waterline which provides a consistent syntax to access different databases
// Sails.js has an intermediate automation degree. It focuses on the server side logic and is production ready,
// and it provides a faster developing pace than Express without sacrificing any performance or future scalability


//!Meteor
// Pros:
// Meteor was developed with simplicity in mind, even for beginners who have just started using JavaScript frameworks. One of the reasons that beginners should start with Meteor is that Meteor is a full-stack framework, this way they can get the complete learning experience when it comes to web development (back-end and front-end development), all by using a single platform and a single language.
// Changes in the database will be propagated to all subscribed clients in real time, without you having to write any code.
// Meteor is the 10th most starred project on GitHub and has overtaken even Rails.
// Cons:
// It's common for the front-end and back-end to lose sync if an internet connection is flaky. Even though the connection should be in real-time, if the connection is weak, you may lose that real-time sync. For example, in chat applications you may have to refresh the page to get the latest updated data from the server.
// MongoDB advertises scalability but only if you don't care about data-integrity. There are other backend options but none of them are officially supported.





