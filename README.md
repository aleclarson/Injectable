
# Injectable v2.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
Injectable = require "Injectable"

foo = Injectable 1

foo.get() # => 1

foo.inject 2

foo.get() # => 2
```
