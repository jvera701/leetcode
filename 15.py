from itertools import combinations


def convert(sets):
    ans = []
    for i in sets:
        ans.append([i[0], i[1], i[2]])
    return ans

# Unfortunately this brute force solution isn't fast enough


def threeSumBrute(nums):
    toReturn = set()
    ans = combinations(nums, 3)
    for i in list(ans):
        if (sum(i) == 0):
            tupleAnswer = (i[0], i[1], i[2])
            tupleAnswer = sorted(tupleAnswer)
            toReturn.add(tuple(tupleAnswer))
    return convert(toReturn)


def threeSum(nums):
    nums.sort()
    answer = set()
    lookDict = {}
    for i in range(len(nums)):
        lookDict[nums[i]] = i
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            toFind = (nums[i]+nums[j]) * -1
            if (toFind in lookDict and lookDict[toFind] > j):
                tupleAnswer = (nums[i], nums[j], toFind)
                tupleAnswer = sorted(tupleAnswer)
                answer.add(tuple(tupleAnswer))
    return convert(answer)


nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums))
