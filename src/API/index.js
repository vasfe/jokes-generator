export async function getData(language, blackListFilters, jokeTypes) {
    try {
        let filtersString = `blacklistFlags=sexist,racist,${blackListFilters.nsfw.value ? `${blackListFilters.nsfw.text},` : ''}${blackListFilters.explicit.value ? `${blackListFilters.explicit.text},` : ''}${blackListFilters.religious.value ? `${blackListFilters.religious.text},` : ''}${blackListFilters.political.value ? `${blackListFilters.political.text},` : ''}`
        let typesString = "Any"
        if (jokeTypes.pun.value || jokeTypes.dark.value || jokeTypes.programming.value || jokeTypes.spooky.value) {
            typesString = `${jokeTypes.pun.value ? `${jokeTypes.pun.text},` : ''}${jokeTypes.dark.value ? `${jokeTypes.dark.text},` : ''}${jokeTypes.programming.value ? `${jokeTypes.programming.text},` : ''}${jokeTypes.spooky.value ? `${jokeTypes.spooky.text},` : ''}`
            typesString = typesString.substring(0, typesString.length - 1);
        }
        let response = await fetch(`https://v2.jokeapi.dev/joke/${typesString}?lang=${language}&safe-mode${filtersString}`)
        return response.json()
    } catch (error) {
        console.log(`Issue with fetch: ${error.message}`);
    }
}