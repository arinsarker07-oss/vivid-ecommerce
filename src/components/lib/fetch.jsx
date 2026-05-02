export const GetAllProduct =async()=> {
 const res= await fetch ("https://vivid-ecommerce-ui9y.vercel.app/data.json")
 const productsData = await res.json();
 return productsData
}