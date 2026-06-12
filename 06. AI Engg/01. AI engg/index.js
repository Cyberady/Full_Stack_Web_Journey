import { dates } from './dates.js'

// const POLYGON_API_KEY = 'you_key'
// const OPENROUTER_API_KEY = 'your_key'

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')
const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

const defaultLabelText =
    'Add up to 3 stock tickers below to get a super accurate stock predictions report 👇'

const systemPrompt = `
You are Aditya Babar, a stock market commentator.

Based on the stock data provided, write a short report of 2-4 sentences.

Rules:
- Mention stock tickers.
- Keep it under 60 words.
- Be simple and easy to read.
- Do not give financial advice.
- Sound slightly confident but casual.
`

generateReportBtn.addEventListener('click', fetchStockData)

document
    .getElementById('ticker-input-form')
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const tickerInput = document.getElementById('ticker-input')
        const label = document.getElementsByTagName('label')[0]

        const ticker = tickerInput.value.trim().toUpperCase()

        if (ticker.length < 3) {
            label.style.color = 'red'
            label.textContent =
                'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'

            return
        }

        if (tickersArr.length >= 3) {
            label.style.color = 'red'
            label.textContent = 'Maximum 3 tickers allowed.'

            return
        }

        if (tickersArr.includes(ticker)) {
            label.style.color = 'red'
            label.textContent = 'Ticker already added.'

            return
        }

        label.style.color = '#333'
        label.textContent = defaultLabelText

        tickersArr.push(ticker)

        tickerInput.value = ''

        generateReportBtn.disabled = false

        renderTickers()
    })

function renderTickers() {
    const tickerDiv = document.querySelector('.tickers-choice-display')

    tickerDiv.innerHTML = ''

    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')

        newTickerSpan.textContent = ticker

        newTickerSpan.classList.add('ticker')

        tickerDiv.appendChild(newTickerSpan)
    })
}

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'

    loadingArea.style.display = 'flex'

    apiMessage.textContent = 'Fetching stock data...'

    try {
        const stockData = await Promise.all(
            tickersArr.map(async (ticker) => {
                const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`

                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`Failed to fetch ${ticker}`)
                }

                return await response.json()
            })
        )

        await fetchReport(JSON.stringify(stockData))
    } catch (err) {
        console.error(err)

        loadingArea.innerHTML =
            '<p>There was an error fetching stock data.</p>'
    }
}

async function fetchReport(data) {
    apiMessage.textContent = 'Creating report...'

    try {
        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'openai/gpt-oss-120b:free',
                    messages: [
                        {
                            role: 'system',
                            content: systemPrompt
                        },
                        {
                            role: 'user',
                            content: data
                        }
                    ],
                    temperature: 1.1,
                    max_tokens: 100
                })
            }
        )

        const result = await response.json()

        const report =
            result?.choices?.[0]?.message?.content ||
            'Unable to generate report.'

        renderReport(report)
    } catch (err) {
        console.error(err)

        loadingArea.innerHTML =
            '<p>There was an error generating the report.</p>'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'

    const outputArea = document.querySelector('.output-panel')

    outputArea.innerHTML = `
        <div style="
            border:3px solid #333;
            padding:25px;
            background:white;
        ">
            <h2 style="
                text-align:center;
                margin-bottom:20px;
            ">
                Your Report
            </h2>

            <p>${output}</p>
        </div>
    `

    outputArea.style.display = 'block'
}