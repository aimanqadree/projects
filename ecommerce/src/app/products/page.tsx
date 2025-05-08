// import ProductCard from "../../../components/prouctcard";

// const products = [
//     { id: 1, name: "T-shirt", price: 20 },
//     { id: 2, name: "Hat", price: 15 },
//     { id: 3, name: "Shoes", price: 25 },
//     { id: 4, name: "Dresses", price: 30 },
//     { id: 5, name: "Ear-Rings", price: 34 },
//     { id: 6, name: "Rings", price: 22 },
//     { id: 7, name: "Watch", price: 60 },
//     { id: 8, name: "Shirts", price: 70 },
//   ];


// export default function ProductsPage() {
//     return (
//         <div>
//         <h1 className="text-3xl font-bold mb-4 flex justify-center">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {products.map((p) => (
//           <ProductCard key={p.id} product={p}/>
//           ))}
//         </div>
//       </div>
//      );
// }

"use client";
import ProductCard from "@/components/prouctcard";

type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
  image?: string;
};

const products: Product[] = [
  { 
    id: 1, 
    name: "Classic T-shirt", 
    price: 20, 
    category: "Clothing", 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format" 
  },
  { 
    id: 2, 
    name: "Stylish Hat", 
    price: 15, 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=500&auto=format" 
  },
  { 
    id: 3, 
    name: "Running Shoes", 
    price: 25, 
    category: "Footwear", 
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format" 
  },
  { 
    id: 4, 
    name: "Summer Dress", 
    price: 30, 
    category: "Clothing", 
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680e956?w=500&auto=format" 
  },
  { 
    id: 5, 
    name: "Gold Earrings", 
    price: 34, 
    category: "Jewelry", 
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format" 
  },
  { 
    id: 6, 
    name: "Diamond Ring", 
    price: 22, 
    category: "Jewelry", 
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format" 
  },
  { 
    id: 7, 
    name: "Smart Watch", 
    price: 60, 
    category: "Electronics", 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format" 
  },
  { 
    id: 8, 
    name: "Formal Shirt", 
    price: 70, 
    category: "Clothing", 
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format" 
  },
  { 
    id: 9, 
    name: "Denim Jeans", 
    price: 45, 
    category: "Clothing", 
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format" 
  },
  { 
    id: 10, 
    name: "Leather Belt", 
    price: 28, 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1604176354204-92660f0a079a?w=500&auto=format" 
  },
  { 
    id: 11, 
    name: "Sunglasses", 
    price: 32, 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format" 
  },
  { 
    id: 12, 
    name: "Backpack", 
    price: 55, 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format" 
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
    </div>
  );
}