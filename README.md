
# Injectable v1.0.0 ![experimental](https://img.shields.io/badge/stability-experimental-EC5315.svg?style=flat)

```coffee
Injectable = require "Injectable"

foo = Injectable 1

foo.get() # => 1

foo.inject 2

foo.get() # => 2
```
