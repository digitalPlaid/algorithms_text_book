def merge_sort(lst):
    pass

def merge(lst,start,mid,end):
    length_one = mid - start
    length_two = end - mid
    left = []
    right = []
    for i in range(length_one):
        left.append(lst[start+i])
    for i in range(length_two+1):
        right.append(lst[mid+i])
    left.append(999999999)
    right.append(999999999)
    i = 0
    j = 0
    for k in range(start,end+1):
        if left[i] <= right[j]:
            lst[k] = left[i]
            i = i+1
        else:
            lst[k] = right[j]
            j = j+1
    return lst



# test case for merge:
lst = [2,4,5,7,1,2,3,6]
target = [1,2,2,3,4,5,6,7]
actual = merge(lst,0,4,7)
print(actual)
print(target==actual)
lst2 = [2,1]
target2 = [1,2]
actual2 = merge(lst2,0,1,1)
print('actual2', actual2)
print(target2 == actual2)