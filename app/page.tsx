import Banner from "@/components/custom/banner.client";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <CardHeader>
              <Image
                className="rounded-t-lg"
                src="https://via.placeholder.com/400"
                alt="Coffee Shop"
                width={40}
                height={50}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Coffee Paradise</CardTitle>
              <CardDescription>
                A cozy place to enjoy your day and sip on the best artisan
                coffee in town.
              </CardDescription>
              <p className="text-sm text-gray-500 mt-1">
                123 Coffee Lane, Beanstown, CA
              </p>
              <p className="text-sm text-gray-500">Open: 08:00 - 20:00</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
