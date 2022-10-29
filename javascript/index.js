// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));





//  This time, you will have to call the function obtainInstruction which returns a pending Promise.

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  }, (errorStep) => console.log(errorStep))
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  }, (errorStep) => console.log(errorStep))
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  }, (errorStep) => console.log(errorStep))
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  }, (errorStep) => console.log(errorStep))
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  }, (errorStep) => console.log(errorStep))
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  }, (errorStep) => console.log(errorStep))
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// ... Your code here

// Iteration 3 using async/await
async function makeBroccoli() {
  await obtainInstruction('broccoli', 0).then((step0) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  })
  await obtainInstruction('broccoli', 1).then((step1) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  })
  await obtainInstruction('broccoli', 2).then((step2) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  })
  await obtainInstruction('broccoli', 3).then((step3) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  })
  await obtainInstruction('broccoli', 4).then((step4) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  })
  document.querySelector("#mashedPotatoes").innerHTML += `<li>broccoli are ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");

}



// OR XICO WAY 

async function makeBroccoli2() {


  const step0 = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  const step1 = await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  const step2 = await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  const step3 = await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  const step4 = await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>broccoli are ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");



  // OR IF WE WANT TO WAIT AND DISPLAY ALL IN ONE GO
  // WHIT A FOR EACH WE WILL GET ALL THE STEPS IN ONE GO BECAUSE WE HAVE ALREADY WAITED FOR THE INSTRUCTIONS TO BE PLACED IN ORDERD

  // const step0 = await obtainInstruction('broccoli', 0)
  // const step1 = await obtainInstruction('broccoli', 1)
  // const step2 = await obtainInstruction('broccoli', 2)
  // const step3 = await obtainInstruction('broccoli', 3)
  // const step4 = await obtainInstruction('broccoli', 4)

  // const mySteps = [step0, step1, step2, step3, step4]
  // mySteps.forEach((step) => {
  //   document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  //   document.querySelector("#broccoli").innerHTML += `<li>broccoli are ready!</li>`
  //   document.querySelector("#broccoliImg").removeAttribute("hidden");


  // })

}

makeBroccoli2()
// Bonus 2 - Promise all

const promiseZero = obtainInstruction('brusselsSprouts', 0)
const promiseOne = obtainInstruction('brusselsSprouts', 1)
const promiseTwo = obtainInstruction('brusselsSprouts', 2)
const promiseThree = obtainInstruction('brusselsSprouts', 3)
const promiseFour = obtainInstruction('brusselsSprouts', 4)
const promiseFive = obtainInstruction('brusselsSprouts', 5)
const promiseSix = obtainInstruction('brusselsSprouts', 6)

const allPromises = Promise.all([promiseZero, promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive, promiseSix])

allPromises.then((values) => {
  values.forEach((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  document.querySelector("#brusselsSproutsImg").style.transform =  "rotate(-90deg)";


})
  .catch((err) => {
    console.log(err)
  })