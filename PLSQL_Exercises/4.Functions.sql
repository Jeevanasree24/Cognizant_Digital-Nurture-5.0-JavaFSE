-- ============================================
-- Exercise 4 : Functions
-- ============================================

SET SERVEROUTPUT ON;

-------------------------------------------------
-- Scenario 1 : Calculate Age
-------------------------------------------------

CREATE OR REPLACE FUNCTION CalculateAge(
    p_dob DATE
)
RETURN NUMBER
IS
    v_age NUMBER;
BEGIN
    v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, p_dob)/12);
    RETURN v_age;
END;
/

-------------------------------------------------
-- Scenario 2 : Calculate Monthly Installment
-------------------------------------------------

CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(
    p_loanAmount NUMBER,
    p_interestRate NUMBER,
    p_years NUMBER
)
RETURN NUMBER
IS
    v_monthly NUMBER;
BEGIN
    v_monthly := (p_loanAmount + (p_loanAmount * p_interestRate * p_years / 100))
                 / (p_years * 12);

    RETURN ROUND(v_monthly,2);
END;
/

-------------------------------------------------
-- Scenario 3 : Has Sufficient Balance
-------------------------------------------------

CREATE OR REPLACE FUNCTION HasSufficientBalance(
    p_accountID NUMBER,
    p_amount NUMBER
)
RETURN BOOLEAN
IS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_accountID;

    RETURN v_balance >= p_amount;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN FALSE;
END;
/

-------------------------------------------------
-- Test Function 1
-------------------------------------------------

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Age = ' || CalculateAge(DATE '1985-05-15')
    );
END;
/

-------------------------------------------------
-- Test Function 2
-------------------------------------------------

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Monthly Installment = ' ||
        CalculateMonthlyInstallment(50000,10,5)
    );
END;
/

-------------------------------------------------
-- Test Function 3
-------------------------------------------------

DECLARE
    v_result BOOLEAN;
BEGIN
    v_result := HasSufficientBalance(1,500);

    IF v_result THEN
        DBMS_OUTPUT.PUT_LINE('Sufficient Balance');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;
END;
/