export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col shadow-md rounded-lg p-12 justify-center items-center text-center">
            {children}
        </div>
    );
}