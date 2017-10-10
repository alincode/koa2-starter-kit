# Config

```
config/development.json
config/production.json
```

```
export NODE_ENV=development
export NODE_ENV=production
```

if `default.json`

```json
{
    "port": 3000,
    "domain": "localhost"
}
```

and `production.json`

```json
{
    "port": 80
}
```

result is

```json
{
    "port": 80,
    "domain": "localhost"
}
```

see more <https://github.com/lorenwest/node-config>