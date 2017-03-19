def openOrSenior(data):
    result = []
    for x in data:
        if x[0] < 55 or x[1] <= 7:
            result.append('Open')
        else:
            result.append('Senior')
    return result



