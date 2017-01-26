[![Code Climate](https://codeclimate.com/github/ramongr/proletariat/badges/gpa.svg)](https://codeclimate.com/github/ramongr/proletariat)
# Proletariat - A class object generator library

# 1. Introduction

Proletariat is a class object generator for jaascript. It mainly proposes two ways to generate it's results.

1. Setting the information on the lib
2. Reading of a JSON file

# 2. How to use

## 2.1 Setting the information

### Example: A test object

Let's take a test object that has the following features:

``` javascript 
    Test = {
      name: undefined,
      age: undefined,
      year: undefined
    };
```
In order to get full object-oriented functionalities it's interesting to have get and set functions to operate indirectly on the object. Proletariat has such features.

```javascript
    Proletariat.setClassName("Test")
      .defineSetterFlag("true")
      .defineGetterFlag("true")
      .defineObjectArray(["name", "age", "year"])
      .createClassObject()
      .createObjectArrayGetter()
      .createObjectArraySetter()
      .export();
```