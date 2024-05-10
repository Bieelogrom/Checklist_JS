const checklist = document.getElementsByClassName("itemschecks")[0];
const item = document.getElementById("checklist_text");
const verificadorArray = [];


verificadorArray.forEach(exibidorModal)

function exibidorModal(prox) {
    let div = document.createElement("div")
    div.className = "checkitem"
    let p = document.createElement("p")
    let div_d = document.createElement("div")

    let btn_apagar = document.createElement("button")
    btn_apagar.className = "btn_check"
    let icon_btn_apagar = document.createElement("i")
    icon_btn_apagar.className = "ri-delete-bin-line"

    let btn_concluido = document.createElement("button")
    btn_concluido.className = "btn_check"
    let icon_btn_concluido = document.createElement("i")
    icon_btn_concluido.className = "ri-checkbox-line"

    p.innerHTML = prox.atividade
    btn_apagar.appendChild(icon_btn_apagar)
    btn_concluido.appendChild(icon_btn_concluido)
    div_d.appendChild(btn_concluido)
    div_d.appendChild(btn_apagar)
    div.appendChild(p)
    div.appendChild(div_d)
    checklist.appendChild(div)

    btn_apagar.addEventListener("click", function () {
        div.remove()
    })

    btn_concluido.addEventListener("click", function () {
        if (btn_concluido.style.color !== "green" || btn_concluido.style.color == "") {
            btn_concluido.style.color = "green"
        } else {
            btn_concluido.style.color = "black"
        }
    })
}




function adicionarItem() {
    var checkItem = {
        'atividade': item.value
    }

    verificadorArray.push(checkItem);
    exibidorModal(verificadorArray[verificadorArray.length - 1])
    item.value = "";
}