// Componente de redireccion a URL
AFRAME.registerComponent("mylink-redirect", {
  
  // Al dar click al elemento actual, carga
  // la pagina con la URL (this.data.href)
  init: function() {
    this.el.addEventListener("click", (e)=> {
       window.location.href = this.data.href;
    })
  }
})