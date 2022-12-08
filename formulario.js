export function actionForm (property) {

    let i

    const arr = document.getElementsByClassName(property)

    for(i = 0;i < arr.length; i++){
        const classListArr = arr[i].classList
        console.log(classListArr)
    }
}