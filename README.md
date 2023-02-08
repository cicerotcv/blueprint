# Blueprint

This project is built on top of FakerJS and its main goal is to provide a schema-driven data generation in a very similar way we use schemas in NoSQL databases (one in particular comes to mind, maybe? 👀).

```typescript
import { Blueprint as Bp } from '@cicerotcv/blueprint'

// you can describe schemas
const dateSchema = Bp.date
  .between("2000-01-01", "2022-12-31")
  .transform((date) => date.toISOString());

const idSchema = Bp.datatype.uuid();

const emailSchema = Bp.internet.email()

// join them together in a ObjectSchema
const userSchema = Bp.object({
  id: idSchema,
  createdAt: dateSchema,
  email: emailSchema,
});

// create an array of items of same kind
const userCollection = Bp.array({
  minLength: 1,
  maxLength: 4,
  schema: userSchema,
});

// and run .compile() to generate all the items
console.log(userCollection.compile());
```

```
[
  {
    id: '4358c215-d0a7-4ecf-b2b3-c066630db023',
    createdAt: '2000-01-25T04:09:16.492Z',
    email: 'Danyka_Bechtelar16@yahoo.com'
  },
  {
    id: '6a6b3a29-4cae-4248-963d-7fbf593c1c81',
    createdAt: '2021-03-20T23:16:09.807Z',
    email: 'Gideon41@yahoo.com'
  },
  {
    id: 'b946a0c7-122e-4875-aced-07e5cde87957',
    createdAt: '2016-08-15T22:01:41.988Z',
    email: 'Alena16@hotmail.com'
  }
] 
```