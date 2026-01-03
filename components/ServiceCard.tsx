import { ArrowUpRight } from "lucide-react";
import Image from "./Image";
export default function ServiceCard({
    title,
    description,
    image
}: {
    title: string;
    description: string;
    image: string;
}) {
    return (
        <div className="group rounded-2xl border border-black/10 dark:border-white/10 p-8 hover:shadow-xl transition">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{title}</h3>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
            </div>

            <p className="mt-4 text-[var(--color-muted)]">
                {description}
            </p>
            <Image className="w-full h-64 object-cover rounded-lg mt-4" src={image} alt={title} width={250} height={250} />
        </div>
    );
}
