## Frontend

- co przyniosło es6, jakie arrayowe methody, Object.entries, for..in, for..of,
- asynchroniczność co przyniosło, promise spłaszcza, wertykalnie się przesuwamy
- dwie promisy puścić
- hot i cold, cold observable dopiero emituje jak będzie subkrybent, hot od razu emituje
- co jest event emiterem - dom emituje
- event loop, co może jeszcze do event loopa wrzucić? setTimeout, setInterval
- websockets - autentykacja, websockets nie ma headerów
- virtual-dom - aplikacja przejmuje kontrolę kiedy renderować, batchować
- fetch
- axios, co to są interceptory - można zmienić headery, request body,
- sql, describe co robi

## React

- hoc - jak dodać id do buttonie, renderProp
- wzorce projektowe -
- odwołanie do elementów, useRef, forwardRef
- jak nie kontrolowane to to ref
- setState, callBack, asynchroniczny
- key, jak usunięmy 3 to usunie się 4 a propsy z 4 będą na 3, w react 16 siblings list unique keys

```javascript
const User = (props) => {}

onClick={handler} onClick={handler()}

this.setState ({
 counter: this.state.counter + this.props.increment,
});

this.setState ((state, props) => ({
  counter: state.counter + props.increment
}));
```

- zmodyfikowanie stanu rodzica: callback, redux, context, reference

- jak przeciwdziałać render
- useEfect wykona się jak referencja się zmieni
- useEffect i removeEventListener
- największa wada useEffect i useLayoutEffect - nie czekają
- useLayoutEffect jest przed useEffect
- useLocation, useHistory - z react-router-dom
- useReducer - kiedy warto użyć: zaczyna się rozrasta logika
- arrow function, jest cały czas tworzona jak w onClick, może mieć wpływ na performance
- redux - to singleton
- jak przeciwdziałać większej ilości instancji: NazwaKlasy.instance
- redux
- kilka middlewearów, co powinno być przekazywane
- czy można zwrócić string w middleware - do logowanie
- context, czy można kilka
