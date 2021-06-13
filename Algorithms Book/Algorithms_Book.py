 
import random
list = []
for i in range(0,9):
     n =random.randint(1,9)
     list.append(n)
print(list)
def selectionSort(vector):
    for i, ival in enumerate(vector):
        currentLowest = ival
        indexLowest = i
        j = i
        for j in range(i+1,len(vector)):
            jval = vector[j]
            if jval < currentLowest:
                currentLowest = jval
                indexLowest = j
        vector[indexLowest] = vector[i]
        vector[i] = currentLowest
    return vector
list = selectionSort(list)
print(list)