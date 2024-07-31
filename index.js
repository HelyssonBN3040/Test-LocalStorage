const FormUser = document.querySelector("#form-user")
const Welcome = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")

function checkUser() {
    const userName = localStorage.getItem("name")

    if (userName) {
        FormUser.style.display = "none"
        Welcome.style.display = "block"

        const userNameElemente = document.querySelector("#userName")

        userNameElemente.textContent = userName
    } else {
        FormUser.style.display = "block"
        Welcome.style.display = "none"
    }
}

FormUser.addEventListener("submit", (e) => {
    e.preventDefault()

    nameUser = document.querySelector("#name")

    localStorage.setItem("name", nameUser.value)

    nameUser.value = ""

    checkUser()

})

checkUser()


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name")
    checkUser()

})
