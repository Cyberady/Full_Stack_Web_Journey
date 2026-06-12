/*

      Select the brand, model and color from cars
        where the color is 'red'
        and the brand is not 'Ferrari'
        and the car has not been sold

*/

-- SELECT brand, model, color FROM cars
--   WHERE color LIKE '%red%'
--   AND brand != 'Ferrari'
--   AND sold IS FALSE;

/*

      Select the brand, model and color from cars
        where the color is not red, blue or white
        and the brand is none of: Aston Martin, Bentley or Jaguar
        and sold is false

*/

-- SELECT brand, model, color FROM cars
--   WHERE color NOT IN ('red', 'blue', 'white')
--   AND brand NOT IN ('Aston Martin', 'Bentley', 'Jaguar')
--   AND sold IS FALSE;


/*

      Select the brand, model, year, sold from cars
        where the brand is 'Dodge' and the year is in the 60s
        or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
        only slect cars where sold is not true (false)

*/

SELECT brand, model, year, sold FROM cars
  WHERE( ( brand = 'Dodge' AND year BETWEEN 1960 and 1969 )
  OR ( brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979 ) )
  AND sold IS NOT TRUE;