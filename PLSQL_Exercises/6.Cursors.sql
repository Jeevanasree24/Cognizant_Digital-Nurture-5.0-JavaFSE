-- ============================================
-- Exercise 6 : Cursors
-- ============================================

SET SERVEROUTPUT ON;

-------------------------------------------------
-- Scenario 1 : Generate Monthly Statements
-------------------------------------------------

DECLARE

    CURSOR GenerateMonthlyStatements IS
        SELECT c.CustomerID,
               c.Name,
               t.TransactionID,
               t.TransactionDate,
               t.Amount,
               t.TransactionType
        FROM Customers c
        JOIN Accounts a
            ON c.CustomerID = a.CustomerID
        JOIN Transactions t
            ON a.AccountID = t.AccountID
        WHERE TRUNC(t.TransactionDate,'MM') = TRUNC(SYSDATE,'MM');

BEGIN

    DBMS_OUTPUT.PUT_LINE('----- Monthly Statements -----');

    FOR rec IN GenerateMonthlyStatements LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Customer ID : ' || rec.CustomerID ||
            ' | Name : ' || rec.Name ||
            ' | Transaction ID : ' || rec.TransactionID ||
            ' | Amount : ' || rec.Amount ||
            ' | Type : ' || rec.TransactionType
        );

    END LOOP;

END;
/

-------------------------------------------------
-- Scenario 2 : Apply Annual Fee
-------------------------------------------------

DECLARE

    CURSOR ApplyAnnualFee IS
        SELECT AccountID
        FROM Accounts;

BEGIN

    FOR acc IN ApplyAnnualFee LOOP

        UPDATE Accounts
        SET Balance = Balance - 100
        WHERE AccountID = acc.AccountID;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Annual Fee Applied Successfully.');

END;
/

-------------------------------------------------
-- Scenario 3 : Update Loan Interest Rates
-------------------------------------------------

DECLARE

    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID,
               InterestRate
        FROM Loans;

BEGIN

    FOR loan IN UpdateLoanInterestRates LOOP

        UPDATE Loans
        SET InterestRate = InterestRate + 0.5
        WHERE LoanID = loan.LoanID;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan Interest Rates Updated Successfully.');

END;
/

-------------------------------------------------
-- Verify Results
-------------------------------------------------

SELECT * FROM Accounts;

SELECT * FROM Loans;