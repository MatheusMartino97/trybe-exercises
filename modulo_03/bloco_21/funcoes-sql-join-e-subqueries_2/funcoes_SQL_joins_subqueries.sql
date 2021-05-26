-- Exercícios

-- 1
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON M.id = B.movie_id;

-- 2
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON M.id = B.movie_id AND B.international_sales > B.domestic_sales;

-- 3
SELECT M.title, B.rating FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- 4
SELECT * FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- 5
SELECT * FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- 6
SELECT title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice
	WHERE rating > 7.5
);

SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id AND B.rating > 7.5;

-- 7
SELECT M.title, M.year, B.rating FROM Pixar.Movies AS M
INNER JOIN
Pixar.BoxOffice AS B
ON movie_id IN (
	SELECT id FROM Pixar.Movies
	WHERE year > 2009
) and M.id = B.movie_id;

-- 8
SELECT T.name, T.location FROM Pixar.Theater AS T
WHERE EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE theater_id = T.id
);

-- 9
SELECT T.name, T.location FROM Pixar.Theater AS T
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE theater_id = T.id
);

-- Bônus

-- 10
SELECT * FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id AND BO.rating > 8;

-- 11
SELECT M1.title, M1.length_minutes, M2.title, M2.length_minutes
FROM Pixar.Movies AS M1, Pixar.Movies AS M2
WHERE M1.director = M2.director AND M1.title <> M2.title;

-- 12
SELECT title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice
	WHERE domestic_sales + international_sales > 500000000
) AND length_minutes > 110;

SELECT title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.domestic_sales + BO.international_sales > 500000000
AND M.length_minutes > 110;
