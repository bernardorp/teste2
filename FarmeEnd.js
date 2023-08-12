function meuScriptPersonalizado() {
  let quantidadeDeCL = document.querySelector("#light").textContent;
  let temNaP = document.querySelector("#village_switch_right > span");
  let plunderListElement = document.querySelector("#plunder_list");
  let elementovillage = plunderListElement.querySelectorAll('[id^="village"]');
  let clicfarmIconA = plunderListElement.querySelectorAll("a.farm_icon_a");
  let clicfarmIconB = plunderListElement.querySelectorAll("a.farm_icon_b");
  let imgComNome0PNG = plunderListElement.querySelectorAll("img[src*='0.png']");
  let distancia = plunderListElement.querySelectorAll("td:nth-child(8)");

  function contemImg(elemento) {
    return [...elemento.querySelectorAll("img[src*='0.png']")].length > 0;
  }

  if (elementovillage.length > 0 && quantidadeDeCL > 0) {
    let contatordeClic = 0;
    for (let index = 0; index < elementovillage.length; index++) {
      const vilaAtual = elementovillage[index];
      setTimeout(() => {
        if (contemImg(vilaAtual) && distancia[index].textContent < 15) {
          clicfarmIconA[index].click();
          contatordeClic++;
        } else {
          if (distancia[index].textContent < 15) {
            clicfarmIconB[index].click();
            contatordeClic++;
          } else {
            contatordeClic++;
          }
        }

        if (contatordeClic === elementovillage.length) {
          if (temNaP !== null) {
            temNaP.click();
          } else {
            setTimeout(() => {
              location.reload();
            }, 9000);
          }
        }
      }, 250 * index);
    }
  } else {
    if (temNaP !== null) {
      temNaP.click();
    } else {
      setTimeout(() => {
        location.reload();
      }, 9000);
    }
  }
}