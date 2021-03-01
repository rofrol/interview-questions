- how check code for correctness?
- differences between var, let and const.
- Map construction
- event loop
- web worker

```
console.log(1)

setTimeout(() => console.log(2), 0)

console.log(3)
```

setTimeout moved to event loop

- typescript
- union types
- generics

## React

- react-hooks
- hooks are useCallback, useMemo
- componentDidCatch() in hooks https://reactjs.org/docs/error-boundaries.html
- useContext
- useMemo - drawback
- composition over intheritance
- how does virtual dom works

### Redux

- middleware - redux-saga, redux-thunk

## Misc

- testing - unit, e2e
- 
- security
- CI/CD
- service worker main ingredient for 
- SOLID https://en.m.wikipedia.org/wiki/SOLID

## Feedback

- improve on hooks

## Task

```javascript
// User api - https://reqres.in/api/users (?page=) (?per_page=)

/**
We expect that the getMyFriends function 
will go through all fetched users from all pages 
return an object where the properties are emails and 
the values are full names.

output:
{
  myfriend.dummy@email.com: 'myfriend full name',
  ...
}
{}
"data": [
{
"id": 1,
"email": "george.bluth@reqres.in",
"first_name": "George",
"last_name": "Bluth",
"avatar": "https://reqres.in/img/faces/1-image.jpg"
},
]
}

({
...acc,
[item.email]: ....
})
*/

const getMyFriends = async () => {
  // [{email, name}] => { email: name }
  const response = await fetch(url); //{ data: [] }; // got from service
  return response.reduce(
    (acc, item) => (
      (acc[item.email] = item.first_name + " " + item.last_name), acc
    ),
    {}
  );
};
```

- https://codesandbox.io/s/js-playground-forked-5gccy?file=/src/index.js
