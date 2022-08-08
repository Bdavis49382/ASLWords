import csv
import json

with open('words.csv') as source_file:
    words = []
    reader = csv.reader(source_file)
    for (i,line) in enumerate(reader):
        for word in line:
            words.append( {'value': word,'page': f'./pages/{i+1}.jpg'})
    print(json.dumps({'words': words}))
    with open('words.json','wt') as write_file:
        write_file.write(json.dumps({'words':words})) 