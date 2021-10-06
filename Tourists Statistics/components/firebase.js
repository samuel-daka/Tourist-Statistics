
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHtdsFqPkE3Sd5NMP0bEfmosBV42EjEI4",
  authDomain: "tourism-7f592.firebaseapp.com",
  projectId: "tourism-7f592",
  storageBucket: "tourism-7f592.appspot.com",
  messagingSenderId: "583064215356",
  appId: "1:583064215356:web:b06435d49963622fe20839",
  measurementId: "G-RF3JQTLQ7Y"
};

firebase.initializeApp(firebaseConfig);
let analytics = firebase.analytics();
let db = firebase.firestore();
let storage = firebase.storage();
let auth = firebase.auth();
db.settings({ timestampsInSnapshots: true })
console.log(firebase)

//adding data
async function addData() {

  //ARRIVALS DETAILS
  async function Arrivals() {
     document.querySelector('.ar-details').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('hello friends i have been clicked')
  

  let ArrivalDetails = e.target.parentElement.childNodes[1].childNodes
  let NumTourist = ArrivalDetails[4].value
  console.log(NumTourist)
  let Month = ArrivalDetails[19].value
  let Year = ArrivalDetails[23].value
  let  Nationality = ArrivalDetails[8].childNodes[1].childNodes[1].value
  let Region = ArrivalDetails[8].childNodes[3].childNodes[1].innerHTML
  
  let EntryPoint = ArrivalDetails[11].childNodes[1].childNodes[1].value
  let EntryType = ArrivalDetails[11].childNodes[3].childNodes[1].value

  
  console.log(EntryType)
  console.log(ArrivalDetails)
  
  db.collection('Arrivals').add({
    html: ` <tr class="t-bo">
                                <td class="S/n">1</td>
                                <td class="id">5</td>
                                <td class="em-nmb">0004</td>
                                <td class="t-nmb">${NumTourist}</td>
                                <td class="N">${Nationality}</td>
                                <td class="Region">${Region}</td>
                                <td class="PoE">${EntryPoint}</td>
                                <td class="Pt">${EntryType}</td>
                                <td class="mon">${Month}</td>
                                <td class="year">${Year}</td>
                                <td class="del" style="border-right: solid 1px black">
                                    <span style="margin: 2px;background-color:orangered;padding:3px;border-radius:10px;cursor:pointer">
                                        Delete
                                    </span>
                                </td>
                             </tr>`
  })
    
  
 //show and then hide success entry message
    setTimeout(function () {
      document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'block'
      })
    },800)
    setTimeout(function () {
      document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'none'
      })
    }, 5000)
})
  let Row = document.querySelector('.arr-data')

  function render(doc) {
    let TableRow = document.createElement('tr')
    TableRow.setAttribute('class', 't-bo')
  TableRow.setAttribute('data-id', doc.id)
  let innerHtml = doc.data().html
    TableRow.innerHTML = innerHtml
    Row.appendChild(TableRow)
  
    if (Row.innerHTML == '') {
      document.querySelectorAll('.Warning').forEach(function(e){
        e.style.display = 'block'
      })
    }
    if (Row.innerHTML !== '') {
       document.querySelectorAll('.Warning').forEach(function(e){
        e.style.display = 'none'
      })
    }
   
  }

  // db.collection('Arrivals').get().then(function (snapshot) {
  //   snapshot.docs.forEach(function (doc) {
  //     render(doc)
  //   })
  // })

    //COLLECTING THE DATA FROM THE DATABASES
  db.collection('Arrivals').onSnapshot(function (snapshot) {
      let changes = snapshot.docChanges()
    console.log(changes)
     
    changes.forEach(function (change) {
      console.log(change.doc.data().html)
      if (change.type == 'added') {
        render(change.doc)
      }
    })
    })
  }Arrivals().catch(function(){})

  //DEPARTURES DETAILS
  async function Departures(){

    document.querySelector('.de-details').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('hello departures')

      let DepartureDetails = e.target.parentElement.childNodes[1].childNodes
      let NumTourist = DepartureDetails[4].value
      
      let Month = DepartureDetails[19].value
      let Year = DepartureDetails[23].value
      let  Nationality = DepartureDetails[8].childNodes[1].childNodes[1].value
      let Region = DepartureDetails[8].childNodes[3].childNodes[1].innerHTML

      let EntryPoint = DepartureDetails[11].childNodes[1].childNodes[1].value
      let EntryType = DepartureDetails[11].childNodes[3].childNodes[1].value


      //ADDING TO THE DATABASE
       db.collection('Departures').add({
    html: ` <tr class="t-bo">
                                <td class="S/n">1</td>
                                <td class="id">5</td>
                                <td class="em-nmb">0004</td>
                                <td class="t-nmb">${NumTourist}</td>
                                <td class="N">${Nationality}</td>
                                <td class="Region">${Region}</td>
                                <td class="PoE">${EntryPoint}</td>
                                <td class="Pt">${EntryType}</td>
                                <td class="mon">${Month}</td>
                                <td class="year">${Year}</td>
                                <td class="del" style="border-right: solid 1px black">
                                    <span style="margin: 2px;background-color:orangered;padding:3px;border-radius:10px;cursor:pointer">
                                        Delete
                                    </span>
                                </td>
                             </tr>`
  })

       //show and then hide success entry message
    setTimeout(function () {
     document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'block'
      })
    },800)
    setTimeout(function () {
      document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'none'
      })
    }, 5000)

      })

      let deRow = document.querySelector('.de-data')

  function derender(doc) {
    let deTableRow = document.createElement('tr')
    deTableRow.setAttribute('class', 't-bo')
  deTableRow.setAttribute('data-id', doc.id)
  let innerHtml = doc.data().html
    deTableRow.innerHTML = innerHtml
    deRow.appendChild(deTableRow)
  
    if (deRow.innerHTML == '') {
      document.querySelectorAll('.Warning').forEach(function(e){
        e.style.display = 'block'
      })
    }
    if (deRow.innerHTML !== '') {
       document.querySelectorAll('.Warning').forEach(function(e){
        e.style.display = 'none'
      })
    }
   
  }

      //COLLECTING THE DATA FROM THE DATABASES
  db.collection('Departures').onSnapshot(function (snapshot) {
      let changes = snapshot.docChanges()
    changes.forEach(function (change) {
      console.log(change.doc.data().html)
      if (change.type == 'added') {
        derender(change.doc)
      }
    })
    })
    

  }Departures().catch(function(){})

  // ADDING NATIONAL PARKS
  async function NationalParks() {
    
    document.querySelector('.park-details').addEventListener('submit', function (e) {
      e.preventDefault()

      let parent = document.querySelector('#ad-Nat').parentElement
      console.log(parent)
      let NatName = parent.querySelector('.number-arr').value
      let Category = parent.querySelector('#category').value
      let Province = parent.querySelector('#nat-province').value
      let Zk = parent.querySelector('#nat-zk').value
      let USDInt = parent.querySelector('#nat-usd').value
      let USDsadc = parent.querySelector('#nat-usdc').value
      let UsdGe = parent.querySelector('#nat-usd-g').value
      console.log(Province)

      db.collection('NationaParks').add({
        html:` <tr class="t-bo">
                                <td class="S/n">1</td>
                                <td class="id">5</td>
                                <td class="em-nmb">0004</td>
                                <td class="p-name">${NatName}</td>
                                <td class="cgry">${Category}</td>
                                <td class="Prvc">${Province}</td>
                                <td class="zk">${Zk}</td>
                                <td class="usd-sadc">${USDsadc}</td>
                                <td class="usd">${USDInt}</td>
                                <td class="usd-d">${UsdGe}</td>
                                <td class="del" style="border-right: solid 1px black">
                                    <span style="margin: 2px;background-color:orangered;padding:3px;border-radius:10px;cursor:pointer">
                                        Delete
                                    </span>
                                </td>
                             </tr>`
      })
        //show and then hide success entry message
    setTimeout(function () {
     document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'block'
      })
    },800)
    setTimeout(function () {
      document.querySelectorAll('.succesEntry').forEach(function (e) {
        e.style.display = 'none'
      })
    }, 5000)
     
    })

     let parkData = document.querySelector('.park-data') 
      
    function NatRender(doc) {
      let natRow = document.createElement('tr')
      natRow.setAttribute('data-id', doc.id)
      natRow.setAttribute('class', 't-bo')
      natRow.innerHTML = doc.data().html
      parkData.appendChild(natRow)

      if (parkData.innerHTML == '') {
        setTimeout(function(){

          document.querySelectorAll('.Warning').forEach(function (e) {
          e.style.display = 'block'
        }, 3000)
        })
      }
      if (parkData.innerHTML !== '') {
        document.querySelectorAll('.Warning').forEach(function (e) {
          e.style.display = 'none'
        })
      }
    }

    db.collection('NationaParks').onSnapshot(function (snapshot) {
      let changes = snapshot.docChanges()

      changes.forEach(function (change) {
        if (change.type == 'added'){
          NatRender(change.doc)
        }
      })
    })

  }NationalParks().catch(function(){})
 
}addData()


 
//AUTHENTICATION FUNCTIONALITY
async function Authentication() {
  document.querySelector('.create').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('.creating').style.display = 'block'
    // 
    let email = document.querySelector('#email').value
    let password = document.querySelector('#pass').value

   auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
      var user = userCredential.user;
      window.location.replace('tourism.html')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector('.creating').style.display = 'none'
      document.querySelector('.create-err').style.display ='block'
    // ..
      document.querySelector('.create-err').innerHTML = errorMessage
      setTimeout(function () {
           document.querySelector('.create-err').style.display ='none'
      },3500)
    // ..
  });
})

//Sign in

document.querySelector('.submit-k').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('.logging-in').style.display = 'block'
//values
    let email = document.querySelector('#email-sg').value
    let password = document.querySelector('#password-sg').value
    auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
      var user = userCredential.user;
       window.location.replace('tourism.html')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector('.logging-in').style.display = 'none'
       document.querySelector('.create-err').style.display ='block'
    // ..
      document.querySelector('.create-err').innerHTML = errorMessage
      setTimeout(function () {
           document.querySelector('.create-err').style.display ='none'
      },3500)
  });
})



}Authentication().catch(function(){
  
})
