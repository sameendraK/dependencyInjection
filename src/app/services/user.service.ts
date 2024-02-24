import { Injectable, ResolvedReflectiveFactory } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpUserService {
  constructor() { }
  testVariable = "exp test";
}
@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class UserService {
  constructor() { }
  testVariable = 'test variable'
}


// route resolver
// var const object changing
// viewEncapsulation emulated under the hood working
// there is parent and child component and in child component, i wrote changedetection as onPush
// if i send some string or number value from the parent component, will that trigger changedetection for child component?
// implement an interface and then extend it and make the new interface values as optional
// subject and behavioursubject implementation
// Resolvers

// Q1:
const obj = { a: 30, b: 20, c: { d: 30 } }
const obj1 = { ...obj }
obj1.c.d = 50
obj.c.d

// Q2
// const obj: Test | Test1={}
