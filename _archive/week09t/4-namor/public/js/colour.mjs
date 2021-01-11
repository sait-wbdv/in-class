export const colour = {
  init: function(templateId) {
    templateId = templateId || false;
    
    if (templateId) {
      // clone and append template
      const tpl = document.getElementById(templateId);
      const tplClone = tpl.content.cloneNode(true);
  
      const form = tplClone.querySelector('form');
      const hue = form.hue;
      const harmony = form.harmony;
      console.log(harmony);
  
      const radios = form.elements["harmony"];
      for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].addEventListener('click', function(event) {
          document.querySelector('body').setAttribute('data-clr-harmony',`${event.target.value}`);
        })
      }
  
      hue.addEventListener('input', function(event) {
        document.querySelector(':root').style.setProperty('--hue',`${event.target.value}`);
      });
      document.getElementById(templateId).parentNode.appendChild(form);
    }
  },
  setRandomHue:  function() {
    const newHue = Math.floor(Math.random() * Math.floor(360));
    document.querySelector(':root').style.setProperty('--hue',newHue);
    const hue = document.getElementById('hue');
    if (hue instanceof Element) {
      hue.value = newHue;
    } 
  }
}
