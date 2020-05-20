// ACCEPT BUTTONS
let check = document.querySelectorAll('.accept');
// DELETE BUTTONS
let dels = document.querySelectorAll('.delete');
let textarea = document.querySelector('textarea').value;
let icons = document.querySelectorAll('.icon-check');
let p = document.querySelectorAll('.text p');
let counter = 0;
let firstElem;

// p.forEach(item => {
//     console.log(item.textContent);
// })

// LOCAL STORAGE 
// ------------- НЕДОРОБЛЕНО ------------

// function toStorage() {

//     p = document.querySelectorAll('.text p');

//     if (p.length == 0) {
//         localStorage.setItem(`${0}`, p[0].textContent);
//     } else {
//         for(let i = 1; i < p.length; i++) {
//             // console.log()
//             localStorage.setItem(`${i}`, p[i].textContent);
//         }
//     }
// }
// toStorage();

// CLEAR TEXTAREA BUTTON
let clearBtn = document.querySelector('.clear-btn');

// CLEAR ALL TASKS BUTTON
let clearTasks = document.querySelector('.clear-tasks');

// ADD NEW TASK BUTTON
let addBtn = document.querySelector('.add-btn');

// ALL ITEMS
let allItems = document.querySelectorAll('.item');

// TITLE
let h2 = document.querySelector('h2');


window.onload = () => {
    if (document.querySelector('.main').children.length == 1) {
        document.querySelector('.main').style.justifyContent = "center";
        h2.style.display = "block";
    }
}


// CLEAR ALL ITEMS FUNCTION
function clearAll() {
    clearTasks.onclick = () => {
        allItems = document.querySelectorAll('.item');

        allItems.forEach(itm => {
            document.querySelector('.main').removeChild(itm);
        })

        if (document.querySelector('.main').children.length == 1) {
            // localStorage.clear();
            document.querySelector('.main').style.justifyContent = "center";
            h2.style.display = "block";
        }
        // clearAll();
    }

}

clearAll();



// CLEAR TEXTAREA FUNCTION
function clearArea() {
    textarea = document.querySelector('textarea').value;
    clearBtn.onclick = () => {
        document.querySelector('textarea').value = "";
    }
}

clearArea();

//ADD NEW TASK FUNCTION
function addItm() {
    addBtn.onclick = () => {
        
        textarea = document.querySelector('textarea').value;

        if (textarea != "") {
            document.querySelector('.main').style.justifyContent = "stretch";
            h2.style.display = "none";
            let text = textarea;
            let element = `<div class="item">
        <div class="checkbox accept">
            <div class="icon ">
                <i class="material-icons icon-check">checks</i>
            </div>
        </div>
        <div class="text">
            <p>${text}</p>
        </div>
        <div class="checkbox delete">
            <div class="icon del">
                <i class="material-icons icon-del">clear</i>
            </div>
        </div>
    </div>`;

            // console.log(element)
            // element.parentNode.id = "111";
            // console.log(element.parentNode.id);
            
            document.querySelector(".main").insertAdjacentHTML('afterBegin', element);
            check = document.querySelectorAll('.accept');
            dels = document.querySelectorAll('.delete');
            // toStorage();
            reCheck();
            reDel();
            addIdForItm();
        }
    }
}

addItm();


// function addIdForItm() {
//     // allItems = document.querySelectorAll('.item');
//     if(!!allItems[0]) {
//         counter++;
//         allItems[0].id = counter
//         console.log(`elem ${allItems[0].value} id ${allItems[0].id}`);
//     }
// }




icons.forEach(element => {
    element.style.display = "none";
});

// CHECK IF TASK DONE
function reCheck() {
    check.forEach(element => {
        element.onclick = (e) => {
            if (e.currentTarget.querySelector('.icon-check').style.display == "none") {
                e.currentTarget.querySelector('.icon-check').style.display = "block"
                changeClass();

            } else {
                e.currentTarget.querySelector('.icon-check').style.display = "none";
                changeClass();
            }
        }
    });
}


// CHANGE STYLE OF ITEM
function changeClass() {
    icons = document.querySelectorAll('.icon-check');
    icons.forEach(element => {
        if (element.style.display == 'block') {
            element.parentElement.parentElement.parentElement.classList.add('overlay');
        } else {
            element.parentElement.parentElement.parentElement.classList.remove('overlay');
        }
    })
}


changeClass();

reCheck();


//DELETE ITEM FUNC
function reDel() {
    dels.forEach(element => {
        element.onclick = (e) => {
            element.parentNode.remove()
            if (document.querySelector('.main').children.length == 1) {
                
                document.querySelector('.main').style.justifyContent = "center";
                h2.style.display = "block";
            }
        }
    })
}

reDel();
