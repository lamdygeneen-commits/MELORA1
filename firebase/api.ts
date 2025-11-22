import { products } from '../data/products';
import { Product, CartItem } from '../types';

// This file simulates API calls to a backend.
// Replace these functions with actual Firebase/Firestore calls.

const simulateDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

/**
 * Simulates fetching all products from the database.
 * TODO: Replace with a call to Firestore to get documents from the 'products' collection.
 */
export const getProducts = async (): Promise<Product[]> => {
  console.log("Simulating API call: getProducts");
  await simulateDelay(500); // Simulate network latency
  return Promise.resolve(products);
};

/**
 * Simulates fetching a single product by its ID.
 * TODO: Replace with a call to Firestore to get a single document from 'products'.
 */
export const getProductById = async (id: string): Promise<Product | undefined> => {
    console.log(`Simulating API call: getProductById(${id})`);
    await simulateDelay(300);
    const product = products.find(p => p.id === id);
    return Promise.resolve(product);
}

interface OrderData {
    customer: {
        fullName: string;
        phoneNumber: string;
        address: string;
        city: string;
        country: string;
    };
    items: CartItem[];
    total: number;
}

/**
 * Simulates creating a new order in the database.
 * TODO: Replace with a Cloud Function call or a direct write to the 'orders' and 'customers' collections in Firestore.
 */
export const createOrder = async (orderData: OrderData): Promise<{ success: boolean; orderId: string }> => {
    console.log("Simulating API call: createOrder with data:", orderData);
    await simulateDelay(1000);
    // In a real backend, you would save this to Firestore and get a real order ID.
    const mockOrderId = `ORD-${Date.now()}`;
    console.log(`Order created successfully with mock ID: ${mockOrderId}`);
    return Promise.resolve({ success: true, orderId: mockOrderId });
}
