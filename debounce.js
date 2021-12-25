var timerid;
let movies_div = document.getElementById("movies");
async function searchmovies(n) {
//   let res = await fetch(`http://localhost:3500/result?q=${n}`);
  let res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${n}&apikey=a5030f5a54e8caea4219ed4d1e2e3c18`);
  let data = await res.json(); //await kia h bcoz console krne par ans promise m ara tha so promise se info nikalne k lie await kie h
  console.log(data.data.results);
  return data.data.results; //data is variable defined above and results  is an array containing info in api
}

function appendmovies(t) {

  //console.log(count);
  console.log(`t-${t}`);
  movies_div.innerHTML = null;
  // return false;

  t.forEach(({ name }) => {
    //taking name directly from api data
    console.log({ name });
    let p = document.createElement("p");
    p.innerText = name; // name is assigned here
    movies_div.append(p); //movies_div defined at line 33
  });
}

async function main() {
  let names = document.getElementById("query").value;
  if (names.length < 1) {
    return false;
  }
  let movies = await searchmovies(names);
  if (movies === undefined) {
    return false;
  }
  appendmovies(movies);
  console.log(`movies-${movies}`);
  console.log(movies);
}

function debounce(func, delay) {
  let names = document.getElementById("query").value;
  if (names.length < 1) {
    return false;
  }
  if (timerid) {
    clearTimeout(timerid);
  }

  timerid = setTimeout(() => {
    func();
  }, delay);
}


// var timerid;
//  let pokemon_div = document.getElementById('movies')
//  async function searchpokemon(n) {
//      let res = await fetch(`http://localhost:3500/result?q=${n}`)
//      let data = await res.json();
//     //  console.log(data);
//        return data;
//  }
//  function appendPokemon(Pokemon) {//data
//      pokemon_div.innerHTML = null
//      Pokemon.forEach(({name}) => {//{name}
//          let p = document.createElement('p')
//          p.innerText = name
//          pokemon_div.append(p);
//      });
//  }
//  async function main() {
//      let name = document.getElementById("query").value;//pikachu
//      if (name.length < 1) {
//          return false;
//      }
//      let pokemon = await searchpokemon(name);//pikachu//
//      console.log(pokemon);
//      if (pokemon=== undefined) {
//          return false;
//      }
//      appendPokemon(pokemon);//data= id name img
//  }
//  function debounce(func, delay) {
//      let name = document.getElementById("query").value;
//      if (name.length < 1) {
//          return false;
//      }
//      if (timerid) {
//          clearTimeout(timerid);
//      }
//      timerid = setTimeout(() => {
//          func();
//      }, delay)
//      name.innerHTML=""
//  }


// // Send a message to Pushpendra Kumar Pandey:headphones:In a huddle



