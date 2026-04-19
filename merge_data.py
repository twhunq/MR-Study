import json

with open('_data_part1.json','r',encoding='utf-8') as f:
    p1 = json.load(f)
with open('_data_part2.json','r',encoding='utf-8') as f:
    p2 = json.load(f)

all_data = {}
for k in ['1','2','3','4','5','6']:
    if k in p1: all_data[k] = p1[k]
    elif k in p2: all_data[k] = p2[k]

# Write lessonsData.js
with open('src/data/lessonsData.js','w',encoding='utf-8') as f:
    f.write('// --- KHO DỮ LIỆU ĐỀ THI ---\n')
    f.write('const LESSONS_DATA = ')
    f.write(json.dumps(all_data, ensure_ascii=False, indent=2))
    f.write(';\n\nexport default LESSONS_DATA;\n')

for k in sorted(all_data.keys()):
    print(f"Bài {k}: {len(all_data[k])} câu hỏi")
print("Done!")
