// using { sap.cap.productshop as my } from '../db/schema';

// service productshop {
// function printHelloWorld(input: String) returns String;
// function addition(num1: Int16, num2: Int16) returns Int16;

// @open
// type object {};
// function myFunction(Catagory: Int16) returns object;
// } 
using { sap.cap.productshop as my } from '../db/schema';
service productshop{
    entity product as projection on my.product;
    entity supplier as projection on my.supplier;
}