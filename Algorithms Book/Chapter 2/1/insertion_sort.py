def insertion_sort(inpt):
    for j in range(1,len(inpt)):
        key = inpt[j]
        i = j-1
        while i > -1 and inpt[i] > key:
            inpt[i+1] = inpt[i]
            i = i-1
        inpt[i+1] = key
    return inpt

def insertion_sort_decreasing(inpt):
    for j in range(1,len(inpt)):
        key = inpt[j]
        i = j-1
        while i > -1 and inpt[i] < key:
            inpt[i+1] = inpt[i]
            i=i-1
        inpt[i+1] = key
    return inpt


def check_equal_arrays(inpt,goal):
    i = len(inpt)
    g = len(goal)
    if i == 0 or g == 0 or i != g:
        return False
    for j in range(i):
        if inpt[j] != goal[j]:
            return False
    return True

# some forward tests:
inpt = [5,2,4,6,1,3]
goal  = [1,2,3,4,5,6]
print(check_equal_arrays(insertion_sort(inpt),goal))

inpt = [31,41,59,26,41,58]
goal = [26,31,41,41,58,59]
print(check_equal_arrays(insertion_sort(inpt), goal))

# some backward tests:
inpt = [5,2,4,6,1,3]
goal  = [6,5,4,3,2,1]
print(check_equal_arrays(insertion_sort_decreasing(inpt),goal))

inpt = [31,41,59,26,41,58]
goal  = [59,58,41,41,31,26]
print(check_equal_arrays(insertion_sort_decreasing(inpt),goal))
