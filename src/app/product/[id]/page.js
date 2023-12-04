import { data } from "@/utils/test";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/AddToCart";
import VideoPlayer from "@/components/VideoPlayer";

export default function ProductDetailPage({ params: { id } }) {
  const product = data.products.find((x) => x.id === id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          {!product.photos ? <p>图片丢失，此为占位图</p> : <></>}
          <Image
            src={product.photos?.[0] || "/placeholder.jpg"}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>
              <hr className="my-3" />
              Description:
              <p>{product.description}</p>
            </li>
            <li>
              <hr className="my-3" />
              Instruction video:
              <VideoPlayer
                videos={product.videos}
                controls={true}
                light={product.photos?.[0] || true}
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <AddToCart product={product} redirect={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
