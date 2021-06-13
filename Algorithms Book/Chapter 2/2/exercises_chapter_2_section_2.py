# exercise 2.2.1
# O(n^3)

# exercise 2.2.2
def selection_sort(ary):
    n = len(ary)
    for i in range(0,n-1):
        smallest = ary[i]
        for j in range(i+1,n):
            if ary[j] < smallest:
                smallest = ary[j]
                key = j
        if ary[i] != smallest:
            ary[key] = ary[i]
            ary[i] = smallest
            


def solution_selection_sort(ary):
    n = len(ary)
    for i in range(0,n-1):
        smallest = i
        for j in range(i+1,n):
            if ary[j] < ary[smallest]:
                smallest = j
        # exchange a[i] with a[smallest]
        holder = ary[i]
        ary[i] = ary[smallest]
        ary[smallest] = holder