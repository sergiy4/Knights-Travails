# **Knights Travails**

## Problem:

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side. It can face any direction.

The task is to find the shortest path from the given start to the given finish.

## Solution:

To solve this task, you need to try all 8 positions that a knight can take.
It is necessary to check whether the knight will not go beyond the boundaries of the board and whether he has visited certain cells before.

To go through all the positions, you need to create a tree-like data structure and use breadth-first traversal.