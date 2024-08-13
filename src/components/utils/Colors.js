export function getColorClass(color) {
    const Colors = {
        Yellow: "bg-Yellow text-black",
        Blue: "bg-Blue text-black",
        Green: "bg-Green text-white",
        Purple: "bg-Purple text-white",
        Orange: "bg-Orange text-white",
    };

    return Colors[color] || Colors.Blue; 
}
