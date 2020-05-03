---
title: 'Data and Variables'
date: '2016-04-29'
tags: ['data', 'machine-learning']
---

What do we really mean by data?

**Data** are pieces of information about individuals organized into variables. 

By an individual, I mean a particular person or object and by a variable, I mean a particular characteristic of the individual.

    A dataset is a set of data identified with particular circumstances.
    Datasets are typically displayed in tables, in which rows represent
    individuals and columns represent variables.

Variables can be classified into one of two types: categorical or quantitative.

* **Categorical variables** take category or label values and place an individual into one of several groups. Each observation can be placed in only one category, and the categories are mutually exclusive.

    In our example of medical records, Smoking is a categorical variable, with two groups, since each participant can be categorized only as either a nonsmoker or a smoker. Gender and Race are the two other categorical variables in our medical records example. (Notice that the values of the categorical variable Smoking have been coded as the numbers 1 or 2. It is common to code the values of a categorical variable as numbers, but you should remember that these are just codes. They have no arithmetic meaning (i.e., it does not make sense to add, subtract, multiply, divide, or compare the magnitude of such values).

* **Quantitative variables** take numerical values and represent some kind of measurement.

    In our medical example, Age is an example of a quantitative variable because it can take on multiple numerical values. It also makes sense to think about it in numerical form; that is, a person can be 18 years old or 80 years old. Weight and Height are also examples of quantitative variables.