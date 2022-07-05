GET_ALL:      curl http://localhost:5000/
ADD_TODO:     curl -d "make Russia great again" http://localhost:5000/add
DELETE_TODO:  curl -d "2" http://localhost:5000/delete
CHANGE__TODO: curl -d "2@drink beer" http://localhost:5000/change

----

+ добавить метод удаления
- добавить метод изменения
- смена статуса
- срок исполнения


-----
source /opt/anaconda3/bin/activate base