const chat_bot = document.getElementById('chat-body')
const typing = document.getElementById('typing')

const form_message = document.querySelector('form')
const message_input = document.getElementById('message')

const setAttendantBalloon = (messages) => {
    messages.forEach((message, index) => {
        if (index == 0) {
            return chat_bot.innerHTML = chat_bot.innerHTML + (
                `<attendant>
                    <balloon>
                        <span>Atendente</span>
                        <p>${message}</p>
                    </balloon>
                </attendant>`
            )
        }

        chat_bot.lastChild.innerHTML = chat_bot.lastChild.innerHTML + (
            `<balloon>
                <p>${message}</p>
            </balloon>`
        )
    })
}

const setSenderBalloon = () => {
    if (chat_bot.lastChild?.nodeName === 'SENDER') {
        return chat_bot.lastChild.innerHTML = chat_bot.lastChild.innerHTML + (
            `<balloon>
                <p>${message_input.value}</p>
            </balloon>`
        )
    }

    attendantResponse()

    chat_bot.innerHTML = chat_bot.innerHTML + (
        `<sender>
            <balloon>
                <span>Você</span>
                <p>${message_input.value}</p>
            </balloon>
        </sender>`
    )
}

const attendantResponse = () => {

    typing.classList.add('show')

    const attendant_responses = document.querySelectorAll('attendant')

    setTimeout(() => {   

        typing.classList.remove('show')

        switch (attendant_responses.length) {
            case 1:
                setAttendantBalloon([
                    'Ok, gostaria de algum acompanhamento?',
                    'Por mais R$3,00 você leva uma barata frita pequena 😋'
                ])
                break
            case 2:
                setAttendantBalloon([
                    'Certo, batata adicionada entao!',
                    'Para beber não vai querer nada?'
                ])
                break
            case 3:
                setAttendantBalloon([
                    'Anotado!'
                ])
                break
            case 4:
                setAttendantBalloon([
                    'Qual seu endereço para entrega?'
                ])
                break
            case 4:
                setAttendantBalloon([
                    'Beleza, daqui 30min o entregador chegará ate ai',
                    'Bom apetite 😄'
                ])
                break
        }
    }, 10000)
}

form_message.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!message_input.value) return

    setSenderBalloon()

    chat_bot.scrollTop = chat_bot.scrollHeight - chat_bot.offsetHeight

    return message_input.value = ""
})
