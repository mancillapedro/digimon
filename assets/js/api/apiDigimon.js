export default async ({ searchOption, value }) => {
    const data = []
    const URL = `https://digimon-api.vercel.app/api/digimon/${[searchOption, value].join("/")}`.replace(/\/$/m,"")
    console.log(URL)
    try {
        const response = await fetch(URL)
        if (!response.ok) throw "Error";
        data.push(...await response.json())
    } catch (error) { console.log(error) }
    finally { return data }
}
