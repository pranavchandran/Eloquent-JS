from functools import partial
def to(a,b,c,d): return a+b+c+d
print(to(1,2,3,4))
total3 = partial(to,4,3,3)
print('3',total3(5))