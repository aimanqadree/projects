import ProductCard from "../../../components/prouctcard";

const products = [
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Hat", price: 15 },
    { id: 3, name: "Shoes", price: 25 },
    { id: 4, name: "Dresses", price: 30 },
    { id: 5, name: "Ear-Rings", price: 34 },
    { id: 6, name: "Rings", price: 22 },
    { id: 7, name: "Watch", price: 60 },
    { id: 8, name: "Shirts", price: 70 },
  ];


export default function ProductsPage() {
    return (
        <div>
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p) => (
          <ProductCard key={p.id} product={p}/>
          ))}
        </div>
      </div>
     );
}