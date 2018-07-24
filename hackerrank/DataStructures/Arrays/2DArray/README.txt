Context
Given a 6x6 2D Array, {A}:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in {A} to be a subset of values with indices falling in this pattern
in {A}'s graphical representation:

a b c
  d
e f g

There are 16 hourglasses in {A}, and an hourglass sum is the sum of an hourglass' values.

Task

Calculate the hourglass sum for every hourglass in {A}, then print the maximum hourglass sum.

Input Format

There are lines of input, where each line contains space-separated integers describing
2D Array {A}; every value in {A} will be in the inclusive range of -9 to 9.

Constraints

Output Format

Print the largest (maximum) hourglass sum found in {A}.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19

{A} Explanation contains the following hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0

The hourglass with the maximum sum {A} is:

2 4 4
  2
1 2 4
