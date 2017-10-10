# Routes

### How to create new controller

**server/controllers/order.js**

create a new file at server/controllers/order.js

```js
export default class Order {
    async index(ctx, next) {
        // do something...
    };
}
```

**server/routes/index.js**

```js
import OrderController from '../controllers/order';
```

```js
    constructor(app) {
        this.app = app;
        this.orderController = new OrderController();
    }
```

### How to create new api

**set up route**

```js
// server/routes/index.js
apiRouter.put('/user/:id', this.userController.update);
```

**implement controller**

```js
// server/controllers/user.js
export default class User {

    async update(ctx, next) {
        // do something...
    };
}
```


