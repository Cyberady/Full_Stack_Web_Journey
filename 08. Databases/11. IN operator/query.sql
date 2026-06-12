/*

      Select the brand, model, price and sold columns from cars
         the brand can be 'Ford', 'Chevorlet' or 'Ferrari'
         sold must be false

*/

-- SELECT brand, model, price, sold FROM cars
--    WHERE brand IN ('Ford', 'Chevorlet', 'Ferrari')
--    AND sold IS FALSE;


/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/  

-- SELECT brand, model, condition, year FROM cars
--   WHERE year IN ( 1961, 1963, 1965, 1967, 1969)
--   AND condition >= 3
--   AND sold IS FALSE;

/*
	Select the brand, model, price and sold from cars
		filter out any cars which are sold
    show cars where the brand is none of ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
    or the price is less than $50000
*/  

SELECT brand, model, price, sold FROM cars
  WHERE (
    brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
    OR price < 50000
  ) AND sold IS FALSE; 

