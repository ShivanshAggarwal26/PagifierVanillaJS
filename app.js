const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");
const pageNumber = document.querySelector(".pageNumber");

const students = [];

for (let i = 0; i < 50; i++) {
    let student = {
        rollNo: i + 1,
        name: (Math.random() + 1).toString(36).substring(7),
        emailId: (Math.random() + 1).toString(36).substring(7),
    };
    students.push(student);
}

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let page = 0;


let row1 = document.createElement("tr");
let heading1 = document.createElement("th");
heading1.innerHTML = "Roll Number";
let heading2 = document.createElement("th");
heading2.innerHTML = "Student Name";
let heading3 = document.createElement("th");
heading3.innerHTML = "Email Id";
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);

let rowList = [];

for (let i = 0; i < 50; i++) {
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    data1.innerHTML = students[i].rollNo;
    let data2 = document.createElement("td");
    data2.innerHTML = students[i].name;
    let data3 = document.createElement("td");
    data3.innerHTML = students[i].emailId;
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    rowList.push(row);
}

basePrint(10, 0);

const scale = document.querySelector(".scale1");
scale.addEventListener("click", scaleChoice);

var s = 10;
function scaleChoice() {
    var value = document.getElementById("scale");
    s = +value.options[value.selectedIndex].text;
    basePrint(s);
}

function basePrint(s, page = 0) {
    tbody.innerHTML = "";
    for (let i = page; i < page + s && i < rowList.length && i >= 0; i++) { 
        tbody.appendChild(rowList[i]);
    }

    pageNumber.innerHTML = "";
    pageNumber.textContent = Math.floor(page / s) + 1;
    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("tableData").appendChild(table);
}

next.addEventListener("click", () => {
    page >= rowList.length - s ? (page = 0) : (page += s);
    tbody.innerHTML = "";
    basePrint(s, page);
});

previous.addEventListener("click", () => {
    if (page < s) {
        if (page == 0) {
            if (rowList.length % s == 0) {
                page = rowList.length - s;
            } else {
                page = rowList.length -(rowList.length % s);
            }
        } else {
            page = 0;
        }
    } else {
        page -= s;
    }
    tbody.innerHTML = "";
    basePrint(s, page);
});

first.addEventListener("click", () => {
    page = 0;
    tbody.innerHTML = "";
    basePrint(s, page);
});

last.addEventListener("click", () => {
    if (rowList.length % s == 0) {
        page = rowList.length - s;
    } else {
        page = rowList.length -(rowList.length % s);
    }
    tbody.innerHTML = "";
    basePrint(s, page);
});