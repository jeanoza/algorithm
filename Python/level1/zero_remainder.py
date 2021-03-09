def solution(arr, divisor):
    answer = []

    for i in arr:
        if (i % divisor) == 0:
            answer.append(i)
    answer.sort()

    if len(answer) == 0:
        answer.append(-1)

    return answer


print(solution([3, 2, 6], 10))


# input & output
# arr	          divisor	return
# [5, 9, 7, 10]	    5	    [5, 10]
# [2, 36, 1, 3]	    1	    [1, 2, 3, 36]
# [3,2,6]	        10	    [-1]
