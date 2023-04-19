const videoTitle = document.getElementById('videoTitle')
const video = document.getElementById('video')
const steps = Array.from(document.getElementsByClassName('step'))

const changeVideo = e =>{
    e.preventDefault()

    steps.forEach(element =>{
        element.classList.remove('active')
    })
    const step = e.target
    const stepNumber = e.target.children[1].children[0].textContent
    const stepDescription = e.target.children[1].children[1].textContent

    video.setAttribute('autoplay', '')
    videoTitle.textContent = stepNumber + ': ' + stepDescription
    if(stepNumber.match('Primeiro')){
        video.setAttribute('src','../videos/1.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Segundo')){
        video.setAttribute('src','../videos/2.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Terceiro')){
        video.setAttribute('src','../videos/3.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Quarto')){
        video.setAttribute('src','../videos/4.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Quinto')){
        video.setAttribute('src','../videos/5.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Sexto')){
        video.setAttribute('src','../videos/6.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Sétimo')){
        video.setAttribute('src','../videos/7.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Oitavo')){
        video.setAttribute('src','../videos/8.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Nono')){
        video.setAttribute('src','../videos/9.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo Passo')){
        video.setAttribute('src','../videos/10.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo primeiro')){
        video.setAttribute('src','../videos/11.mp4')
        step.classList.add('active')
    }
}