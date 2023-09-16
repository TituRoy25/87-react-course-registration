Features: 
* Each card can be selected once, when second time selection it will show a sweetalert on the display.
* Total credit is maximum 20 hours, more than that will show sweetalert on the display.
* And the remaining credit hour minimum cannot be below zero.

Discuss managed the state:
I used state in my project. 
1st useState: Card objects are stored in an empty array called useState. Then set to fetch in useEffect.
2nd useState: Card objects are stored in an empty array called useState. Then I set it in the function.
3rd & 4th useState: There initial value are 20 & 0. Then setRemaining & setTotalCredit are set it in the function.
