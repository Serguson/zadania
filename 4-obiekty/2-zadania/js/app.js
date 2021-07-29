const users = [
    //id, name, surname, email, age, value
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28] ,
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37] ,
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06] ,
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64] ,
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54] ,
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08] ,
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21] ,
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72] ,
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68] ,
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44] ,
    [ 11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52] ,
    [ 12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10] ,
    [ 13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07] ,
    [ 14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97] ,
    [ 15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
]

function fixTab(table) {
  let fixedTab=[]
  table.forEach (el=> {
    const [id, name, surname, email, age, value]=el;
    let newObject={
       id: id,
       name: name,
       surname: surname,
       email: email,
       age: age,
       value: value,
  }
    fixedTab.push(newObject)
  })
  return fixedTab
}


function summary (table) {
  let sum = 0
  table.forEach (el => {
    const {id, name, surname, email, age, value}=el;
    sum += value
  })
  return sum
}
const fixedTab = fixTab(users)

function averageAge (table) {
  let sum = 0
  table.forEach (el => {
    const {id, name, surname, email, age, value}=el;
    sum+=age
  })
  const length = table.length
 const averageAge = sum/length
                 return averageAge.toFixed(2)
}

function createEmailTab (table){
  let emailTab = []
  table.forEach (el=> {
    const {id, name, surname, email, age, value}=el;
    emailTab.push (email)
  })
  return emailTab
} 
const emailTab = createEmailTab(fixedTab)
console.log (`Średnia wieku użytkowników wynosi ${averageAge(fixedTab)}.`)
console.log (`Suma wszystkich pieniędzy wynosi ${summary(fixedTab)}.`)
console.log (emailTab)
