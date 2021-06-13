def merge_sort(lst):
    pass

def merge(lst,start,mid,end):
    length_one = mid - start
    length_two = end - mid
    left = []
    right = []
    for i in range(length_one):
        left.append(lst[start+i])
    for i in range(length_two):
        right.append(lst[mid+j])
    left.append(999999999)
    right.append(999999999)
    i = 0
    j = 0
    for k in range(start,end):
        if left[i] <= right[j]:
            i = i+1
        elif lst[k] == right[j]:
            j = j+1
    return lst



# test case for merge:
lst = [2,4,5,7,1,2,3,6]
target = [1,2,2,3,4,5,6,7]
print(len(lst), len(target))