import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  const res = await fetch(
    category 
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products"
  );

    const data = await res.json();
    const products = data.products || [];

    console.log("Fetched products:",products);
  
  return (
    <div className="">
      <ProductList category={category} params="products"/>
    </div>
  );
};

export default ProductsPage;
