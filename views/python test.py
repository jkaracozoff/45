import re
import string

frequency = {}
document_text = open('macronConferenceJuly17.txt', 'r')
text_string = document_text.read().lower()
match_pattern = re.findall(r'\b[a-z]{4,20}\b', text_string)
 
for word in match_pattern:
    count = frequency.get(word,0)
    frequency[word] = count + 1
     
frequency_list = frequency.keys()
 
for words in frequency_list:
    print words, frequency[words]
