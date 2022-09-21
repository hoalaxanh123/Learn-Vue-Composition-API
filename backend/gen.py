from random import randint


for i in range(10):
    obj = {
        "id": i,
        "name": f"job-{i}",
        "salary": (i + 1) * 500,
        "counter": randint(0, i + 5),
    }
    print(obj)
