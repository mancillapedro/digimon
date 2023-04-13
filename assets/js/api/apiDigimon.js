export default (() => {
    const URL_BASE = "https://digimon-api.vercel.app/api"
    const fetchBase = async (url) => {
        const data = []
        try {
            const response = await fetch(url)
            if (!response.ok) throw "Error";
            data.push(...await response.json())
        } catch (error) { console.log(error) }
        finally { return data }
    }

    return {
        oneDigimon: async (name) => await fetchBase(`${URL_BASE}/digimon/name/${name}`),
        allDigimon: async () => await fetchBase(`${URL_BASE}/digimon`)
    }
})()