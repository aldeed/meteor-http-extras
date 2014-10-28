http-extras
=========================

Adds the features proposed in [this PR](https://github.com/meteor/meteor/pull/1670/). Add this to your project along with the core `http` package.

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add http aldeed:http
```

## Details

The API methods are the same as in the [core HTTP package](http://docs.meteor.com/#http).

This package adds a `responseType` option to `HTTP.call` on both the client and the server. It also adds an `encoding` option on the server.

The `responseType` option can be one of the following string values:

* "string": `result.content` will be a `String` (this is the default and matches the current behavior)
* "blob": (Client only) `result.content` will be a `Blob`
* "document": (Client only) `result.content` will be a `Document`
* "buffer": (Server only) `result.content` will be a `Buffer` (setting `encoding` to `null` does the same thing)
* "arraybuffer": `result.content` will be an `ArrayBuffer`
* "ejson-binary": `result.content` will be an `EJSON.binary`
* "json": `result.content` will be an `Object`

On the server only, you may additionally specify the desired encoding with the `encoding` option when `responseType` is "string". This takes string values matching those from Node's `Buffer.toString` method.

## License Note

The LICENSE covers my additions and changes. Much of the code is copied from Meteor's core `http` package.