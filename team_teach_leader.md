# Pytania dla team tech leadera

## Na team tech leadera

- jak motywować zespół nie kasowo?
- jak zachęcić gdy task jest nudny?
- co zrobić gdy jakiś kierownik przychodzi przekonany przez klienta do jakiegoś pomysłu od czapy?
- kto ma przygotować stories? analityk przekłada wizję klienta na wymagania biznesowe. razem z pomocą jakiegoś technicznego.
- kto ma rodzielać stories na taski? osoba która była z analitykiem

## Techniczne

### Javascript

- czym się różnią event bubbling i event capturing?
- jak zrobić, że w tabelce na przycisku w każdej kolumnie robimy tylko jeden event listener?
- jak powstrzymać działanie przycisku submit w formularzu?
- różnica między `promise.then(f1, f2)` a `promise.then(f1).catch(f2)`
- jak zrobić coś gdy wykonają się wszystkie requesty: `Promise.all()`?
- `prototype` - co to, jak działa?
- co to jest kontekst? `this`
- do czego się odnosi kontekst? `this`
- co gdy stworzymy obiekt bez `new`?
- jak zmienić kontekst dla funkcji?
- różnica między `bind` a `apply`
- co to jest memory leak? jakbym go zdebugował?
- co nam zwróci `querySelectorAll`? `NodeList`
- czym się różni `NodeList` od `array`? `NodeList` to live collection
- jak iterować po `NodeList`?
- różnica między `for .. of` a `for .. in`
- jak iterować po propertisach obiektu? `Object.entries()`, `Object.values()`, `Object.keys()`, `for`
- jak używając `for`, dostać tylko własne properties obiektu? `hasOwnProperty()`
- jak stworzyć property tylko do doczytu? `defineProperty` https://stackoverflow.com/questions/7757337/defining-read-only-properties-in-javascript/7757493#7757493
- różnica między `seal` a `freeze`?
- czy używałem jakiś bibliotek funkcyjnych? ramda
- co to jest immutable.js?
- czym się różnią hot i cold stream?
- `setProperty` i `getProperty` - opisać
- ile wątków jest w przeglądarce w javascript? jeden
- co to jest event loop?
- jak użyć uzyskać więcej wątków? web workers
- jak uzyskiwać asynchoniczność w javascript? `callback`, `promise`, `generator`, `async/await`
- jakieś pytanie o `generator`
- różnica między `localStorage` a `sessionStorage`?
- jak dostać informację że coś się zmieniło w `localStorage`? event
- co nam daje `websocket`?
- kiedy bym nie użył `websocket`? gdy nie obsługuje serwer
- co użyć gdy nie `websocket`? long polling
- jak działa long polling?
- jakie są wady `websocket`?
- jaka inna technologia daje nam podobne zyski jak websockets? http/2
- czym się różni `websocket` od `webrtc`?

## CSS

- co robi `.a .b`?
- co robi `.a > .b`?
- co robi `.a + .b`? adjacent sibling https://stackoverflow.com/questions/1139763/what-does-the-plus-sign-css-selector-mean/25621842#25621842
- co robi `.a:first-child`?
- jak optymalizować CSS?

### HTTP

- co to jest CORS?
- jak pozwolić na dostęp do serwera przy CORS? w header wysłać do klienta
- czy HTTP jest stateful czy stateless?
- co to znaczy że jest stateless?
- jak uzyskać sesję? wysłać cookie - ale lepiej token w headerze, bo cookies miały wiele exploitów, bo wysyłane automatycznie
- co to jest jwt token?

### REST

- co to jest REST?
- jak mam products to jak bym path że ostatnie 10 produktów: `/products&limit=10&sortBy=desc`
- jak otrzymać konkretny produkt: `/proudcts/:id`
- jakbym uaktualnił pole title: `PUT` i `{"title": "new value" }`
- opisać `GET`, `POST`, `PUT`

### React

- co to jest virtual dom?
- po co jest `key` w react?
- różnica między `state` a `props`
- co to jest `useState`?
- po co jest `useEffect`?
- co to jest hoc?

### DevOps

- Czym się różni Continuous Integration od Continuous Delivery od Continuous Deploy? https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment

### Git

- różnica między `merge` a `rebase`
- jak zrobić `squash`?
- co się dzieje jak zrobimy `git rebase -i parent`?
- różnica między `push` a `commit`
- co to `reflog`?
- co to jest git flow?