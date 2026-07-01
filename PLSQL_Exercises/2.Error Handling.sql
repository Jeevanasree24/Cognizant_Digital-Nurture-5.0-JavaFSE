-- ============================================
-- Exercise 2 : Error Handling
-- ============================================

SET SERVEROUTPUT ON;

-------------------------------------------------
-- Scenario 1 : Safe Transfer Funds
-------------------------------------------------

CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    p_fromAccount NUMBER,
    p_toAccount NUMBER,
    p_amount NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001,'Insufficient Balance');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_fromAccount;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_toAccount;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Fund Transfer Successful');

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error : '||SQLERRM);
END;
/

-------------------------------------------------
-- Scenario 2 : Update Employee Salary
-------------------------------------------------

CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_employeeid NUMBER,
    p_percentage NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary*p_percentage/100)
    WHERE EmployeeID = p_employeeid;

    IF SQL%ROWCOUNT = 0 THEN
        RAISE NO_DATA_FOUND;
    END IF;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salary Updated');

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee ID Not Found');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/

-------------------------------------------------
-- Scenario 3 : Add New Customer
-------------------------------------------------

CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_id NUMBER,
    p_name VARCHAR2,
    p_dob DATE,
    p_balance NUMBER
)
AS
BEGIN

    INSERT INTO Customers
    VALUES(p_id,p_name,p_dob,p_balance,SYSDATE,NULL);

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Customer Added Successfully');

EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Customer ID Already Exists');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/

-------------------------------------------------
-- Execute Procedures
-------------------------------------------------

BEGIN
    SafeTransferFunds(1,2,100);
END;
/

BEGIN
    UpdateSalary(2,10);
END;
/

BEGIN
    AddNewCustomer(
        3,
        'David',
        DATE '1995-10-15',
        8000
    );
END;
/

-------------------------------------------------
-- Verify
-------------------------------------------------

SELECT * FROM Accounts;
SELECT * FROM Employees;
SELECT * FROM Customers;