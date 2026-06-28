import java.util.Arrays;
import java.util.Comparator;

public class SearchFunctions {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {

        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(name)) {
                return p;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {

        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = products[mid].getProductName().compareToIgnoreCase(name);

            if (compare == 0)
                return products[mid];

            else if (compare < 0)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }
}