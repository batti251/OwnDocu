function renderQuicklinks(){
    let quicklinkRef = document.getElementById('quicklinks');
    quicklinkRef.innerHTML = "";
    for (let quicklinkIndex = 0; quicklinkIndex < quicklinkDB.length; quicklinkIndex++) {
        let indexedQuicklink = quicklinkDB[quicklinkIndex];
        let frame = indexedQuicklink.frameAncestors 
        quicklinkRef.innerHTML += quicklinkTemplate(indexedQuicklink, frame)
}
}


function openNewTab(indexedQuicklink, frame) {
  let mainContentRef = document.getElementsByTagName('main')
switch (frame) {
  case true:
    window.open(`${indexedQuicklink}`);
    mainContentRef[0].innerHTML = "";
    break
    case false:
    mainContentRef[0].innerHTML = mainContentTemplate(indexedQuicklink);
}
}


function toClipboard(indexedButton) {
  let newRef = document.getElementsByClassName('copy-area');
  newRef = newRef[indexedButton].innerText;
  navigator.clipboard.writeText(newRef);
}

function toClipboardNew(x){
  let copyRef = x.nextElementSibling.innerText
  navigator.clipboard.writeText(copyRef);
  x.classList.add("copied-trigger"),
  x.innerText = "copied"
setTimeout(() => resetCopiedStatement(x) , 1500)
  
}

function resetCopiedStatement(x) {
  x.classList.remove("copied-trigger"),
  x.innerText = "copy"
}


function newTab(x) {
  console.log(x.value);
  window.open(x.value)
}




/* const POKE_URL = "https://pokeapi.co/api/v2/"

function init() {
  getPokeAPI("pokemon");
}
async function getPokeAPI(path = "") {
  const response = await fetch(POKE_URL + path);
  let responseRef = await response.json();
  let PokeAPI = responseRef.results;
  console.log(response);
  console.log(responseRef);
  console.log(PokeAPI);
} */

function toggleAccordion(x) {
x.nextElementSibling.classList.toggle('d-block')
}




const linkFirebase = "https://remotestorage-1e056-default-rtdb.europe-west1.firebasedatabase.app/"

const person = {
  name: "Max",
  age: 30,
  address: {
    street: "Hauptstraße 1",
    city: "Berlin"
  }
};

function init() {
/*    setFireFetch("dont-delete", person)  */
/*      getFireFetch("dont-delete") */
  deleteFireFetch("dont-delete/")
}
async function getFireFetch(path="") {
  let response = await fetch(linkFirebase + path + ".json");
  let responseJSON = await response.json()
  console.log(responseJSON);
  
}


async function setFireFetch(path="", data={}) {  
    let response = await fetch(linkFirebase + path + ".json",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        });
    return responseJSON = await response.json()
}

async function deleteFireFetch(path="", data={}) { 
  let response = await fetch(linkFirebase + path + ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      });
  return responseJSON = await response.json()
  
  }

/* let promError = false;

function getPromise() {
  return new Promise(()=> {
setTimeout(() =>  {
  if (condition) {
    
  } else {
    
  }
}, 2000)
  });
}

async function usePromise() {
  let prom = await getPromise();
  console.log(prom);
  
} */

function sendData(event){
    let email = document.getElementById('email')
    let firstName = document.getElementById('first-name')
    let lastName = document.getElementById('last-name')
    let password = document.getElementById('password')
    let description = document.getElementById('description')
    let forms = document.getElementsByTagName("input")
    event.preventDefault(); //sorgt dafür dass nach dem Senden nicht die Seite neu lädt, weil onsubmit() 
    let userObj = {
      name: lastName.value + ',' + firstName.value,
      email: email.value,
      password: password.value,
      description: description.value
    } 
    setUserCredential("/userregister/" + lastName.value  ,userObj)
for (let index = 0; index < forms.length; index++) {
  console.log(forms[index].value);
  
    forms[index].value = ""
  }
  }

  async function setUserCredential(path="", data) {
    let response = await fetch(linkFirebase + path + ".json",
      {
        method: "PUT",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
        
      })
  }


async function deleteStorageAll(){
  await fetch (linkFirebase + ".json",
    {
      method:"DELETE",
     }
  )
}

let users = []
async function showStorageAll(path="/userregister") {
  let response = await fetch(linkFirebase + path + ".json")
  let responseObj = await response.json()
  let objectResponse = Object.keys(responseObj)

  objectResponse.forEach(user => {
  users.push({
    id: user, 
    info: responseObj[user]
  })
});
console.log(users);
  console.log(responseObj);
}

function sendLogin(event) {
  let email = document.getElementById('email-login')
  let pw = document.getElementById('password-login')
  console.log(email.value , pw.value);
  loginValidation("/userregister/", email.value)
  event.preventDefault()

  //login Daten vom Server holen 
  //wenn mail existiert, dann vergleiche eingegebenes password, mit pw in der datenbank
  //wenn === dann login, sonst error
}


async function loginValidation(path="", email) {
  let response = await fetch(linkFirebase + path + ".json")
  let responseObj = await response.json()
  
console.log(responseObj);
let mailTrue = responseObj.find(mail => console.log(mail));

console.log(mailTrue);

  const areCorrectLoginCredentials = users.find((user) => {user === email}
  )
  
console.log(areCorrectLoginCredentials);




  
}


