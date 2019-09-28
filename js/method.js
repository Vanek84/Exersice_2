let arrObjects = [
{
	name:"Jonny Walker",
	birthDate:"1995-9-29"
},
{
	name:"Andrew",
	birthDate:"2000-9-29"
},
{
	name:"Alexandr",
	birthDate:"1990-9-29"
},
{
	name:"Alexandr",
	birthDate:"1985-11-22"
},
{
	name:"Alexandr",
	birthDate:"1977-10-01"
},
{
	name:"Valentina",
	birthDate:"1951-05-30"
}
];

/*
Метод searchByName возвращает‌ ‌массив‌ ‌со‌ ‌всеми‌ ‌объектами,‌ ‌
в‌ ‌имени‌ ‌которых‌ ‌эта‌ ‌строка‌ ‌содержится‌
*/


arrObjects.searchByName = function (str) {
	
	return this.filter((obj)=>{

		if(obj.name.localeCompare(str)===0){ 
			return true;
        }else false;
		
		});
};


let newArrObj = arrObjects.searchByName("Alexandr");
console.log(newArrObj);
/*
Метод ‌getBiggestAge возвращает ‌возраст‌ ‌самого‌ ‌старого‌ ‌объекта‌
*/
arrObjects.getBiggestAge = function () {
     
     let arrAge = [];

     this.forEach((obj)=>{

     	let arrDate = obj.birthDate.split("-");
        let dif = new Date() - new Date(arrDate[0],arrDate[1]-1,arrDate[2]);
        arrAge.push(Math.floor(dif/31536000000));

     })
      
     return  Math.max(...arrAge);
};


let ageObj = arrObjects.getBiggestAge(); 

console.log(`Возраст самого старшего объекта составляет : ${ageObj} `)