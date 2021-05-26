-- Exercícios

USE hr;

-- 1
SELECT 
    MAX(SALARY)
FROM
    employees

-- 2
SELECT 
    MAX(SALARY) - MIN(SALARY)
FROM
    employees

-- 3
SELECT 
    JOB_ID, AVG(SALARY) AS average
FROM
    employees
GROUP BY JOB_ID

-- 4
SELECT 
    SUM(SALARY)
FROM
    employees

-- 5
SELECT 
    ROUND(MAX(SALARY), 2),
    ROUND(MIN(SALARY), 2),
    ROUND(SUM(SALARY), 2),
    ROUND(AVG(SALARY), 2)
FROM
    employees

-- 6
SELECT 
    JOB_ID, COUNT(*) AS quantidade
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG'

-- 7
SELECT 
    JOB_ID, SUM(SALARY)
FROM
    employees
GROUP BY JOB_ID

-- 8
SELECT 
    JOB_ID, SUM(SALARY)
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG'

-- 9
SELECT 
    JOB_ID, ROUND(AVG(SALARY), 2) media
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'

-- 10
SELECT 
    DEPARTMENT_ID,
    ROUND(AVG(SALARY), 2) AS media,
    COUNT(*) AS employees
FROM
    employees
GROUP BY DEPARTMENT_ID
HAVING employees > 10

-- 11
UPDATE employees 
SET 
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
    PHONE_NUMBER LIKE '515%'

-- 12
SELECT 
    *
FROM
    employees
WHERE
    LENGTH(FIRST_NAME) >= 8

-- 13
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS `YEAR`
FROM
    employees

-- 14
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS `DAY`
FROM
    employees

-- 15
SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS `MONTH`
FROM
    employees

-- 16
SELECT 
    UCASE(FIRST_NAME)
FROM
    employees

-- 17
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    employees
WHERE
    HIRE_DATE LIKE '1987-07-%'

-- 18
SELECT 
    FIRST_NAME,
    LAST_NAME,
    CONCAT(DATEDIFF(CURRENT_DATE(), HIRE_DATE),
            ' dias') AS 'Tempo de trabalho'
FROM
    employees