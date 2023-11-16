## Spin TS Router Post Example

This is an example of getting POST data from the Spin implementation of Router.

Spin uses itt-router 3, but it is easier to use the Spin primitives to get the post body than it is to use itty-router middleware from within Spin. This shows how it is done.

The [index.ts](https://github.com/technosophos/ts-router-post/blob/main/src/index.ts) has all you need.

## Using This Example

You will need [Spin 2.0 or greater](https://developer.fermyon.com/spin).

* Clone this repo
* Run `npm install`
* Build and run the program with `spin build --up`

Now you can use a `curl` call to execute a test POST request:

```console
$ curl -XPOST http://localhost:3000/example --data 'Hello World'
Hello World
```

* For background, see https://github.com/fermyon/spin-js-sdk/issues/132
* For more documentation, see https://developer.fermyon.com/spin/v2/http-trigger
