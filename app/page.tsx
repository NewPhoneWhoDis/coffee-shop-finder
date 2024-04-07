import Banner from "@/components/custom/banner.client";
import Link from "next/link";

export default function Home() {
  const coffeeStoreId = "test-coffee-store";
  const cityName = "Berlin";
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl flex flex-col items-start p-14">
        <Banner></Banner>
        <Link className="mt-4" href={`/coffee-store/${coffeeStoreId}`}>
          Test coffee shop
        </Link>
      </main>

      <p className="text-xl ml-4 font-bold"> Coffee Shops in {cityName}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="ml-4">test</div>
        <div>test 2</div>
        <div>test 3</div>
      </div>
    </div>
  );
}
