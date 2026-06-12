/*
	Find the brand, model, condition and price of cars
           where the price is less than $250000
           or the brand is Porsche
           only show cars with condition > 3
*/

-- SELECT brand, model, condition, price FROM cars
--   WHERE (price < 250000
--   OR brand = 'Porsche')
--   AND condition > 3;


/*
	Search for brand, model, color, year and price of cars
		where the color is a shade of red
		or the year is between 1960 and 1969
                and sold is false
*/

SELECT brand, model, color, year, price, sold FROM cars
  WHERE (color LIKE '%red%'
  OR year BETWEEN 1960 AND 1969)
  AND sold IS FALSE;