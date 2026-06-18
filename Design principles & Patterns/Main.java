class Singleton {

    // Step 1: Create a static variable to hold the single instance
    private static Singleton instance;

    // Step 2: Make the constructor private so that no other class can create objects
    private Singleton() {
        System.out.println("Singleton Object Created");
    }

    // Step 3: Create a public static method to provide access to the object
    public static Singleton getInstance() {

        // Create the object only if it does not already exist
        if (instance == null) {
            instance = new Singleton();
        }

        // Return the same object every time
        return instance;
    }

    // A sample method
    public void displayMessage() {
        System.out.println("Welcome to Singleton Design Pattern");
    }
}

public class Main {

    public static void main(String[] args) {

        // Access the Singleton object
        Singleton obj1 = Singleton.getInstance();

        // Access the Singleton object again
        Singleton obj2 = Singleton.getInstance();

        // Call a method
        obj1.displayMessage();

        // Print hash codes
        System.out.println("Hash code of obj1: " + obj1.hashCode());
        System.out.println("Hash code of obj2: " + obj2.hashCode());

        // Compare both references
        if (obj1 == obj2) {
            System.out.println("Both obj1 and obj2 refer to the same instance.");
        } else {
            System.out.println("obj1 and obj2 refer to different instances.");
        }
    }
}