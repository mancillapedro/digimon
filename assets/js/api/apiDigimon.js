export default (() => {
    const URL_BASE = "https://digimon-api.vercel.app/api"
    const fetchBase = async (path = "") => {
        const data = []
        try {
            const response = await fetch("https://digimon-api.vercel.app/api/digimon" + path)
            if (!response.ok) throw "Error";
            data.push(...await response.json())
        } catch (error) { console.log(error) }
        finally { return data }
    }

    return {
        allDigimons: async () => await fetchBase(),
        oneDigimon: async (name) => await fetchBase(`/name/${name}`),
        forLevel: async (level) => await fetchBase(`/level/${level}`),
    }
})()