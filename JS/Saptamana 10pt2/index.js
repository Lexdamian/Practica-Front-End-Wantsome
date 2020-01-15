// https://www.screencast.com/t/xglbfmIGjaVa - asa tre sa arate la final
'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// numele echipei va fi intr-un h1, locul si cand a fost formata in p-uri. 
// cele 3 coloane vor fi incadrate intr-un tag <article>
// numele eroului va fi un h2
// 3 paragrafe care ne vor zice varsta, identitatea secreta ,super puterea
// super puterile le vom avea intr-o lista - ul



// const getData = () => {
//     const xhttp = new XMLHttpRequest();
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//         document.getElementsByTagName("section").innerHTML = xhttp.responseText;
//     }
//     xhttp.open("GET", 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', true);
//     xhttp.send();
//     // console.log(xhttp);
// }

// function httpGet(url) {
//     const head = document.querySelector("header");
//     const squadName = document.createElement('h1');
//     let xHttp = new XMLHttpRequest();
//     xHttp.onreadystatechange = () => {
//             let myHeroesData = JSON.parse(this.responseText)
//             squadName.innerText = myHeroesData.squadName;
//             head.appendChild(squadName);
//             console.log(myHeroesData);
//             myHeroesFunction(myHeroesData)
//       }
//     xHttp.open("GET", url, false);
//     xHttp.send();
// };


const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    xmlReq.onload = () => {
      const serverResponse = JSON.parse(xmlReq.response);
      console.log(serverResponse);
      // JSON.stringify(javaScriptObj)
      const head = document.getElementsByTagName('body')[0];
      const squadName = document.createElement('h1');
      squadName.innerText = serverResponse.squadName
      head.appendChild(squadName);
      const hometown = document.createElement('p');
      hometown.innerText = `Hometown: ${serverResponse.homeTown} // Formed: ${serverResponse.formed}`;
      head.appendChild(hometown);
      
    };
    xmlReq.send();
  };
  
  req();


// httpGet('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

