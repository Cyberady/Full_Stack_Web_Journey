function formatDate(date) {
    const yyyy = date.getFullYear()

    const mm = String(date.getMonth() + 1).padStart(2, '0') // Months start at 0!

    const dd = String(date.getDate()).padStart(2, '0')

    return `${yyyy}-${mm}-${dd}`
}

function getDateNDaysAgo(n) {
    const now = new Date() // current date and time

    now.setDate(now.getDate() - n) // subtract n days from current date

    return formatDate(now)
}

export const dates = {
    startDate: getDateNDaysAgo(3), // alter days to increase or decrease data set

    endDate: getDateNDaysAgo(1) // leave at 1 to get yesterday's data
}