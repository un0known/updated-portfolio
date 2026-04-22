export default function Test() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">
                Tailwind Dark Mode Test
            </h1>

            <div className="mt-4 p-6 rounded-xl bg-white dark:bg-gray-800">
                Card background change ho raha hai 🔥
            </div>
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-10">
                Test Theme
            </div>
        </div>
    );
}