# Firebase Implementation

This project is about implementating firestore staying in guideline of *Object Oriented Programming* (OOP) principles. This will be a great place to do CRUD opperations into your firestore.

Yet then again it's structured in away if your coming from firestore UI, you will easily notice the same features, some may stand out more then others, **Inharitance**. 

Packages like ``npm i firestore-design-functions``(deprecated for now) uses this package to already allow you to access this core functionality of objects where you can easliy extent your *Design Patterens*.



## Commands

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

### Rollup

Repo uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `Repo` [optimizations docs](https://github.com/palmerhq/Repo#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```
## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. Repo has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.


# Firebase Design Functions

This project is about me coming over from C# to typescript. So I have a design pattern I like to keep. eg "Repository Patterns, UnitOfWork", I have also like the way .Net Api has [HTTPGET] and [HTTPPOST] anotation attribrites allowing controllers to trigger methods like ``Get() : <T> // where T is a class``. So I created this ***design in one function***, which contains each CRUD opperation plus a ``GetAll()`` via supporting each **HTTP Method**.


**Requirments**

> [Firebase cli installed](https://firebase.google.com/docs/cli#install-cli-windows)

## Getting started

Install typescript contoller designs

``npm i typescript-controller-design``

Create Controller Derectory ``Constrollers`` with a file of which the controller relates to.
*eg: ```user.controller.ts`*.

Import typescript contoller designs

``import { ControllerBase } from "typescript-controller-design/controller.base";``

All controllers inherits from ``ControllerBase<Request,Response>``.

```c# 
public class ControllerBase<Request,Response>
```

Be sure to implement inhehritance


```c# 
    public class UserController : ControllerBase<User,User | User[] | null>
    {
        //... inhehrited abstract methods
    }
```

It's not required but you can set a default firestore collection by passing types when components is initialize.

```c#
    /**
     * Params will set the default collection
     */
    constructor(protected readonly collection1:string[]) {
        super(collection1[0]);
        this.collection1 = collection1;
        // Just in case you wanted to not change anagin from your defalut collection
        this.NewCollection([collection1[0]]); // which isn't really needed but is indeed useful when dynamically routing URLs
    }
```
Notice that new collection create a new array of collections. This can be used within methods to create dynamic routing.

```c#
// UserController ..
    // abstract method
    async Add(model: User): Promise<User | User[]> {
        UserController.Print("Post Medthod");
        this.firestore.SetCollection([
            this.collection1
        ]);
        UserController.Print("Create User");

        // Must have a place/collection
        return await this.firestore.Documents.Add(model);
        // returned user
    }
```

Dynamic routing
```c#
// UserController ..
    // abstract method
    async Get(model: User): Promise<User | User[] | null> {
        UserController.Print("Get User");
        this.firestore.SetCollection([
            this.collection1,
            model.id
        ]);
        UserController.Print("Create User");
        
        // Must have a place/collection
        return await this.firestore.Documents.Get(model.id);
         // returned user
    }
```

**Requirments**

> [Firebase cli installed](https://firebase.google.com/docs/cli#install-cli-windows)


## Getting started

Install typescript contoller designs

``npm i firestore-implementation``

Import firestore-implementation

```typescript
    import { Firestore } from "firestore-implementation/firestore";
```

Initialize firestore global property
```c#
    protected firestore = new Firestore<Request>();
```

Notice that new collection create a new array of collections. This can be used within methods to create dynamic routing.

```c#
// UserController ..
    // abstract method
    async Add(model: User): Promise<User | User[]> {
        UserController.Print("Post Medthod");
        this.firestore.SetCollection([
            this.collection1
        ]);
        UserController.Print("Create User");

        // Must have a place/collection
        return await this.firestore.Documents.Add(model);
        // returned user
    }
```

Dynamic routing
```c#
// UserController ..
    // abstract method
    async Get(model: User): Promise<User | User[] | null> {
        UserController.Print("Get User");
        this.firestore.SetCollection([
            this.collection1,
            model.id
        ]);
        UserController.Print("Create User");
        
        // Must have a place/collection
        return await this.firestore.Documents.Get(model.id);
         // returned user
    }
```