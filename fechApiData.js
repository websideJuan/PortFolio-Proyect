const wrapper = document.getElementById('wrapper');
const fragment = document.createDocumentFragment();
const templateWrapper = document.getElementById('templateWrapper').content

const uriData = "./json/portfoliodata.json";


async function dataFechApiJson () {
    return await fetch(uriData)
    .then(res => res.json())
    .then(data => data.data)
    .catch(err => console.log(err))
}



export const pintarCards = async () => {

    const data = await dataFechApiJson()
    const dataMap = data.map(item => ({...item, validation: false}))
    const dataFind = dataMap.slice(dataMap.length < dataMap.iuID)

    setPintarCard(dataFind)
}

const setPintarCard = (datas) => {
    datas.forEach(data => {

        const img = templateWrapper.querySelector('.portfolio__img')
        img.setAttribute('alt', data.title)
        img.setAttribute('src', data.img)
        
        templateWrapper.querySelector('h5').textContent = data.title
        templateWrapper.querySelector('p').textContent = data.paragraph

        const clone = templateWrapper.cloneNode(true)

        fragment.appendChild(clone)

    });

    wrapper.appendChild(fragment)
    
}