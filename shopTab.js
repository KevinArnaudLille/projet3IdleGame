/* Shop tab */
function updatePCPower(itemId){
  let item = shopItemsData.find(o => o.itemId === itemId);
  
  if (STATES.currentMoney >= item.itemCurrentPrice){
    STATES.currentMoney -= item.itemCurrentPrice;
    STATES.autoProgressVal += item.itemEffectOnAutoProgressVal;
    STATES.autoProgressFactor += item.itemEffectOnAutoProgressFactor;
    STATES.autoProgressSpeed -= item.itemEffectOnAutoProgressSpeed;
    STATES.PCPower += item.itemPower;
  } else {
    addTextToNarrator(narratorData.error1);
  }
  updateStats();
}

// Events
for (let item of ["item0","item1","item2","item3"]){
  let btn = $(`#${item}`);
  btn.addEventListener("click", (e) => updatePCPower(`${item}`));
  btn.addEventListener("keypress", (e) => {
    e.preventDefault();
  });
}
