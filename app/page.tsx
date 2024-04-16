import Banner from "@/components/custom/banner.client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

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
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <CardContent>Test street: 322 Adress: 233 City: 313</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
