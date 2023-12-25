
# def checkZeroOnes(s):
    # maxzerolen = 0
    # maxonelen = 0

    # currzerolen = 0
    # curronelen = 0
    # previous = s[0]

    # for curr in s:
    #     if int(curr) == 1 and int(previous) == 1:
    #         curronelen += 1
    #         if curronelen > maxonelen:
    #             maxonelen = curronelen
    #         previous = 1          
    #         currzerolen = 0

    #     else:
    #         currzerolen += 1
    #         if currzerolen > maxzerolen:
    #             maxzerolen = currzerolen 
    #         previous = 0            
    #         curronelen = 0 

    # return maxonelen > maxzerolen
 
    # count1 = 0
    # max_count1 = 0
    # for i in s:
    #     if i=="1":
    #         count1+=1
    #         max_count1 = max(max_count1, count1)
    #     else:
    #         count1=0
    
    # count0 = 0
    # max_count0 = 0
    # for i in s:
    #     if i=="0":
    #         count0+=1
    #         max_count0 = max(max_count0, count0)
    #     else:
    #         count0=0
    
    
    # return max_count1>max_count0


def checkZeroOnes(s):
        
        ones=s.split('0')
        zeros=s.split('1')
        ones.sort()
        zeros.sort()

        if len(ones[-1])>len(zeros[-1]):
            return True
        else:
            return False

print(checkZeroOnes("111000"))