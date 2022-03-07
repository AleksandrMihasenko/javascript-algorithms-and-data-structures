const user = {
  name: 'Aleksandr'
}

function info(phone, email) {
  console.log(`User's name is ${this.name}, phone is ${phone}, email is ${email}`);
}

// there will be undefined
// info();

// there context is bound using method bind
// info.bind(user)('12345', 'test@mail.com');
// info.bind(user, '12345')('test2@mail.com');
// info.bind(user, '12345', 'test3@mail.com')();

// 1 way creating my method bind (simple)
// function bind(fn, context, ...args) {
//   return fn.bind(context, ...args);
// }

// 2 way my method bind (without native methods)
// function bind(fn, context, ...args) {
//   return function (...args2) {
//     const unigId = Date.now().toString();
//
//     context[unigId] = fn;
//     const result = context[unigId](...args, ...args2);
//     delete context[unigId];
//
//     return result;
//   };
// }

// 3 way my method bind (ES5)
// function bind(fn, context) {
//   const args = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     const args2 = Array.prototype.slice.call(arguments);
//     return fn.apply(context, args.concat(args2));
//   };
// }

// 4 way my method bind (ES6+)
// function bind(fn, context, ...args) {
//   return function (...args2) {
//     // return fn.apply(context, args.concat(args2));
//     return fn.call(context, ...args.concat(args2));
//   };
// }

// creating call
// function call(fn, context, ...args) {
//   const unigId = Date.now().toString();
//
//   context[unigId] = fn;
//   const result = context[unigId](...args);
//   delete context[unigId];
//
//   return result;
// }

// creating apply
function apply(fn, context, args) {
  const unigId = Date.now().toString();

  context[unigId] = fn;
  const result = context[unigId](...args);
  delete context[unigId];

  return result;
}

// bind(info, user)('12345', 'test4@mail.com');
// bind(info, user, '12345')('test4@mail.com');
// bind(info, user, '12345', 'test4@mail.com')();

// call(info, user, '12345', 'test4@mail.com');
apply(info, user, ['12345', 'test4@mail.com']);
