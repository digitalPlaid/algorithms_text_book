def linear_search(array, target):
    if len(array) == 0:
        return -1
    for n in range(len(array)):
        if array[n] == target:
            return n
    return -1

target = 10
expected_index = 5
lst = [1,2,3,4,5,10,9,100]
#print(expected_index == linear_search(lst, target))

 
target = 9
expected_index = -1
lst = [1,2,3,4,5,10,8,100]
#print(expected_index == linear_search(lst, target))


################ Exercise 2.1.4

# binary addition of two numbers of size n
# output a size n+1 number
def binary_addition(num1,num2):
    summation = []
    n1 = len(num1)
    n2 = len(num2)
    carry = 0
    if n1 != n2 or n1 == 0 or n2 == 0:
        return []
    for i in range(n1-1,-1,-1):
        current_total = num1[i] + num2[i] + carry
        if current_total == 3:
            carry = 1
            summation.insert(0,1)
        elif current_total == 2:
            carry = 1
            summation.insert(0,0)
        elif current_total == 1:
            carry = 0
            summation.insert(0,1)
        else:
            carry = 0
            summation.insert(0,0)
    if carry == 1:
        summation.insert(0,1)
    return summation


num1 = [1,0,0,1,1,1,0,1]
num2 = [1,1,0,1,0,1,0,1]
soln = [1,0,1,1,1,0,0,1,0]
print(soln == binary_addition(num1,num2))