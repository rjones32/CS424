__author__ = 'Ryan Jones'

import csv

fileName= "censusData.csv"
csvFile = open(fileName,'r')
readable = csv.reader(csvFile)
writable = csv.writer(open("output.csv",'wb'))
filterData = []
line1 = []
Headers = ["State","Age","POP"]
filterData.append(Headers)



for line in readable:
    if line[5] == '0':
        if line[6] == '999':
          line1=[]
          line1.append(line[4])
          line1.append(line[6])
          line1.append(line[12])
          filterData.append(line1)
          print(line1)

#for line in readable:
 #   if line[5]=='0':

  #      if line[12]=="POPEST2014_CIV":
   #         continue
    #    else:
     #       value    = int(line[12])
      #      if line[6]=="0":
       #         popCount = 0 + value

        #    elif line[6]=="10" or line[6]=="20" or line[6]=="30" or line[6]=="40"\
         #       or line[6]=="50" or line[6]=="60" or line[6]=="70" or line[6]=="80":
          #      ageVal = int(line[6])
           #     ageRange = ageVal - 10
                #line1.append(line[4])
            #    line1.append(str(ageRange)+"-"+line[6])
             #   line1.append(popCount)
              #  filterData.append(line1)

               # line1 = []
                #popCount = 0 + value

            #else:
             #   popCount = value + popCount
               # print(line[4]+" "+line[6]+" "+str(popCount))

for line in filterData:
    print(line)

#for line in filterData:
  # writable.writerow(line)




