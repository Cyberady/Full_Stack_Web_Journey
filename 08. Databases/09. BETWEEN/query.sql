/*
	Select cars made between 1980 and 1989
		show the brand, model, year and price
*/

-- SELECT brand, model, year, price from cars
--   WHERE year >= 1980
--   AND year <= 1989;


-- SELECT brand, model, year, price from cars
--   WHERE year BETWEEN 1980 AND 1989;

/*
	Select brand, model, condition, color and price from cars
        where the price is between $20000 and $60000
        and the condition is between 1 and 3
        and the color contains red
*/

SELECT brand, model, condition, color, price FROM cars
  WHERE price BETWEEN 20000 AND 60000
  AND condition BETWEEN 1 AND 3
  AND color LIKE '%red%';