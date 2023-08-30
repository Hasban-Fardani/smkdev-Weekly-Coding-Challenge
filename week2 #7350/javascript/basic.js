function countTip(totalBills){
  // 15% jika diantara 50 dan 300
  // 20% jika selain diatas 
  persen_tip =  input >= 50 || input <= 300 ? 0.15 : 0.2;

  tip = totalBills * persen_tip
  total = totalBills + tip

  console.log(`Tagihannya ${totalBills}, tipnya ${tip}, dan total nilainya ${total}`)
}