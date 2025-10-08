import Link from "../component/Link";

export function Home() {
    return (
        <div className="bg-gray-800 text-white h-dvh flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <Link to="/challenge2" label="Go to challenge 2" />
                <div>
                    Website made by Carlos Barranca. Source code available{" "}
                    <a
                        href="https://github.com/carlosbarranca9425/englishict"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        here
                    </a>
                    .
                </div>
            </div>
        </div>
    );
}
