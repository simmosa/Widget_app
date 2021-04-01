
function retrieveDictionaryData(dictionarySearchInput) {
    dictionarySearchInput = document.querySelector('.dictionary-search-input')

    if (dictionarySearchInput.value === "") {
        dictionarySearchInput.value = 'hello'
    }

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionarySearchInput.value}`).then(res => {
        let dictionarySearchWord = res.data[0].word
        let dictionarySearchDefinition = res.data[0].meanings[0].definitions[0].definition
        let dictionarySearchExample = res.data[0].meanings[0].definitions[0].example
        let dictionarySearchAction = res.data[0].meanings[0].partOfSpeech
        let dictionarySearchSynonyms = res.data[0].meanings[0].definitions[0].synonyms

        if (dictionarySearchSynonyms) {
            if ((dictionarySearchSynonyms.length > 0) && (dictionarySearchSynonyms.length < 11)) {
                var joinedSynonyms = `${dictionarySearchSynonyms.join(', ')}.`
            } else if (dictionarySearchSynonyms.length > 11) {
                var joinedSynonyms = `${dictionarySearchSynonyms.slice(0-10).join(', ')}.`
            } 
        }

        let dictionaryWordSearched = document.querySelector('.dictionary-word')
            dictionaryWordSearched.textContent = `${
                dictionarySearchWord[0]
                    .toUpperCase() + dictionarySearchWord
                        .split('')
                        .slice(1)
                        .join('')
            }`
        let dictionarySearchedAction = document.querySelector('.dictionary-word-action')
            dictionarySearchedAction.textContent = dictionarySearchAction
        let dictionaryWordDefinition = document.querySelector('.dictionary-word-meaning')
            dictionaryWordDefinition.textContent = dictionarySearchDefinition
        let dictionaryWordExample = document.querySelector('.dictionary-word-example')
            dictionaryWordExample.textContent = `"${dictionarySearchExample}."`
        let dictionaryWordSynonyms = document.querySelector('.dictionary-word-synonyms')
            dictionaryWordSynonyms.textContent = joinedSynonyms
    })
}

function createDictionaryWidget(widgetDiv) {
    dictionaryWidgetHTML = `
        <div class="dictionary-container">  
            <div class="heading-and-search-container">
                <span class="dictionary-heading">Dictionary</span>
                <form action="" class="dictionary-word-search">
                    <input type="text" class="dictionary-search-input" placeholder="Search...">
                </form>
            </div>
            <div class="word-container">
                <p class="dictionary-word"></p>
                <span class="dictionary-word-action">word</span>
                <p class="dictionary-word-meaning"></p>
                <p class="dictionary-word-example"></p>
                <p class="dictionary-synonym">Synonyms</p>
                <p class="dictionary-word-synonyms"></p>
            </div>
        </div>
    `

    dictionaryWidget = document.createElement('div')
    dictionaryWidget.classList.add('dictionary-widget')
    dictionaryWidget.innerHTML = dictionaryWidgetHTML
    widgetDiv.append(dictionaryWidget)

    let dictionarySearchForm = document.querySelector('.dictionary-word-search')
    let dictionarySearchInput = document.querySelector('.dictionary-search-input')
    retrieveDictionaryData(dictionarySearchInput)

    dictionarySearchForm.addEventListener('submit', event => {
        event.preventDefault()
        retrieveDictionaryData(dictionarySearchInput)
    })
}

function initialiseDictionaryWidget(widgetDiv) {
    createDictionaryWidget(widgetDiv)
}

