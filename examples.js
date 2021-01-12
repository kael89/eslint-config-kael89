/**
|--------------------------------------------------
| Errors
|--------------------------------------------------
*/

// no-unused-vars
let a;
// Disable no-unused-vars since it comes in handy in examples
// This is done after we checked that it correctly shows an error
/* eslint-disable no-unused-vars */

// no-restricted-syntax: ForInStatement
for (const key in {}) {
}

// react/jsx-filename-extension
const CheckExtension = () => <h1></h1>;

/**
|--------------------------------------------------
| Warnings
|--------------------------------------------------
*/

/* eslint-disable import/first */
import React from 'react';
import Jest from 'jest';
/* eslint-enable import/first */

/**
|--------------------------------------------------
| Correct
|--------------------------------------------------
*/

// class-methods-use-this
class Class {
  bar() {}
}

// import/prefer-default-export
export const func = () => {};

// no-continue
// no-plusplus
for (let i = 0; i < 1; i++) {
  if (i > 1) {
    continue;
  }
}

// no-restricted-globals
isNaN(1);
isFinite(1);

// no-restricted-syntax
let x;
for (const item of [1, 2]) {
  x = item;
}

// no-use-before-define
const main = () => dependency();
const dependency = () => {};

// radix
const int = parseInt('10');

// react/jsx-props-no-spreading
const AllowPropsSpreading = props => <a {...props}>link</a>;
