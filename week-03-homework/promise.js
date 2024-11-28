const findTreasure = new Promise((resolve, reject) => {
    console.log("보물을 찾는 중입니다.")
    setTimeout(()=>{
        const success = Math.random() < 0.1
        if(success){
            resolve("축하합니다! 황금 보물을 발견했습니다.")
        } else {
            reject("보물을 찾는 데 실패했습니다. 다시 시도하세요.")
        }
    },3000)
})

findTreasure
  .then((success)=>{
    console.log(success)
  })
  .catch((fail)=>{
    console.log(fail)
  })

const treasure = async () => {
 try{
      const success =await findTreasure
      console.log(success)
 } catch(fail){
    console.log(fail)
 }
}
treasure()
