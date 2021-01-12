semantyka html - znaczenie mają znacznki, div nie ma, aside, header mają. Dla czytników dla niewidomych. Dziś rzadziej używają tego crawlery typu Google.

localStorage/sessionStorage - localStorage między oknami/kartami współdzielona, sessionStorage do zamknięcia okna/karty.

inny sposób przechowywania - indexDb, cookies

css, sass, css in javascript

pseudoklasa, pseudelement - pesudoklasa to :before, :after, :hover. A pseudoloement utworzymy przez :before i content.

css speficicity? Prioriet selektora

typescript - czy używałem, z elm/rust znam algebrainczne typy danych, option/maybe, combinators typu flat_map

var, let - nie ma hoisting jak w var, block scope, capture dla let w loop i closure

const x = { foo: 123 }; // nie zamraża, jak zrobić immutable? seal (pozwala na zmianę wartości) czy freeze (najmocniejszy)

arrow function // this jest undefined w arrow, krótszy zapis

porównanie dwóch zagnieżdżonych obiektów // lodash lub rekurencja

## react

key - po co - virtual dom diff, czy index jest ok? lepiej id z api, bo jak usuniemy w środku to będzie próbowali dostać się do elementu poza tablicą?

kilka dzieci - jak przekazywać dane między nimi: redux, context, callback

jakie hooki używałem: useState, useEffect - run after react renders so does not block browser painting, useLayoutEffect - for DOM measurement, DOM mutations, trigger synchronouse re-render

zaleta useEffect - nie przerenderuje jak setState na tą samą wartośc ustawi

useMemo - do cachowania

redux - trzy elementy: state, action, reducer

co to jest reducer - funkcja która dostaje action i stan a zwraca stan

narzędzia do redux - redux devtools, redux-toolkit, redux-thunk, redux-saga, redux-form

trzeba wybrać bibliotekę z 5, na co bym zwracał uwagę: npmstats, git commits - kiedy ostatni, github stars, ile i jakie issues, ilu kontrybutorów, czy są przykłady, jakie projekty tego używają.

[](sii_hsbc.js)

## HSBC

Jakie etapy jeszcze? Menadżer liniowy będzie się odzywał.

UoP, B2B + koszta krewtywne

React w HSBC, mają bibliotekę komponentów

Benefity
- UoP - masa rzeczy jak budżet szkoleniowy, opieka medyczna
- B2B - okrojona wersja

Urlopy:
- B2B - 2 tygodnie to ok

Własny lapek od SII: Windows 10, Dell.

System pracy: większość rzeczy jest w scrum. Daily codziennie 9:00 lub 9:30, jak zespół lokalny to można inaczej. 

Czy zawsze będzie zdalna? Po pandemii w biurze do dwóch dni zdalnie. Biuro w Warszawie gdzieś.