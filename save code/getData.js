const url = 'url'; // Replace 'url' by your wanted url

await page.goto(url, { waitUntil: 'networkidle2' }); // Loads the page and wait until it is fully loaded

    let data = await page.evaluate(() => {

        let example1 = document.querySelector('').innerText; // Example: let movieName = document.querySelector('div[class="movie-name"]').innerText;
        let example2 = document.querySelector('').innerText; // Example: let movieRating = document.querySelector('span[class="movie-rating"]').innerText;

        return {
            example1,
            example2
        }

    });

console.log(data); // Logs the data function

    