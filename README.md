http-extras
=========================

See [here](https://github.com/meteor/meteor/pull/1670/). You can use this package to get the extra features until that PR is merged into Meteor's core `http` package.

## Installation

Put this in the packages section of your smart.json:

```
"http-extras": {
  "git": "https://github.com/aldeed/meteor-http-extras",
  "branch": "master"
}
```

Then run `mrt add http-extras` in your project directory.

## License Note

The LICENSE covers my additions and changes. Much of the code is copied from Meteor's core `http` package.