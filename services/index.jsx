const BASE_URL = 'https://the-trivia-api.com/api/'

async function fetchData(category) {
    try {
        const res = await fetch(
            `${BASE_URL}questions?categories=${category}&limit=10`
        )
        return res.json()
    } catch (error) {
        throw new Error(error);
    }
}

export async function fetchSports() {
    try {
        const data = await fetchData('sport_and_leisure')
        return data

    } catch (error) {
        throw new Error('Error happened while fetching sports datas', error)
    }
}
export async function fetchHistory() {
    try {
        const data = await fetchData('history')
        return data

    } catch (error) {
        throw new Error('Error happened while fetching history datas', error)
    }
}
export async function fetchFilms() {
    try {
        const data = await fetchData('film_and_tv')
        return data

    } catch (error) {
        throw new Error('Error happened while fetching films datas', error)
    }
}
export async function fetchMusic() {
    try {
        const data = await fetchData('music')
        return data

    } catch (error) {
        throw new Error('Error happened while fetching films datas', error)
    }
}

export async function fetchGeneralKnowledge() {
    try {
        const data = await fetchData('general_knowledge')
        return data

    } catch (error) {
        throw new Error('Error happened while fetching history datas', error)
    }
}

export async function fetchRandom() {
    try {
        const res = await fetch('https://the-trivia-api.com/api/questions?limit=10')
        const data = await res.json()
        return data

    } catch (error) {
        throw new Error('Error happened while fetching random datas', error)
    }
}
