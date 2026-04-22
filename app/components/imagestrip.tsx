export default function ImageStrip({ image }: { image: string }) {
    return (
        <div className="relative h-[40vh] w-full overflow-hidden">

            {/* Image */}
            <img
                src={image}
                className="absolute w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

        </div>
    );
}