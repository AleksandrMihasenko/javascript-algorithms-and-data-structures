## Написать функцию throttle

Необходимо написать функцию, которая бы принимала другую функцию и возвращала её throttle версию.

```js
function laugh() {
  console.log('Ha-ha!')
}

const throttledLaugh = throttle(laugh, 300);

throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();
```

## Нахождения разницы двух множеств

Необходимо написать функцию, которая принимает два массива (элементы в массивах не повторяются) и возвращает новый массив.
В новом массиве должны быть все элементы которые есть в первом массиве, но нет во втором.

```js
console.log(diff([1, 2, 3, 4, 5], [3, 4, 1])); // [2, 5] 
```

## Топологическая сортировка массива

Необходимо написать функцию, которая бы делала топологическую сортировку массива по заданному критерию.

```js
const skills = [
  {
    name: 'fireball',
    need: ['firehands', 'magicspell']
  },

  {
    name: 'firehands'
  },

  {
    name: 'magicspell'
  },

  {
    name: 'inferno',
    need: ['fireball', 'crazymind']
  },

  {
    name: 'crazymind',
    need: ['magicspell']
  }
];

/*
[
  {
    name: 'firehands'
  },

  {
    name: 'magicspell'
  },

  {
    name: 'crazymind',
    need: ['magicspell']
  }

  {
    name: 'fireball',
    need: ['firehands', 'magicspell']
  },

  {
    name: 'inferno',
    need: ['fireball', 'crazymind']
  }
]
*/
console.log(sort(skills, ({name, need}) => [name, need]));
```

## Обход дерева в ширину

Необходимо вывести элементы дерева таким образом, чтобы по очереди выводились все элементы каждого яруса.

```js
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{value: 4}]
    },
    {
      value: 3
    }
  ]
};

log(tree); // 1 2 3 4
```

## Реализовать функцию преобразования CamelCase в dash-style

Необходимо создать функцию, которая бы принимала строку в CamelCase и возвращала бы её вариант в dash-style.

```js
console.log(dasherize('createDocumentFragment')); // 'create-document-fragment'
console.log(dasherize('SuperMAN'));               // 'super-man'
console.log(dasherize('VirtualDOMFragment'));     // 'virtual-dom-fragment'
```

## Написать асинхронный семафор

Необходимо написать функцию, которая бы создавала "асинхронный семафор" на основе переданной функции и набора флагов,
как это показано в примере ниже.

```js
const semaphore = createsAsyncSemaphore(() => {
  console.log('Boom!');
}, 'foo', 'bar');

semaphore('foo');
semaphore('bar'); // 'Boom!'

// Эта функция не будет выполняться
semaphore();
```

## Ломающий коммит

Имеется множество коммитов и функция проверки работы программы. На одном из коммитов программа начинает ломаться.
Необходимо выяснить за минимальное время этот коммит.

```js
const commits = ['good', 'good', 'good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];

const test = (commit) => commit === 'good';

console.log(findFirstBadCommit(commits, test)); // 3
```

## Самый большой палиндром в строке

Необходимо написать функцию, которая бы принимала строку и возвращала подстроку с самым большим палиндромом в строке. 

```js
console.log(findPalindromicSubstring('adaabbabla')); // 'abba'
console.log(findPalindromicSubstring('blablur'));    // null
```

## Генерация анаграмм

Необходимо создать функцию, которая бы принимала строку и возвращала список всех анаграмм этого слова.

```js
console.log(getAnagram('cat')); // ['cta', 'atc', 'act', 'tca', 'tac']
```

## Найти два элемента массива сумма которых дает заданное число

Необходимо написать функцию, которая бы принимала массив чисел и число и возвращала бы индексы двух элементов массива сумма которых даёт заданное число.

```js
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
```