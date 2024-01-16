function showSidebar() {
    const sidebar = document.querySelector(".mobile-nav");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".mobile-nav");
    sidebar.style.display = "none";
  }
  const submit= document.getElementById('login');
  submit.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const em = localStorage.setItem("email",email);
    let pass = localStorage.setItem("password",password);

    

  })