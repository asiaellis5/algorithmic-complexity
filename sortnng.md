Finding duplicates
Given a list of things (numbers or words), return all the elements that are duplicated in the list.


I                            |          O
["word"]                     |       []
[1]                          |       []
["word", "word"]             |  ["word"]
[1, 1]                       |  [1, 1]
["word", 1]                  |  []
["word", "word", 1, 1]       | ["word", 1]
["one", "one", "two", "two"] | ["one", "two"]
[1, 1, 2, 2]                 | [1, 2]
[]                           | []
["WORD", "word"]             | [] 
["one", 1]                   | [] 
["1", 1]                     | []


findDups()

# Go through and do a tally of how many times you have seen that thing
# 

