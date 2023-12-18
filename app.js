

// const randomUrl = 'https://randomuser.me/api'

// function randomInfo(){
//     fetch(randomUrl)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         showRandom(data.results)
//     })
// }

// randomInfo

// function showRandom(arr){
//     Ultag.innerHTML=''
//     for (const man of arr) {
//         Ultag.innerHTML=`<li>
//             <h1>${man.name.first}</h1>
//             <img src='${man.picture.large}'/>
//             <p>${man.location.country}</p>
//         </li>
//         `
//     }
// }

// btn.onclick=()=>{
//     randomInfo()
// }

//async function


//Global section
const btn = document.querySelectorAll('button')
const Ultag = document.querySelector('.list')
const input = document.querySelector('input')

const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'

async function foodMils(){
  const res= await fetch(foodUrl)
  const data = await res.json()
  console.log(data.meals)
  foodMealsInfo(data.meals)
}

foodMils()


btn[0].onclick=()=>{
    foodMils()
}





//input section
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    async function mealsSearch(){
        const res = await fetch(url + input.value)
        const data= await res.json()
        console.log(data.meals[0]);
        foodMealsInfo(data.meals)

       
    }

    input.onchange=()=> {
            mealsSearch();
    }
//End

//Ingridient
const inUrl='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'


async function inMeals(){
    const res=await fetch(inUrl)
    const data= await res.json()
    console.log(data.meals);
    foodMealsInfo(data.meals)

    

}

function foodMealsInfo(arr) {
    Ultag.innerHTML = '';

    arr.forEach((food, index) => {
        Ultag.innerHTML += `<li>
            <img src='${food.strMealThumb}'/>
            <div class='details' onclick='toggleAccordion(${index})'>
                <button class='btnrecip'>${food.strMeal}</button>
            </div>
            <div class='recipe rec-screen' id='recipe-${index}'>
                <h4>${food.strArea}</h4>
                <h3>${food.strIngredient1}</h3>
                <h3>${food.strIngredient2}</h3>
                <h3>${food.strIngredient3}</h3>
                <h3>${food.strIngredient4}</h3>
                <h3>${food.strIngredient5}</h3>
                <h3>${food.strIngredient6}</h3>
                <h3>${food.strIngredient7}</h3>
                <h3>${food.strIngredient8}</h3>
                <h3>${food.strIngredient9}</h3>
                <h4>Instructions</h4>
                <p>${food.strInstructions}</p>
            </div>
        </li>`;
    });
}

function toggleAccordion(food) {
    const recipeElement = document.getElementById(`recipe-${food}`);
    recipeElement.classList.toggle('active')
}




inMeals();

